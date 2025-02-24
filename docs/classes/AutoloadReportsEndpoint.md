[**avito-api**](../README.md)

***

[avito-api](../globals.md) / AutoloadReportsEndpoint

# Class: AutoloadReportsEndpoint

Defined in: [endpoints/autoload/reports/endpoints.ts:18](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L18)

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadReportsEndpoint()

> **new AutoloadReportsEndpoint**(`client`): [`AutoloadReportsEndpoint`](AutoloadReportsEndpoint.md)

Defined in: [endpoints/base-endpoint.ts:6](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L6)

#### Parameters

##### client

`ApiClient`

#### Returns

[`AutoloadReportsEndpoint`](AutoloadReportsEndpoint.md)

#### Inherited from

`BaseEndpoint.constructor`

## Properties

### client

> `protected` **client**: `ApiClient`

Defined in: [endpoints/base-endpoint.ts:4](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L4)

#### Inherited from

`BaseEndpoint.client`

## Methods

### get()

> **get**(`reportId`): `Promise`\<[`AutoloadReport`](../interfaces/AutoloadReport.md)\>

Defined in: [endpoints/autoload/reports/endpoints.ts:52](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L52)

Статистика по конкретной выгрузке

#### Parameters

##### reportId

`number`

#### Returns

`Promise`\<[`AutoloadReport`](../interfaces/AutoloadReport.md)\>

Возвращает сводную статистику с результатами конкретной выгрузки [`AutoloadReport`](../interfaces/AutoloadReport.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportByIdV3

***

### getItems()

> **getItems**(`options`): `Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItem`](../interfaces/AutoloadItem.md)\>\>

Defined in: [endpoints/autoload/reports/endpoints.ts:66](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L66)

Объявления по ID в автозагрузке

#### Parameters

##### options

[`GetAutoloadReportsItemsOptions`](../type-aliases/GetAutoloadReportsItemsOptions.md)

Параметры запроса [`GetAutoloadReportsItemsOptions`](../type-aliases/GetAutoloadReportsItemsOptions.md)

#### Returns

`Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItem`](../interfaces/AutoloadItem.md)\>\>

Возвращает данные по конкретным объявлениям. [`<AutoloadItem>`](../type-aliases/ItemsResponse.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAutoloadItemsInfoV2

***

### getItemsByReportId()

> **getItemsByReportId**(`reportId`, `options`): `Promise`\<[`ListAutoloadReportItems`](../type-aliases/ListAutoloadReportItems.md)\>

Defined in: [endpoints/autoload/reports/endpoints.ts:86](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L86)

Все объявления из конкретной выгрузки

#### Parameters

##### reportId

`number`

ID выгрузки

##### options

[`GetAutoloadReportItemsOptions`](../type-aliases/GetAutoloadReportItemsOptions.md) = `{}`

Параметры запроса [`GetAutoloadReportItemsOptions`](../type-aliases/GetAutoloadReportItemsOptions.md)

#### Returns

`Promise`\<[`ListAutoloadReportItems`](../type-aliases/ListAutoloadReportItems.md)\>

Возвращает данные по конкретным объявлениям. [`ListAutoloadReportItems`](../type-aliases/ListAutoloadReportItems.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportItemsById

***

### getItemsFees()

> **getItemsFees**(`reportId`, `options`): `Promise`\<[`ListAutoloadReportItemsFees`](../type-aliases/ListAutoloadReportItemsFees.md)\>

Defined in: [endpoints/autoload/reports/endpoints.ts:122](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L122)

Списания за объявления в конкретной выгрузке

#### Parameters

##### reportId

`number`

ID выгрузки

##### options

[`ListAutoloadReportItemsFeesOptions`](../type-aliases/ListAutoloadReportItemsFeesOptions.md) = `{}`

Параметры запроса [`ListAutoloadReportItemsFeesOptions`](../type-aliases/ListAutoloadReportItemsFeesOptions.md)

#### Returns

`Promise`\<[`ListAutoloadReportItemsFees`](../type-aliases/ListAutoloadReportItemsFees.md)\>

Возвращает cписок списаний за размещение объявлений [`ListAutoloadReportItemsFees`](../type-aliases/ListAutoloadReportItemsFees.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportItemsFeesById

С помощью этого метода можно получить информацию о списаниях за размещение каждого объявления в конкретной выгрузке.

***

### getLastCompletedReport()

> **getLastCompletedReport**(): `Promise`\<[`AutoloadReport`](../interfaces/AutoloadReport.md)\>

Defined in: [endpoints/autoload/reports/endpoints.ts:158](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L158)

Статистика по последней выгрузке

#### Returns

`Promise`\<[`AutoloadReport`](../interfaces/AutoloadReport.md)\>

Возвращает данные по конкретным объявлениям. AutoloadReportsItems

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getLastCompletedReportV3

***

### list()

> **list**(`options`): `Promise`\<[`ListAutoloadReports`](../type-aliases/ListAutoloadReports.md)\>

Defined in: [endpoints/autoload/reports/endpoints.ts:29](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/reports/endpoints.ts#L29)

Список отчётов автозагрузки

По запросу вы получите список отчётов автозагрузки. Они будут отсортированы в порядке убывания: самый свежий отчёт — в начале списка.

#### Parameters

##### options

[`ListAutoloadReportsOptions`](../type-aliases/ListAutoloadReportsOptions.md) = `{}`

Параметры запроса [`ListAutoloadReportsOptions`](../type-aliases/ListAutoloadReportsOptions.md)

#### Returns

`Promise`\<[`ListAutoloadReports`](../type-aliases/ListAutoloadReports.md)\>

Возвращает список отчетов [`ListAutoloadReports`](../type-aliases/ListAutoloadReports.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getReportsV2
