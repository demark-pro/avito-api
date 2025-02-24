export declare interface AdIdable {
    /** Идентификатор объявления из файла */
    readonly ad_id: string | null;
}

declare class ApiClient {
    private baseUrl;
    private userAgent;
    private auth;
    private retrieveToken;
    constructor(options: ApiClientOptions);
    request(endpoint: string, { searchParams, ...options }?: RequestOptions): Promise<Response>;
    private _getToken;
    /**
     * Shorthand для GET запроса.
     *
     * {@linkcode request}
     * */
    get(url: string, options?: RequestOptionsWithoutMethod): Promise<Response>;
    /**
     * Shorthand для POST запроса.
     *
     * {@linkcode request}
     */
    post(url: string, options?: RequestOptionsWithoutMethod): Promise<Response>;
    /**
     * Shorthand для PUT запроса.
     *
     * {@linkcode request}
     */
    put(url: string, options?: RequestOptionsWithoutMethod): Promise<Response>;
    /**
     * Shorthand для DELETE запроса.
     *
     * {@linkcode request}
     */
    delete(url: string, options?: RequestOptionsWithoutMethod): Promise<Response>;
    /**
     * Нормализует URL, удаляя лишние слеши.
     *
     * @param url - URL
     *
     * @returns Нормализованный URL
     */
    private normalizeUrl;
    /**
     * Строит объект типа `URL` из строки.
     *
     * @param url - URL
     *
     * @returns Объект типа `URL`
     */
    private buildStringUrl;
    /**
     * Cтроит объект типа `URL` из массива строк.
     *
     * @param url - массив строк URL
     *
     * @returns Объект типа `URL`
     */
    private buildArrayUrl;
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
    buildUrl(url: string | string[]): URL;
}

export declare type ApiClientOptions = {
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

export declare type Auth = CredentialsAuth;

export declare class AutoloadEndpoint extends BaseEndpoint {
    items: AutoloadItemsEndpoint;
    profile: AutoloadProfileEndpoint;
    reports: AutoloadReportsEndpoint;
    constructor(client: ApiClient);
    /**
     * Загрузка файла по ссылке
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/upload
     *
     * @returns Выгрузка файла по ссылке запущена успешно
     */
    upload(): Promise<boolean>;
}

export declare interface AutoloadItem extends AdIdable, AvitoIdable {
    avito_date_end: string | null;
    avito_status: AutoloadItemStatuses | null;
    fee_info: AutoloadItemFeeInfo | null;
    messages: AutoloadItemMessage[];
    processing_time: string | null;
    section: AutoloadItemSection;
    url: string | null;
}

export declare interface AutoloadItemFee extends AdIdable, AvitoIdable {
    fees_amount: number;
    fees_package_id: number | null;
    fees_type: AutoloadItemFeeTypes;
}

export declare type AutoloadItemFeeInfo = {
    amount: number | null;
    package_id: number | null;
    type: "single" | "package";
};

export declare type AutoloadItemFeeTypes = "single" | "package";

export declare type AutoloadItemMessage = {
    code: number;
    description: string;
    title: string;
    type: "error" | "warning" | "info" | "alarm";
    updated_at: string;
};

export declare type AutoloadItemSection = {
    slug: string;
    title: string;
};

export declare class AutoloadItemsEndpoint extends BaseEndpoint {
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
    getAdIds(options: ListAdIdsAutoloadItemsOptions): Promise<ItemsResponse<AutoloadItemShort>>;
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
    getAvitoIds(options: ListAvitoIdsAutoloadItemsOptions): Promise<ItemsResponse<AutoloadItemShort>>;
}

export declare interface AutoloadItemShort extends AdIdable, AvitoIdable {
}

export declare type AutoloadItemStatuses = "active" | "old" | "blocked" | "rejected" | "archived" | "removed";

export declare interface AutoloadProfile {
    autoload_enabled: boolean;
    feeds_data: AutoloadProfileFeedsDataItem[] | null;
    report_email: string | null;
    schedule: AutoloadProfileScheduleItem[];
}

export declare interface AutoloadProfileCreateOrUpdate extends RequiredNotNull<AutoloadProfile, "feeds_data" | "report_email"> {
    agreement?: boolean;
}

export declare class AutoloadProfileEndpoint extends BaseEndpoint {
    /**
     * Получение профиля пользователя автозагрузки
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2
     *
     * @returns Возвращает настройки профиля пользователя автозагрузки. {@linkcode AutoloadProfile}
     */
    get(): Promise<AutoloadProfile>;
    /**
     * Создание/редактирование настроек профиля пользователя автозагрузки
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/createOrUpdateProfileV2
     *
     * @returns Успешное обновление настроек профиля
     */
    createOrUpdate(body: AutoloadProfileCreateOrUpdate): Promise<boolean>;
}

export declare type AutoloadProfileFeedsDataItem = {
    feed_name: string;
    feed_url: string;
};

export declare type AutoloadProfileScheduleItem = {
    rate: number;
    time_slots: number[];
    weekdays: number[];
};

export declare interface AutoloadReport {
    events: AutoloadReportEvent[];
    feeds_urls: AutoloadReportFeedUrl[];
    finished_at: string;
    listing_fees: [];
    report_id: number;
    section_stats: {
        count: number;
        sections: AutoloadReportSection[];
    };
    source: AutoloadReportSourses;
    started_at: string;
    status: AutoloadReportStatuses;
}

export declare type AutoloadReportEvent = {
    code: number;
    description: string;
    type: string;
};

export declare type AutoloadReportFeedUrl = {
    name: string;
    url: string;
};

export declare interface AutoloadReportItem extends Omit<AutoloadItem, "fee_info"> {
    applied_vas: any[];
    feed_name: string;
}

export declare interface AutoloadReportSection extends AutoloadItemSection {
    count: number;
    sections: AutoloadReportSection[];
}

export declare class AutoloadReportsEndpoint extends BaseEndpoint {
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
    list(options?: ListAutoloadReportsOptions): Promise<ListAutoloadReports>;
    /**
     * Статистика по конкретной выгрузке
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportByIdV3
     *
     * @returns Возвращает сводную статистику с результатами конкретной выгрузки {@linkcode AutoloadReport}
     */
    get(reportId: number): Promise<AutoloadReport>;
    /**
     * Объявления по ID в автозагрузке
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAutoloadItemsInfoV2
     *
     * @param options Параметры запроса {@linkcode GetAutoloadReportsItemsOptions}
     * @returns Возвращает данные по конкретным объявлениям. {@linkcode ItemsResponse<AutoloadItem>}
     */
    getItems(options: GetAutoloadReportsItemsOptions): Promise<ItemsResponse<AutoloadItem>>;
    /**
     * Все объявления из конкретной выгрузки
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportItemsById
     *
     * @param reportId ID выгрузки
     * @param options Параметры запроса {@linkcode GetAutoloadReportItemsOptions}
     * @returns Возвращает данные по конкретным объявлениям. {@linkcode ListAutoloadReportItems}
     */
    getItemsByReportId(reportId: number, options?: GetAutoloadReportItemsOptions): Promise<ListAutoloadReportItems>;
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
    getItemsFees(reportId: number, options?: ListAutoloadReportItemsFeesOptions): Promise<ListAutoloadReportItemsFees>;
    /**
     * Статистика по последней выгрузке
     *
     * @see https://developers.avito.ru/api-catalog/autoload/documentation#operation/getLastCompletedReportV3
     *
     * @returns Возвращает данные по конкретным объявлениям. {@linkcode AutoloadReportsItems}
     */
    getLastCompletedReport(): Promise<AutoloadReport>;
}

export declare interface AutoloadReportShort extends Pick<AutoloadReport, "finished_at" | "started_at" | "status"> {
    id: number;
}

export declare type AutoloadReportSourses = "email" | "url" | "web" | "openapi";

export declare type AutoloadReportStatuses = "processing" | "success" | "success_warning" | "error";

export declare class Avito {
    client: ApiClient;
    autoload: AutoloadEndpoint;
    constructor(options: ApiClientOptions);
}

export declare interface AvitoIdable {
    /** Идентификатор объявления на Авито */
    readonly avito_id: number;
}

declare class BaseEndpoint {
    protected client: ApiClient;
    constructor(client: ApiClient);
}

declare type CredentialsAuth = {
    client_id: string;
    сlient_secret: string;
    getToken: () => Token | Promise<Token | null | undefined>;
    setToken: (token: Token) => void | Promise<any>;
};

export declare type GetAutoloadReportItemsOptions = PaginatableQuery<{
    query?: string[];
    sections?: string[];
}>;

export declare type GetAutoloadReportsItemsOptions = {
    query: string[];
};

export declare type ItemsResponse<T> = {
    items: T[];
};

export declare type ListAdIdsAutoloadItemsOptions = {
    /** Список ID объявлений на Авито */
    query: number[];
};

export declare type ListAutoloadReportItems = ItemsResponse<AutoloadReportItem> & PaginatableResponse<{
    report_id: number;
}>;

export declare type ListAutoloadReportItemsFees = PaginatableResponse<{
    fees: AutoloadItemFee[];
    report_id: number;
}>;

export declare type ListAutoloadReportItemsFeesOptions = PaginatableQuery<{
    adIds?: string[];
    avitoIds?: number[];
}>;

export declare type ListAutoloadReports = PaginatableResponse<{
    reports: AutoloadReportShort[];
}>;

export declare type ListAutoloadReportsOptions = PaginatableQuery<{
    dateFrom?: string;
    dateTo?: string;
}>;

export declare type ListAvitoIdsAutoloadItemsOptions = {
    /** Список ID объявлений из файла */
    query: string[];
};

declare type NotNull<T> = {
    [P in keyof T]: NonNullable<T[P]>;
};

export declare type PaginatableMeta = {
    page: number;
    pages: number;
    per_page: number;
    total: number;
};

export declare type PaginatableQuery<T> = T & {
    perPage?: number;
    page?: number;
};

export declare type PaginatableResponse<T> = T & {
    meta: PaginatableMeta;
};

declare type RequestOptions = Omit<RequestInit, "body"> & {
    body?: object;
    searchParams?: URLSearchParams;
};

declare type RequestOptionsWithoutMethod = Omit<RequestOptions, "method">;

export declare type RequiredNotNull<T, K extends keyof T> = T & Required<NotNull<Pick<T, K>>>;

export declare type Token = {
    access_token: string;
    expires_in: number;
    token_type: string;
};

export { }
