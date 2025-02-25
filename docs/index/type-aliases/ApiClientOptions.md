[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / ApiClientOptions

# ApiClientOptions

```ts
type ApiClientOptions = object;
```

## Type declaration

### auth

```ts
auth: Auth;
```

Опции авторизации

[`Auth`](Auth.md)

### baseUrl?

```ts
optional baseUrl: string;
```

Базовый URL

#### Default

```ts
https://api.avito.ru
```

### getToken

```ts
getToken: GetTokenHandler;
```

### setToken

```ts
setToken: SetTokenHandler;
```

### userAgent?

```ts
optional userAgent: string;
```

User-Agent header

#### Default

`avito-api/${version} (+https://github.com/demark-pro/avito-api)`, где `{version}` - версия библиотеки
