export type Key = number | string;

export interface IOption {
  index: number;
  key: Key;
  label: string;
  value: Object | string | number | boolean;
  icon?: Key;
}

export class Options {
  persisted: { [key: string]: IOption } = {};
  found: { [key: string]: IOption } = {};
}
