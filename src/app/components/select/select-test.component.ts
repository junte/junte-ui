import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent {
  options: any[] = [
    {value: 1, label: 'PFC CSKA Moscow'},
    {value: 2, label: 'FC Real Madrid'},
    {value: 3, label: 'FC Manchester United'}
  ];
  ajaxOptions: any[] = [
    {value: 1, label: 'FC Manchester City'},
    {value: 2, label: 'FC Liverpool'},
    {value: 3, label: 'FC Barcelona'}
  ];


  loadOptions() {
    return (): Observable<any> => of(this.ajaxOptions).pipe(delay(2000));
  }
}
