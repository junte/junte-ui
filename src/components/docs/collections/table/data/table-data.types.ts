import { Field, Model } from '@junte/serialize-ts';

export enum TableSections {
  search,
  actions,
  filter
}

export interface TableState {

  q: string;
  first: number;
  offset: number;
  job: string;

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
  job: string;

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
  job: string;

  constructor(defs: Partial<DataFilter> = null) {
    if (!!defs) {
      Object.assign(this, defs);
    }
  }

}
