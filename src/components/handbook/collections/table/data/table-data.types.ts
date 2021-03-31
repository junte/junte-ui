import { Field, Model } from '@junte/serialize-ts';

export enum TableSections {
  search,
  reload,
  actions,
  filter,
  rowActions
}

export interface TableState {

  q: string;
  first: number;
  offset: number;
  ability: string;

}

@Model()
export class TableStateUpdate {

  @Field()
  first: number;

  @Field()
  offset: number;

  @Field()
  q: string;

  @Field()
  ability: string;

  constructor(defs: Partial<TableState> = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}

@Model()
export class DataFilter {

  @Field()
  q: string;

  @Field()
  first: number;

  @Field()
  offset: number;

  @Field()
  ability: string;

  constructor(defs: Partial<DataFilter> = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
