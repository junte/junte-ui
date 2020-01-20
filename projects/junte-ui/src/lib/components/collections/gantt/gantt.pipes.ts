import { Pipe, PipeTransform } from '@angular/core';
import { GanttRequestStatuses } from '../../../enums/ui';

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
