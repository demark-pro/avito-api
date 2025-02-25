[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / AutoloadEndpoint

# AutoloadEndpoint

## Extends

- `BaseEndpoint`

## Constructors

### new AutoloadEndpoint()

```ts
new AutoloadEndpoint(client): AutoloadEndpoint
```

#### Parameters

##### client

[`ApiClient`](../../api-client/classes/ApiClient.md)

#### Returns

[`AutoloadEndpoint`](AutoloadEndpoint.md)

#### Overrides

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

***

### items

```ts
items: AutoloadItemsEndpoint;
```

***

### profile

```ts
profile: AutoloadProfileEndpoint;
```

***

### reports

```ts
reports: AutoloadReportsEndpoint;
```

## Methods

### upload()

```ts
upload(): Promise<boolean>
```

Загрузка файла по ссылке

#### Returns

`Promise`\<`boolean`\>

Выгрузка файла по ссылке запущена успешно

#### See

https://developers.avito.ru/api-catalog/autoload/documentation#operation/upload
