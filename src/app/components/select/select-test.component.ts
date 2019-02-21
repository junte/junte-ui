import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SelectMode } from 'projects/junte-ui/src/lib/enum/ui';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent implements OnInit {

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      select: this.fb.control([1, 3]),
      selectAjax: this.fb.control([5])
    });
    this.form.valueChanges.subscribe(c => console.log(c));
  }

  loadOptions() {
    return (): Observable<any> => of(this.ajaxOptions).pipe(delay(2000));
  }
}
