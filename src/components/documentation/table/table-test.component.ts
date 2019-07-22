import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DEFAULT_PAGE_SIZE, DefaultSearchFilter, SelectMode, TableComponent, UI } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.scss']
})
export class TableTestComponent implements OnInit {

  ui = UI;

  form: FormGroup;
  selectMode = SelectMode;
  options: any[] = [
    {value: 1, label: 'PFC CSKA Moscow'},
    {value: 2, label: 'FC Real Madrid'},
    {value: 3, label: 'FC Manchester United'}
  ];
  ajaxOptions: any[] = [
    {value: 4, label: 'FC Manchester City'},
    {value: 5, label: 'FC Liverpool'},
    {value: 6, label: 'FC Barcelona'}
  ];

  filter: DefaultSearchFilter = new DefaultSearchFilter({offset: 0, first: DEFAULT_PAGE_SIZE});

  @ViewChild('table')
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
    count: 12
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.table.fetcher = (): Observable<any> => of(this.data).pipe(delay(2000));
    this.table.load();

    this.form = this.fb.group({
      select: this.fb.control([1, 3]),
      selectAjax: this.fb.control([])
    });
    this.form.valueChanges.subscribe(c => console.log(c));
  }

  loadOptions() {
    return (): Observable<any> => of(this.ajaxOptions).pipe(delay(2000));
  }

  edit() {
    console.log('edit');
  }

  delete() {
    console.log('delete');
  }
}
