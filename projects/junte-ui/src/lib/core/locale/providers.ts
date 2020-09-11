import { DateFnsConfigurationService } from 'ngx-date-fns';
import { JunteUIConfig } from '../../config';

export function dfnsFactory(config: JunteUIConfig) {
  const service = new DateFnsConfigurationService();
  service.setLocale(config.locale.dfns);
  return service;
}

export const DFNS_PROVIDES = [
  {
    provide: DateFnsConfigurationService,
    useFactory: dfnsFactory,
    deps: [JunteUIConfig]
  }
];
