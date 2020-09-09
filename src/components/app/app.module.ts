import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeRu from '@angular/common/locales/ru';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JunteUiModule, ModalModule, PopoverModule } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { CURRENT_LANGUAGE, JUNTE_UI_CONFIG } from 'src/consts';
import { Language } from 'src/enums/language';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

enum Currencies {
  rur = 'rur',
  usd = 'usd'
}

const CURRENCY_CODE: Currencies = Currencies.rur;

enum LocaleData {
  NumberFormats = 14,
  CurrencyCode = 16
}

function getLocaleData(locale: any) {
  let changes;
  switch (CURRENCY_CODE) {
    case Currencies.rur:
      changes = {
        [LocaleData.NumberFormats]: localeRu[LocaleData.NumberFormats],
        [LocaleData.CurrencyCode]: localeRu[LocaleData.CurrencyCode]
      };
      break;
    case Currencies.usd:
    default:
      changes = {
        [LocaleData.NumberFormats]: localeEn[LocaleData.NumberFormats],
        [LocaleData.CurrencyCode]: localeEn[LocaleData.CurrencyCode]
      };

  }
  return {...locale, ...changes};
}

const providers: any[] = [...JunteUiModule.forRoot(JUNTE_UI_CONFIG).providers];

let data;
switch (CURRENT_LANGUAGE) {
  case Language.ru:
    data = getLocaleData(localeRu);
    registerLocaleData(data);
    providers.push({
      provide: LOCALE_ID,
      useValue: 'ru'
    });
    break;
  case Language.en:
  default:
    data = getLocaleData(localeEn);
    registerLocaleData(data);
    providers.push({
      provide: LOCALE_ID,
      useValue: 'en'
    });
}

providers.push({
  provide: DEFAULT_CURRENCY_CODE,
  useValue: data[LocaleData.CurrencyCode]
});

export class I18nLoader implements TranslateLoader {

  private keys = {test_label: 'Test key!'};

  getTranslation(lang: string): Observable<any> {
    return of(this.keys);
  }
}

export function i18nLoaderFactory() {
  return new I18nLoader();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      isolate: true,
      loader: {
        provide: TranslateLoader,
        useFactory: i18nLoaderFactory
      },
      defaultLanguage: 'en'
    }),
    PopoverModule,
    ModalModule,
  ],
  providers: providers,
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
