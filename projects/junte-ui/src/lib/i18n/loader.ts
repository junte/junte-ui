import { Inject } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { JUNTE_UI_I18N_KEYS } from './consts';

export class I18nLoader implements TranslateLoader {
  constructor(@Inject(JUNTE_UI_I18N_KEYS) private keys: any) {
  }

  getTranslation(lang: string): Observable<any> {
    return of(this.keys);
  }
}
