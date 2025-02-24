[**avito-api**](../README.md)

***

[avito-api](../globals.md) / AutoloadItemsEndpoint

# Class: AutoloadItemsEndpoint

Defined in: [endpoints/autoload/items/endpoint.ts:11](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/items/endpoint.ts#L11)

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadItemsEndpoint()

> **new AutoloadItemsEndpoint**(`client`): [`AutoloadItemsEndpoint`](AutoloadItemsEndpoint.md)

Defined in: [endpoints/base-endpoint.ts:6](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L6)

#### Parameters

##### client

`ApiClient`

#### Returns

[`AutoloadItemsEndpoint`](AutoloadItemsEndpoint.md)

#### Inherited from

`BaseEndpoint.constructor`

## Properties

### client

> `protected` **client**: `ApiClient`

Defined in: [endpoints/base-endpoint.ts:4](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L4)

#### Inherited from

`BaseEndpoint.client`

## Methods

### getAdIds()

> **getAdIds**(`options`): `Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItemShort`](../interfaces/AutoloadItemShort.md)\>\>

Defined in: [endpoints/autoload/items/endpoint.ts:22](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/items/endpoint.ts#L22)

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

> **getAvitoIds**(`options`): `Promise`\<[`ItemsResponse`](../type-aliases/ItemsResponse.md)\<[`AutoloadItemShort`](../interfaces/AutoloadItemShort.md)\>\>

Defined in: [endpoints/autoload/items/endpoint.ts:46](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/items/endpoint.ts#L46)

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
