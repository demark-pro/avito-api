import { version } from "../../package.json" with { type: "json" };
import { AvitoApiError } from "../errors";

export type Token = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export type CredentialsAuth = {
  client_id: string;
  сlient_secret: string;
  getToken: () => Token | Promise<Token | null | undefined>;
  setToken: (token: Token) => void | Promise<any>;
};

// TODO: Сделать
export type TokenAuth = {
  token: string;
};

export type Auth = CredentialsAuth;

export type ApiClientOptions = {
  /**
   * Базовый URL
   *
   * @default https://api.avito.ru
   */
  baseUrl?: string;

  /**
   * User-Agent header
   *
   * @default `avito-api/${version} (+https://github.com/demark-pro/avito-api)`, где `{version}` - версия библиотеки
   */
  userAgent?: string;
  /**
   * Опции авторизации
   *
   * {@linkcode Auth}
   */
  auth: Auth;
};

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: object;
  searchParams?: URLSearchParams;
};
type RequestOptionsWithoutMethod = Omit<RequestOptions, "method">;

const DEFAULT_TOKEN: Token = {
  access_token: "",
  expires_in: 0,
  token_type: "Bearer",
};

export class ApiClient {
  private baseUrl: string;
  private userAgent: string;
  private auth: Auth;
  private retrieveToken: boolean = false;

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl ?? "https://api.avito.ru";
    this.userAgent =
      options.userAgent ??
      `avito-api/${version} (+https://github.com/demark-pro/avito-api)`;
    this.auth = options.auth;
  }

  async request(
    endpoint: string,
    { searchParams, ...options }: RequestOptions = {},
  ): Promise<Response> {
    const url = this.buildUrl(endpoint);

    const avitoToken = (await this.auth.getToken()) ?? DEFAULT_TOKEN;

    const response = await fetch(
      url.toString() +
        (searchParams && searchParams.size > 0
          ? `?${searchParams.toString()}`
          : ""),
      {
        ...options,
        body: options.body ? JSON.stringify(options.body) : undefined,
        headers: {
          ...options.headers,
          Authorization: `${avitoToken.token_type} ${avitoToken.access_token}`,
          "User-Agent": this.userAgent,
          "Content-Type": "application/json",
        },
      },
    );

    if (response.ok) return response;

    const { error } = await response.json();

    if (response.status === 403 || response.status === 401) {
      if (this.retrieveToken) {
        // console.log("retrieveToken error - ", error)

        throw new AvitoApiError(error.code, error.message, response);
      }

      const token = await this._getToken();
      await this.auth.setToken(token);
      this.retrieveToken = true;

      return this.request(endpoint, { ...options, searchParams });
    }

    throw new AvitoApiError(error.code, error.message, response);
  }

  private async _getToken(): Promise<Token> {
    const searchParams = new URLSearchParams();
    searchParams.append("grant_type", "client_credentials");
    searchParams.append("client_id", this.auth.client_id);
    searchParams.append("client_secret", this.auth.сlient_secret);

    const response = await this.post(`/token`, {
      searchParams: searchParams,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (response.ok) return response.json();

    const { error } = await response.json();
    throw new AvitoApiError(error.code, error.message, response);
  }

  /**
   * Shorthand для GET запроса.
   *
   * {@linkcode request}
   * */
  async get(
    url: string,
    options: RequestOptionsWithoutMethod = {},
  ): Promise<Response> {
    return this.request(url, { ...options, method: "GET" });
  }

  /**
   * Shorthand для POST запроса.
   *
   * {@linkcode request}
   */
  async post(
    url: string,
    options: RequestOptionsWithoutMethod = {},
  ): Promise<Response> {
    return this.request(url, { ...options, method: "POST" });
  }

  /**
   * Shorthand для PUT запроса.
   *
   * {@linkcode request}
   */
  async put(
    url: string,
    options: RequestOptionsWithoutMethod = {},
  ): Promise<Response> {
    return this.request(url, { ...options, method: "PUT" });
  }

  /**
   * Shorthand для DELETE запроса.
   *
   * {@linkcode request}
   */
  async delete(
    url: string,
    options: RequestOptionsWithoutMethod = {},
  ): Promise<Response> {
    return this.request(url, { ...options, method: "DELETE" });
  }

  /**
   * Нормализует URL, удаляя лишние слеши.
   *
   * @param url - URL
   *
   * @returns Нормализованный URL
   */
  private normalizeUrl(url: string): string {
    return url.replaceAll(/\/{2,}/g, "/");
  }

  /**
   * Строит объект типа `URL` из строки.
   *
   * @param url - URL
   *
   * @returns Объект типа `URL`
   */
  private buildStringUrl(url: string): URL {
    const shouldIncludeBaseUrl = !url.startsWith("http");

    const returnUrl = shouldIncludeBaseUrl ? `${this.baseUrl}/${url}` : url;

    return new URL(this.normalizeUrl(returnUrl));
  }

  /**
   * Cтроит объект типа `URL` из массива строк.
   *
   * @param url - массив строк URL
   *
   * @returns Объект типа `URL`
   */
  private buildArrayUrl(url: string[]): URL {
    const shouldIncludeBaseUrl = !url[0]?.startsWith("http");

    const returnUrl = shouldIncludeBaseUrl
      ? `${this.baseUrl}/${url.join("/")}`
      : url.join("/");

    return new URL(this.normalizeUrl(returnUrl));
  }

  /**
   * Строит URL из строки или массива строк.
   *
   * @param url - строка или массив строк URL
   *
   * @returns Объект типа `URL` с нормализованным URL и базовым адресом, указанным в опциях инциализации
   *
   * @example С массивом строк
   * ```ts
   * buildUrl(["autoload", "v2", "profile"])
   * // "https://api.avito.ru/autoload/v2/profile"
   * ```
   *
   * @example Со строкой
   * ```ts
   * buildUrl("/autoload/v2/profile")
   * // "https://api.avito.ru/autoload/v2/profile"
   * ```
   */
  buildUrl(url: string | string[]): URL {
    if (typeof url === "string") return this.buildStringUrl(url);

    return this.buildArrayUrl(url);
  }
}
