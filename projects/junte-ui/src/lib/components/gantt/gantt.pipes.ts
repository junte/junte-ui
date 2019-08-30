import { Pipe, PipeTransform } from '@angular/core';
import { GanttRequestStatuses } from '../../enum/ui';

export enum VacationRequestLables {
  accepting = 'Accepting',
  accepted = 'Accepted',
  declined = 'Declined',
}

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  transform(status: GanttRequestStatuses): string {
    return VacationRequestLables[status];
  }
}
