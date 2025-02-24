[**avito-api**](../README.md)

***

[avito-api](../globals.md) / AutoloadProfileEndpoint

# Class: AutoloadProfileEndpoint

Defined in: [endpoints/autoload/profile/endpoint.ts:6](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/endpoint.ts#L6)

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadProfileEndpoint()

> **new AutoloadProfileEndpoint**(`client`): [`AutoloadProfileEndpoint`](AutoloadProfileEndpoint.md)

Defined in: [endpoints/base-endpoint.ts:6](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L6)

#### Parameters

##### client

`ApiClient`

#### Returns

[`AutoloadProfileEndpoint`](AutoloadProfileEndpoint.md)

#### Inherited from

`BaseEndpoint.constructor`

## Properties

### client

> `protected` **client**: `ApiClient`

Defined in: [endpoints/base-endpoint.ts:4](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/base-endpoint.ts#L4)

#### Inherited from

`BaseEndpoint.client`

## Methods

### createOrUpdate()

> **createOrUpdate**(`body`): `Promise`\<`boolean`\>

Defined in: [endpoints/autoload/profile/endpoint.ts:27](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/endpoint.ts#L27)

Создание/редактирование настроек профиля пользователя автозагрузки

#### Parameters

##### body

[`AutoloadProfileCreateOrUpdate`](../interfaces/AutoloadProfileCreateOrUpdate.md)

#### Returns

`Promise`\<`boolean`\>

Успешное обновление настроек профиля

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/createOrUpdateProfileV2

***

### get()

> **get**(): `Promise`\<[`AutoloadProfile`](../interfaces/AutoloadProfile.md)\>

Defined in: [endpoints/autoload/profile/endpoint.ts:14](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/endpoint.ts#L14)

Получение профиля пользователя автозагрузки

#### Returns

`Promise`\<[`AutoloadProfile`](../interfaces/AutoloadProfile.md)\>

Возвращает настройки профиля пользователя автозагрузки. [`AutoloadProfile`](../interfaces/AutoloadProfile.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2
