import { Subscription } from 'rxjs';

export class Subscriptions {
  push(key: string, sub: Subscription) {
    this.unsubscribeKey(key);
    this[key] = sub;
  }

  private unsubscribeKey(key: string) {
    if (!!this[key] && this[key] instanceof Subscription) {
      this[key].unsubscribe();
    }
  }

  unsubscribe() {
    for (const key in this) {
      this.unsubscribeKey(key);
    }
  }
}
