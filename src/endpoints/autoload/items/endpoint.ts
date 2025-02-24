import { BaseEndpoint } from "../../base-endpoint";
import type { ItemsResponse } from "../../../types";
import type {
  AutoloadItemShort,
  ListAdIdsAutoloadItemsOptions,
  ListAvitoIdsAutoloadItemsOptions,
} from "./types";

const ENDPOINT_URL = `/autoload/v2/items`;

export class AutoloadItemsEndpoint extends BaseEndpoint {
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
  async getAdIds(
    options: ListAdIdsAutoloadItemsOptions,
  ): Promise<ItemsResponse<AutoloadItemShort>> {
    const query = options.query
      .filter((id) => typeof id === "number")
      .join(",");
    const response = await this.client.get(
      `${ENDPOINT_URL}/ad_ids?query=${query}`,
    );

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
  async getAvitoIds(
    options: ListAvitoIdsAutoloadItemsOptions,
  ): Promise<ItemsResponse<AutoloadItemShort>> {
    const query = options.query.filter((id) => id.trim().length).join(",");
    const response = await this.client.get(
      `${ENDPOINT_URL}/avito_ids?query=${query}`,
    );

    return response.json();
  }
}
