[**avito-api**](../README.md)

***

[avito-api](../globals.md) / ApiClientOptions

# Type Alias: ApiClientOptions

> **ApiClientOptions**: `object`

Defined in: [api-client/api-client.ts:31](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/api-client/api-client.ts#L31)

## Type declaration

### auth

> **auth**: [`Auth`](Auth.md)

Опции авторизации

[`Auth`](Auth.md)

### baseUrl?

> `optional` **baseUrl**: `string`

Базовый URL

#### Default

```ts
https://api.avito.ru
```

### getToken

> **getToken**: [`GetTokenHandler`](GetTokenHandler.md)

### setToken

> **setToken**: [`SetTokenHandler`](SetTokenHandler.md)

### userAgent?

> `optional` **userAgent**: `string`

User-Agent header

#### Default

`avito-api/${version} (+https://github.com/demark-pro/avito-api)`, где `{version}` - версия библиотеки
