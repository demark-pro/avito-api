export type PaginatableQuery<T> = T & {
  perPage?: number;
  page?: number;
};

export type PaginatableMeta = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
};

export type PaginatableResponse<T> = T & {
  meta: PaginatableMeta;
};
