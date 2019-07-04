export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export enum Order {
  asc = 'asc',
  desc = 'desc'
}

export interface SearchFilter {
  sort?: string;
  order?: Order;
  query?: string;
  page?: number;
  pageSize?: number;
}

export class DefaultSearchFilter implements SearchFilter {

  sort?: string;
  order?: Order = Order.asc;
  query?: string;
  page?: number;
  pageSize?: number;

  constructor(defs: DefaultSearchFilter = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
