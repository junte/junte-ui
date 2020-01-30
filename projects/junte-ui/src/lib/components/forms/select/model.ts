export type Key = number | string;

export interface IOption {
  index: number;
  key: Key;
  label: string;
  value: any;
  icon?: Key;
}

export class Options {
  persisted: { [key: string]: IOption } = {};
  found: { [key: string]: IOption } = {};
}
