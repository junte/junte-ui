import { startOfDay } from 'date-fns/esm';

export function today(): Date {
  return startOfDay(new Date());
}
