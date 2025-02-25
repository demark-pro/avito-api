[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [errors](../README.md) / AvitoApiError

# AvitoApiError

## Extends

- [`AvitoError`](AvitoError.md)

## Constructors

### new AvitoApiError()

```ts
new AvitoApiError(
   code, 
   message, 
   response): AvitoApiError
```

#### Parameters

##### code

`number`

##### message

`string`

##### response

`Response`

#### Returns

[`AvitoApiError`](AvitoApiError.md)

#### Overrides

[`AvitoError`](AvitoError.md).[`constructor`](AvitoError.md#constructors)

## Properties

### cause?

```ts
optional cause: unknown;
```

#### Inherited from

[`AvitoError`](AvitoError.md).[`cause`](AvitoError.md#cause)

***

### code

```ts
code: number;
```

***

### message

```ts
message: string;
```

#### Overrides

[`AvitoError`](AvitoError.md).[`message`](AvitoError.md#message-1)

***

### name

```ts
name: string;
```

#### Inherited from

[`AvitoError`](AvitoError.md).[`name`](AvitoError.md#name)

***

### response

```ts
response: Response;
```

#### Inherited from

[`AvitoError`](AvitoError.md).[`response`](AvitoError.md#response-1)

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

[`AvitoError`](AvitoError.md).[`stack`](AvitoError.md#stack)

***

### prepareStackTrace()?

```ts
static optional prepareStackTrace: (err, stackTraces) => any;
```

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`AvitoError`](AvitoError.md).[`prepareStackTrace`](AvitoError.md#preparestacktrace)

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

#### Inherited from

[`AvitoError`](AvitoError.md).[`stackTraceLimit`](AvitoError.md#stacktracelimit)

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void
```

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`AvitoError`](AvitoError.md).[`captureStackTrace`](AvitoError.md#capturestacktrace)
