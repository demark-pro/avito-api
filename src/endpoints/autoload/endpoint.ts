import type { ApiClient } from "../../api-client";
import { BaseEndpoint } from "../base-endpoint";
import { AutoloadItemsEndpoint } from "./items";
import { AutoloadProfileEndpoint } from "./profile";
import { AutoloadReportsEndpoint } from "./reports";

const ENDPOINT_URL = "/autoload";

export class AutoloadEndpoint extends BaseEndpoint {
  public items: AutoloadItemsEndpoint;
  public profile: AutoloadProfileEndpoint;
  public reports: AutoloadReportsEndpoint;

  constructor(client: ApiClient) {
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
  async upload(): Promise<boolean> {
    const response = await this.client.post(`${ENDPOINT_URL}/v1/upload`);

    return response.ok;
  }
}
