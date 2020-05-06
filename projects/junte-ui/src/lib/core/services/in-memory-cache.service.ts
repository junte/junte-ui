import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class InMemoryCacheService {

  private store: { [key: string]: any } = {};

  contains(key: string) {
    return this.store[key] !== undefined;
  }

  get<T>(key: string) {
    return this.store[key];
  }

  set<T>(key: string, data: any) {
    this.store[key] = data;
  }

}
