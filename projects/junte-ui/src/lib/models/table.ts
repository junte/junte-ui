export const DEFAULT_FIRST = 10;
export const DEFAULT_OFFSET = 0;

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
  sort?: string;
  page?: number;

  constructor(defs: DefaultSearchFilter = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
