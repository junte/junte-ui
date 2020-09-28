export interface SearchFilter {

  q?: string;
  orderBy?: string;
  offset?: number;
  first?: number;

}

export class DefaultSearchFilter implements SearchFilter {

  q?: string;
  orderBy?: string;
  offset?: number;
  first?: number;

  constructor(defs: Partial<DefaultSearchFilter> = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
