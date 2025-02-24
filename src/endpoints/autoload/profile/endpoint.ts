import { BaseEndpoint } from "../../base-endpoint";
import type { AutoloadProfile, AutoloadProfileCreateOrUpdate } from "./types";

const ENDPOINT_URL = "/autoload/v2/profile";

export class AutoloadProfileEndpoint extends BaseEndpoint {
  /**
   * Получение профиля пользователя автозагрузки
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2
   *
   * @returns Возвращает настройки профиля пользователя автозагрузки. {@linkcode AutoloadProfile}
   */
  async get(): Promise<AutoloadProfile> {
    const response = await this.client.get(`${ENDPOINT_URL}`);

    return response.json();
  }

  /**
   * Создание/редактирование настроек профиля пользователя автозагрузки
   *
   * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/createOrUpdateProfileV2
   *
   * @returns Успешное обновление настроек профиля
   */
  async createOrUpdate(body: AutoloadProfileCreateOrUpdate): Promise<boolean> {
    const response = await this.client.post(`${ENDPOINT_URL}`, { body });

    return response.ok;
  }
}
