[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / AutoloadProfileEndpoint

# AutoloadProfileEndpoint

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadProfileEndpoint()

```ts
new AutoloadProfileEndpoint(client): AutoloadProfileEndpoint
```

#### Parameters

##### client

[`ApiClient`](../../api-client/classes/ApiClient.md)

#### Returns

[`AutoloadProfileEndpoint`](AutoloadProfileEndpoint.md)

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

### createOrUpdate()

```ts
createOrUpdate(body): Promise<boolean>
```

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

```ts
get(): Promise<AutoloadProfile>
```

Получение профиля пользователя автозагрузки

#### Returns

`Promise`\<[`AutoloadProfile`](../interfaces/AutoloadProfile.md)\>

Возвращает настройки профиля пользователя автозагрузки. [`AutoloadProfile`](../interfaces/AutoloadProfile.md)

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/getProfileV2
