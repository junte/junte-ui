import { Injectable } from '@angular/core';
import { isUndefined } from 'util';

@Injectable()
export class CacheService {

  private store: any = {};

  contains(key: string) {
    return !isUndefined(this.store[key]);
  }

  get<T>(key: string) {
    return this.store[key];
  }

  set<T>(key: string, data: any) {
    this.store[key] = data;
  }
}
