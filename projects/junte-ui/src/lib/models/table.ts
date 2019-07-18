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
  offset?: number;
  first?: number;
}

export class DefaultSearchFilter implements SearchFilter {

  sort?: string;
  order?: Order = Order.asc;
  query?: string;
  offset?: number;
  first?: number;

  constructor(defs: DefaultSearchFilter = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
