[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [errors](../README.md) / AvitoError

# AvitoError

## Extends

- `Error`

## Extended by

- [`AvitoApiError`](AvitoApiError.md)

## Constructors

### new AvitoError()

```ts
new AvitoError(message, response): AvitoError
```

#### Parameters

##### message

`string`

##### response

`Response`

#### Returns

[`AvitoError`](AvitoError.md)

#### Overrides

```ts
Error.constructor
```

## Properties

### cause?

```ts
optional cause: unknown;
```

#### Inherited from

```ts
Error.cause
```

***

### message

```ts
message: string;
```

#### Inherited from

```ts
Error.message
```

***

### name

```ts
name: string;
```

#### Inherited from

```ts
Error.name
```

***

### response

```ts
response: Response;
```

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

```ts
Error.stack
```

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

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

#### Inherited from

```ts
Error.stackTraceLimit
```

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

```ts
Error.captureStackTrace
```
