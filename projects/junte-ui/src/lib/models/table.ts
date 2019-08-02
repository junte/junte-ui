export const DEFAULT_PAGE_SIZE = 10;

export interface SearchFilter {
  orderBy?: string;
  q?: string;
  offset?: number;
  first?: number;
}

export class DefaultSearchFilter implements SearchFilter {

  orderBy?: string;
  q?: string;
  offset?: number;
  first?: number;
  page?: number;

  constructor(defs: DefaultSearchFilter = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
