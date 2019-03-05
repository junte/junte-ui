import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TableComponent } from 'junte-ui';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  @ViewChild(TableComponent)
  table: TableComponent;

  data: any = {
    results: [
      {value: 'Value 1', label: 'Label 1'},
      {value: 'Value 2', label: 'Label 2'},
      {value: 'Value 3', label: 'Label 3'},
      {value: 'Value 4', label: 'Label 4'},
      {value: 'Value 5', label: 'Label 5'},
      {value: 'Value 6', label: 'Label 6'},
      {value: 'Value 7', label: 'Label 7'},
      {value: 'Value 8', label: 'Label 8'},
      {value: 'Value 9', label: 'Label 9'},
      {value: 'Value 10', label: 'Label 10'}
    ],
    count: 10
  };

  constructor() {
  }

  ngOnInit() {
    this.table.fetcher = (): Observable<any> => of(this.data).pipe(delay(2000));
    this.table.load();
  }

}
