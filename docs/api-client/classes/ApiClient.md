[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [api-client](../README.md) / ApiClient

# ApiClient

## Constructors

### new ApiClient()

```ts
new ApiClient(options): ApiClient
```

#### Parameters

##### options

[`ApiClientOptions`](../../index/type-aliases/ApiClientOptions.md)

#### Returns

[`ApiClient`](ApiClient.md)

## Methods

### buildUrl()

```ts
buildUrl(url): URL
```

Строит URL из строки или массива строк.

#### Parameters

##### url

строка или массив строк URL

`string` | `string`[]

#### Returns

`URL`

Объект типа `URL` с нормализованным URL и базовым адресом, указанным в опциях инциализации

#### Examples

```ts
buildUrl(["autoload", "v2", "profile"])
// "https://api.avito.ru/autoload/v2/profile"
```

```ts
buildUrl("/autoload/v2/profile")
// "https://api.avito.ru/autoload/v2/profile"
```

***

### delete()

```ts
delete(url, options): Promise<Response>
```

Shorthand для DELETE запроса.

[`request`](ApiClient.md#request)

#### Parameters

##### url

`string`

##### options

`RequestOptionsWithoutMethod` = `{}`

#### Returns

`Promise`\<`Response`\>

***

### get()

```ts
get(url, options): Promise<Response>
```

Shorthand для GET запроса.

[`request`](ApiClient.md#request)

#### Parameters

##### url

`string`

##### options

`RequestOptionsWithoutMethod` = `{}`

#### Returns

`Promise`\<`Response`\>

***

### post()

```ts
post(url, options): Promise<Response>
```

Shorthand для POST запроса.

[`request`](ApiClient.md#request)

#### Parameters

##### url

`string`

##### options

`RequestOptionsWithoutMethod` = `{}`

#### Returns

`Promise`\<`Response`\>

***

### put()

```ts
put(url, options): Promise<Response>
```

Shorthand для PUT запроса.

[`request`](ApiClient.md#request)

#### Parameters

##### url

`string`

##### options

`RequestOptionsWithoutMethod` = `{}`

#### Returns

`Promise`\<`Response`\>

***

### request()

```ts
request(endpoint, __namedParameters): Promise<Response>
```

#### Parameters

##### endpoint

`string`

##### \_\_namedParameters

`RequestOptions` = `{}`

#### Returns

`Promise`\<`Response`\>
