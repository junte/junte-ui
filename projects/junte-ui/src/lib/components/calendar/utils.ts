import { startOfDay } from 'date-fns';

export function today(): Date {
  return startOfDay(new Date());
}
