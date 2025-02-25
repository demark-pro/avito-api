[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / AutoloadReportsEndpoint

# AutoloadReportsEndpoint

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadReportsEndpoint()

```ts
new AutoloadReportsEndpoint(client): AutoloadReportsEndpoint
```

#### Parameters

##### client

[`ApiClient`](../../api-client/classes/ApiClient.md)

#### Returns

[`AutoloadReportsEndpoint`](AutoloadReportsEndpoint.md)

#### Inherited from

```ts
BaseEndpoint.constructor
```

## Properties

### client

```ts
protected client: ApiClient;
```

#### Inherited from

```ts
BaseEndpoint.client
```

## Methods

### get()

```ts
get(reportId): Promise<AutoloadReport>
```

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

```ts
getItems(options): Promise<ItemsResponse<AutoloadItem>>
```

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

```ts
getItemsByReportId(reportId, options): Promise<ListAutoloadReportItems>
```

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

```ts
getItemsFees(reportId, options): Promise<ListAutoloadReportItemsFees>
```

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

```ts
getLastCompletedReport(): Promise<AutoloadReport>
```

Статистика по последней выгрузке

#### Returns

`Promise`\<[`AutoloadReport`](../interfaces/AutoloadReport.md)\>

Возвращает данные по конкретным объявлениям. AutoloadReportsItems

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getLastCompletedReportV3

***

### list()

```ts
list(options): Promise<ListAutoloadReports>
```

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
