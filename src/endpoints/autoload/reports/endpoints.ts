import { BaseEndpoint } from "../../base-endpoint";
import type { ItemsResponse } from "../../../types";
import type {
  AutoloadReport,
  GetAutoloadReportItemsOptions,
  GetAutoloadReportsItemsOptions,
  ListAutoloadReportItems,
  ListAutoloadReportItemsFees,
  ListAutoloadReportItemsFeesOptions,
  ListAutoloadReports,
  ListAutoloadReportsOptions,
} from "./types";
import type { AutoloadItem } from "../items";

const ENDPOINT_URL = `/autoload/v2/reports`;
const ENDPOINT_URL_V3 = `/autoload/v3/reports`;

export class AutoloadReportsEndpoint extends BaseEndpoint {
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
  async list(
    options: ListAutoloadReportsOptions = {},
  ): Promise<ListAutoloadReports> {
    const { perPage, page, dateFrom, dateTo } = options;

    const searchParams = new URLSearchParams();
    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (dateFrom) searchParams.append("date_from", dateFrom);
    if (dateTo) searchParams.append("date_to", dateTo);

    const response = await this.client.get(`${ENDPOINT_URL}`, { searchParams });

    return response.json();
  }

  /**
   * Статистика по конкретной выгрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportByIdV3
   *
   * @returns Возвращает сводную статистику с результатами конкретной выгрузки {@linkcode AutoloadReport}
   */
  async get(reportId: number): Promise<AutoloadReport> {
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
  async getItems(
    options: GetAutoloadReportsItemsOptions,
  ): Promise<ItemsResponse<AutoloadItem>> {
    const query = options.query.filter((id) => id.trim().length).join(",");
    const response = await this.client.get(
      `${ENDPOINT_URL}/items?query=${query}`,
    );

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
  async getItemsByReportId(
    reportId: number,
    options: GetAutoloadReportItemsOptions = {},
  ): Promise<ListAutoloadReportItems> {
    const { perPage, page, query, sections } = options;

    const searchParams = new URLSearchParams();

    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (query)
      searchParams.append(
        "query",
        query.filter((id) => id.trim().length).join(","),
      );
    if (sections) searchParams.append("sections", sections.join(","));

    const response = await this.client.get(
      `${ENDPOINT_URL}/${reportId}/items`,
      { searchParams },
    );

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
  async getItemsFees(
    reportId: number,
    options: ListAutoloadReportItemsFeesOptions = {},
  ): Promise<ListAutoloadReportItemsFees> {
    const { perPage, page, adIds, avitoIds } = options;

    const searchParams = new URLSearchParams();

    if (perPage) searchParams.append("per_page", perPage.toString());
    if (page) searchParams.append("page", page.toString());
    if (adIds)
      searchParams.append(
        "ad_ids",
        adIds.filter((id) => id.trim().length).join(","),
      );
    if (avitoIds)
      searchParams.append(
        "avito_ids",
        avitoIds.filter((id) => typeof id === "number").join(","),
      );

    const response = await this.client.get(
      `${ENDPOINT_URL}/${reportId}/items/fees`,
      { searchParams },
    );

    return response.json();
  }

  /**
   * Статистика по последней выгрузке
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getLastCompletedReportV3
   *
   * @returns Возвращает данные по конкретным объявлениям. {@linkcode AutoloadReportsItems}
   */
  async getLastCompletedReport(): Promise<AutoloadReport> {
    const response = await this.client.get(
      `${ENDPOINT_URL_V3}/last_completed_report`,
    );

    return response.json();
  }
}
