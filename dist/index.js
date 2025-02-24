const version = "0.0.1";

class AvitoError extends Error {
  response;
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
class AvitoApiError extends AvitoError {
  code;
  message;
  constructor(code, message, response) {
    super(message, response);
    this.code = code;
    this.message = message;
  }
}

const DEFAULT_TOKEN = { access_token: "", token_type: "Bearer" };
class ApiClient {
  baseUrl;
  userAgent;
  auth;
  retrieveToken = false;
  constructor(options) {
    this.baseUrl = options.baseUrl ?? "https://api.avito.ru";
    this.userAgent = options.userAgent ?? `avito-api/${version} (+https://github.com/demark-pro/avito-api)`;
    this.auth = options.auth;
  }
  async request(endpoint, { searchParams, ...options } = {}) {
    const url = this.buildUrl(endpoint);
    const avitoToken = await this.auth.getToken() ?? DEFAULT_TOKEN;
    const response = await fetch(
      url.toString() + (searchParams && searchParams.size > 0 ? `?${searchParams.toString()}` : ""),
      {
        ...options,
        body: options.body ? JSON.stringify(options.body) : void 0,
        headers: {
          ...options.headers,
          "Authorization": `${avitoToken.token_type} ${avitoToken.access_token}`,
          "User-Agent": this.userAgent,
          "Content-Type": "application/json"
        }
      }
    );
    if (response.ok) return response;
    const { error } = await response.json();
    if (response.status === 403 || response.status === 401) {
      if (this.retrieveToken) {
        throw new AvitoApiError(error.code, error.message, response);
      }
      const token = await this._getToken();
      await this.auth.setToken(token);
      this.retrieveToken = true;
      return this.request(endpoint, { ...options, searchParams });
    }
    throw new AvitoApiError(error.code, error.message, response);
  }
  async _getToken() {
    const searchParams = new URLSearchParams();
    searchParams.append("grant_type", "client_credentials");
    searchParams.append("client_id", this.auth.client_id);
    searchParams.append("client_secret", this.auth.сlient_secret);
    const response = await this.post(`/token`, {
      searchParams,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
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
  async get(url, options = {}) {
    return this.request(url, { ...options, method: "GET" });
  }
  /**
   * Shorthand для POST запроса.
   *
   * {@linkcode request}
   */
  async post(url, options = {}) {
    return this.request(url, { ...options, method: "POST" });
  }
  /**
   * Shorthand для PUT запроса.
   *
   * {@linkcode request}
   */
  async put(url, options = {}) {
    return this.request(url, { ...options, method: "PUT" });
  }
  /**
   * Shorthand для DELETE запроса.
   *
   * {@linkcode request}
   */
  async delete(url, options = {}) {
    return this.request(url, { ...options, method: "DELETE" });
  }
  /**
   * Нормализует URL, удаляя лишние слеши.
   *
   * @param url - URL
   *
   * @returns Нормализованный URL
   */
  normalizeUrl(url) {
    return url.replaceAll(/\/{2,}/g, "/");
  }
  /**
   * Строит объект типа `URL` из строки.
   *
   * @param url - URL
   *
   * @returns Объект типа `URL`
   */
  buildStringUrl(url) {
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
  buildArrayUrl(url) {
    const shouldIncludeBaseUrl = !url[0]?.startsWith("http");
    const returnUrl = shouldIncludeBaseUrl ? `${this.baseUrl}/${url.join("/")}` : url.join("/");
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
  buildUrl(url) {
    if (typeof url === "string") return this.buildStringUrl(url);
    return this.buildArrayUrl(url);
  }
}

class BaseEndpoint {
  client;
  constructor(client) {
    this.client = client;
  }
}

const ENDPOINT_URL$3 = `/autoload/v2/items`;
class AutoloadItemsEndpoint extends BaseEndpoint {
  /**
   * ID объявлений из файла
   * 
   * Метод позволяет получить идентификаторы (ID) объявлений из файла автозагрузки по ID объявлений на Авито.
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAdIdsByAvitoIds
   *
   * @param options Параметры запроса {@linkcode ListAdIdsAutoloadItemsOptions}
   * @returns Список связанных идентификаторов (ID) объявлений из файла с идентификаторами (ID) на Авито {@linkcode ItemsResponse<AutoloadItemShort>}
   */
  async getAdIds(options) {
    const query = options.query.filter((id) => typeof id === "number").join(",");
    const response = await this.client.get(`${ENDPOINT_URL$3}/ad_ids?query=${query}`);
    return response.json();
  }
  /**
   * ID объявлений на Авито
   * 
   * Метод позволяет получить идентификаторы (ID) объявлений на Авито по идентификаторам объявлений из файла автозагрузки.
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAvitoIdsByAdIds
   *
   * @param options Параметры запроса {@linkcode ListAvitoIdsAutoloadItemsOptions}
   * @returns Список связанных идентификаторов (ID) объявлений 
   * из файла с идентификаторами (ID) на Авито {@linkcode ItemsResponse<AutoloadItemShort>}
   */
  async getAvitoIds(options) {
    const query = options.query.filter((id) => id.trim().length).join(",");
    const response = await this.client.get(`${ENDPOINT_URL$3}/avito_ids?query=${query}`);
    return response.json();
  }
}

const ENDPOINT_URL$2 = "/autoload/v2/profile";
class AutoloadProfileEndpoint extends BaseEndpoint {
  /**
   * Получение профиля пользователя автозагрузки
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2
   *
   * @returns Возвращает настройки профиля пользователя автозагрузки. {@linkcode AutoloadProfile}
   */
  async get() {
    const response = await this.client.get(`${ENDPOINT_URL$2}`);
    return response.json();
  }
  /**
   * Создание/редактирование настроек профиля пользователя автозагрузки
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/createOrUpdateProfileV2
   *
   * @returns Успешное обновление настроек профиля
   */
  async createOrUpdate(body) {
    const response = await this.client.post(`${ENDPOINT_URL$2}`, { body });
    return response.ok;
  }
}

const ENDPOINT_URL$1 = `/autoload/v2/reports`;
const ENDPOINT_URL_V3 = `/autoload/v3/reports`;
class AutoloadReportsEndpoint extends BaseEndpoint {
  /**
   * Список отчётов автозагрузки
   * 
   * По запросу вы получите список отчётов автозагрузки. Они будут отсортированы в порядке убывания: самый свежий отчёт — в начале списка.
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportsV2
   *
   * @param options Параметры запроса {@linkcode ListAutoloadReportsOptions}
   * @returns Возвращает список отчетов {@linkcode ListAutoloadReports}
   */
  async list(options = {}) {
    const { perPage, page, dateFrom, dateTo } = options;
    const searchParams = new URLSearchParams();
    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (dateFrom) searchParams.append("date_from", dateFrom);
    if (dateTo) searchParams.append("date_to", dateTo);
    const response = await this.client.get(`${ENDPOINT_URL$1}`, { searchParams });
    return response.json();
  }
  /**
   * Статистика по конкретной выгрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportByIdV3
   *
   * @returns Возвращает сводную статистику с результатами конкретной выгрузки {@linkcode AutoloadReport}
   */
  async get(reportId) {
    const response = await this.client.get(`${ENDPOINT_URL_V3}/${reportId}`);
    return response.json();
  }
  /**
   * Объявления по ID в автозагрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAutoloadItemsInfoV2
   *
   * @param options Параметры запроса {@linkcode GetAutoloadReportsItemsOptions}
   * @returns Возвращает данные по конкретным объявлениям. {@linkcode ItemsResponse<AutoloadItem>}
   */
  async getItems(options) {
    const query = options.query.filter((id) => id.trim().length).join(",");
    const response = await this.client.get(`${ENDPOINT_URL$1}/items?query=${query}`);
    return response.json();
  }
  /**
   * Все объявления из конкретной выгрузки
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportItemsById
   *
   * @param reportId ID выгрузки 
   * @param options Параметры запроса {@linkcode GetAutoloadReportItemsOptions}
   * @returns Возвращает данные по конкретным объявлениям. {@linkcode ListAutoloadReportItems}
   */
  async getItemsByReportId(reportId, options = {}) {
    const { perPage, page, query, sections } = options;
    const searchParams = new URLSearchParams();
    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (query) searchParams.append("query", query.filter((id) => id.trim().length).join(","));
    if (sections) searchParams.append("sections", sections.join(","));
    const response = await this.client.get(`${ENDPOINT_URL$1}/${reportId}/items`, { searchParams });
    return response.json();
  }
  /**
   * Списания за объявления в конкретной выгрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportItemsFeesById
   * 
   * С помощью этого метода можно получить информацию о списаниях за размещение каждого объявления в конкретной выгрузке.
   *
   * @param reportId ID выгрузки 
   * @param options Параметры запроса {@linkcode ListAutoloadReportItemsFeesOptions}
   * @returns Возвращает cписок списаний за размещение объявлений {@linkcode ListAutoloadReportItemsFees}
   */
  async getItemsFees(reportId, options = {}) {
    const { perPage, page, adIds, avitoIds } = options;
    const searchParams = new URLSearchParams();
    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (adIds) searchParams.append("ad_ids", adIds.filter((id) => id.trim().length).join(","));
    if (avitoIds) searchParams.append("avito_ids", avitoIds.filter((id) => typeof id === "number").join(","));
    const response = await this.client.get(`${ENDPOINT_URL$1}/${reportId}/items/fees`, { searchParams });
    return response.json();
  }
  /**
   * Статистика по последней выгрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getLastCompletedReportV3
   *
   * @returns Возвращает данные по конкретным объявлениям. {@linkcode AutoloadReportsItems}
   */
  async getLastCompletedReport() {
    const response = await this.client.get(`${ENDPOINT_URL_V3}/last_completed_report`);
    return response.json();
  }
}

const ENDPOINT_URL = "/autoload";
class AutoloadEndpoint extends BaseEndpoint {
  items;
  profile;
  reports;
  constructor(client) {
    super(client);
    this.items = new AutoloadItemsEndpoint(client);
    this.profile = new AutoloadProfileEndpoint(client);
    this.reports = new AutoloadReportsEndpoint(client);
  }
  /**
   * Загрузка файла по ссылке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/upload
   *
   * @returns Выгрузка файла по ссылке запущена успешно
   */
  async upload() {
    const response = await this.client.post(`${ENDPOINT_URL}/v1/upload`);
    return response.ok;
  }
}

class Avito {
  client;
  autoload;
  constructor(options) {
    this.client = new ApiClient(options);
    this.autoload = new AutoloadEndpoint(this.client);
  }
}

export { Avito };
//# sourceMappingURL=index.js.map
