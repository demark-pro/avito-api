[**avito-api**](../../README.md)

***

[avito-api](../../README.md) / [index](../README.md) / RequiredNotNull

# RequiredNotNull\<T, K\>

```ts
type RequiredNotNull<T, K> = T & Required<NotNull<Pick<T, K>>>;
```

## Type Parameters

• **T**

• **K** *extends* keyof `T`
