import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export class I18nLoader implements TranslateLoader {
  constructor(private keys: any) {
  }

  getTranslation(lang: string): Observable<any> {
    return of(this.keys);
  }
}
