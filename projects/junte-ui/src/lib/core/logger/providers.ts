import { DatePipe } from '@angular/common';
import { LoggerConfig, LoggerModule } from 'ngx-logger';
import { JunteUIConfig } from '../../config';

export function loggerConfigFactory(config: JunteUIConfig): LoggerConfig {
  const logger = new LoggerConfig();
  logger.level = config.logger;
  return logger;
}

export const LOGGER_PROVIDERS = [
  {
    provide: LoggerConfig,
    useFactory: loggerConfigFactory,
    deps: [JunteUIConfig]
  },
  DatePipe,
  ...LoggerModule.forChild().providers
];
