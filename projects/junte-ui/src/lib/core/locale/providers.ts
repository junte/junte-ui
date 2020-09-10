import { enUS as dfnsEnUS } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { JunteUIModuleConfig } from '../../config';

export function dfnsFactory(config: JunteUIModuleConfig) {
  const service = new DateFnsConfigurationService();
  service.setLocale(config.locale.dfns || dfnsEnUS);
  return service;
}

export const DFNS_PROVIDES = [
  {
    provide: DateFnsConfigurationService,
    useFactory: dfnsFactory,
    deps: [JunteUIModuleConfig]
  }
];
