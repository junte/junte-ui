import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TableComponent } from 'junte-ui';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableTestComponent implements OnInit {

  @ViewChild(TableComponent)
  table: TableComponent;

  ajaxOptions: any = {
    results: [
      {value: 4, label: 'FC Manchester City'},
      {value: 5, label: 'FC Liverpool'},
      {value: 6, label: 'FC Barcelona'}
    ],
    count: 3
  };

  constructor() {
  }

  ngOnInit() {
    this.table.fetcher = (): Observable<any> => of(this.ajaxOptions).pipe(delay(2000));
    this.table.load();
  }

}
