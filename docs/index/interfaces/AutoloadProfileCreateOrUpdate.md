[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / AutoloadProfileCreateOrUpdate

# AutoloadProfileCreateOrUpdate

## Extends

- [`RequiredNotNull`](../type-aliases/RequiredNotNull.md)\<[`AutoloadProfile`](AutoloadProfile.md), `"feeds_data"` \| `"report_email"`\>

## Properties

### agreement?

```ts
optional agreement: boolean;
```

***

### autoload\_enabled

```ts
autoload_enabled: boolean;
```

#### Inherited from

```ts
RequiredNotNull.autoload_enabled
```

***

### feeds\_data

```ts
feeds_data: AutoloadProfileFeedsDataItem[];
```

#### Inherited from

```ts
RequiredNotNull.feeds_data
```

***

### report\_email

```ts
report_email: string;
```

#### Inherited from

```ts
RequiredNotNull.report_email
```

***

### schedule

```ts
schedule: AutoloadProfileScheduleItem[];
```

#### Inherited from

```ts
RequiredNotNull.schedule
```
