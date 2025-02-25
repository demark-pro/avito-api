[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / AutoloadItemsEndpoint

# AutoloadItemsEndpoint

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadItemsEndpoint()

```ts
new AutoloadItemsEndpoint(client): AutoloadItemsEndpoint
```

#### Parameters

##### client

[`ApiClient`](../../api-client/classes/ApiClient.md)

#### Returns

[`AutoloadItemsEndpoint`](AutoloadItemsEndpoint.md)

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

### getAdIds()

```ts
getAdIds(options): Promise<ItemsResponse<AutoloadItemShort>>
```

ID объявлений из файла

Метод позволяет получить идентификаторы (ID) объявлений из файла автозагрузки по ID объявлений на Авито.

#### Parameters

##### options

[`ListAdIdsAutoloadItemsOptions`](../type-aliases/ListAdIdsAutoloadItemsOptions.md)

Параметры запроса [`ListAdIdsAutoloadItemsOptions`](../type-aliases/ListAdIdsAutoloadItemsOptions.md)

#### Returns

`Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItemShort`](../interfaces/AutoloadItemShort.md)\>\>

Список связанных идентификаторов (ID) объявлений из файла с идентификаторами (ID) на Авито [`<AutoloadItemShort>`](../type-aliases/ItemsResponse.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAdIdsByAvitoIds

***

### getAvitoIds()

```ts
getAvitoIds(options): Promise<ItemsResponse<AutoloadItemShort>>
```

ID объявлений на Авито

Метод позволяет получить идентификаторы (ID) объявлений на Авито по идентификаторам объявлений из файла автозагрузки.

#### Parameters

##### options

[`ListAvitoIdsAutoloadItemsOptions`](../type-aliases/ListAvitoIdsAutoloadItemsOptions.md)

Параметры запроса [`ListAvitoIdsAutoloadItemsOptions`](../type-aliases/ListAvitoIdsAutoloadItemsOptions.md)

#### Returns

`Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItemShort`](../interfaces/AutoloadItemShort.md)\>\>

Список связанных идентификаторов (ID) объявлений
из файла с идентификаторами (ID) на Авито [`<AutoloadItemShort>`](../type-aliases/ItemsResponse.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getAvitoIdsByAdIds
