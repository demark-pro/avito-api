[**avito-api**](../README.md)

***

[avito-api](../globals.md) / AutoloadEndpoint

# Class: AutoloadEndpoint

Defined in: [endpoints/autoload/endpoint.ts:9](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L9)

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadEndpoint()

> **new AutoloadEndpoint**(`client`): [`AutoloadEndpoint`](AutoloadEndpoint.md)

Defined in: [endpoints/autoload/endpoint.ts:14](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L14)

#### Parameters

##### client

`ApiClient`

#### Returns

[`AutoloadEndpoint`](AutoloadEndpoint.md)

#### Overrides

`BaseEndpoint.constructor`

## Properties

### client

> `protected` **client**: `ApiClient`

Defined in: [endpoints/base-endpoint.ts:4](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L4)

#### Inherited from

`BaseEndpoint.client`

***

### items

> **items**: [`AutoloadItemsEndpoint`](AutoloadItemsEndpoint.md)

Defined in: [endpoints/autoload/endpoint.ts:10](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L10)

***

### profile

> **profile**: [`AutoloadProfileEndpoint`](AutoloadProfileEndpoint.md)

Defined in: [endpoints/autoload/endpoint.ts:11](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L11)

***

### reports

> **reports**: [`AutoloadReportsEndpoint`](AutoloadReportsEndpoint.md)

Defined in: [endpoints/autoload/endpoint.ts:12](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L12)

## Methods

### upload()

> **upload**(): `Promise`\<`boolean`\>

Defined in: [endpoints/autoload/endpoint.ts:29](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/endpoint.ts#L29)

Загрузка файла по ссылке

#### Returns

`Promise`\<`boolean`\>

Выгрузка файла по ссылке запущена успешно

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/upload
