import { GanttRequestStatuses } from 'projects/junte-ui/src/lib/enum/ui';

export class GanttRequest {
  id: number;
  createdAt: Date;
  createdBy: any;
  periodFrom: Date;
  periodTo: Date;
  selfExpense: boolean;
  comments: string;
  status: GanttRequestStatuses;
  processedBy: any;
  processedAt: Date;
  declineReason: string;
}
