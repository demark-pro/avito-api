[**avito-api**](../README.md)

***

[avito-api](../globals.md) / AutoloadProfileCreateOrUpdate

# Interface: AutoloadProfileCreateOrUpdate

Defined in: [endpoints/autoload/profile/types.ts:21](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L21)

## Extends

- [`RequiredNotNull`](../type-aliases/RequiredNotNull.md)\<[`AutoloadProfile`](AutoloadProfile.md), `"feeds_data"` \| `"report_email"`\>

## Properties

### agreement?

> `optional` **agreement**: `boolean`

Defined in: [endpoints/autoload/profile/types.ts:23](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L23)

***

### autoload\_enabled

> **autoload\_enabled**: `boolean`

Defined in: [endpoints/autoload/profile/types.ts:15](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L15)

#### Inherited from

`RequiredNotNull.autoload_enabled`

***

### feeds\_data

> **feeds\_data**: [`AutoloadProfileFeedsDataItem`](../type-aliases/AutoloadProfileFeedsDataItem.md)[]

Defined in: [endpoints/autoload/profile/types.ts:16](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L16)

#### Inherited from

`RequiredNotNull.feeds_data`

***

### report\_email

> **report\_email**: `string`

Defined in: [endpoints/autoload/profile/types.ts:17](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L17)

#### Inherited from

`RequiredNotNull.report_email`

***

### schedule

> **schedule**: [`AutoloadProfileScheduleItem`](../type-aliases/AutoloadProfileScheduleItem.md)[]

Defined in: [endpoints/autoload/profile/types.ts:18](https://github.com/demark-pro/avito-api/blob/1d3612bd3d7031e3e6036c5c6752c6189cef9c8c/src/endpoints/autoload/profile/types.ts#L18)

#### Inherited from

`RequiredNotNull.schedule`
