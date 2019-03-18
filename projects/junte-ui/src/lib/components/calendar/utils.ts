import { format, startOfDay } from 'date-fns';

export function today(): string {
  return format(startOfDay(new Date()));
}
