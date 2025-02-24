type NotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type RequiredNotNull<T, K extends keyof T> = T &
  Required<NotNull<Pick<T, K>>>;
