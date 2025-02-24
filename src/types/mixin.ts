export interface AdIdable {
  /** Идентификатор объявления из файла */
  readonly ad_id: string | null;
}

export interface AvitoIdable {
  /** Идентификатор объявления на Авито */
  readonly avito_id: number;
}
