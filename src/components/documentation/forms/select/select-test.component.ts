import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectComponent, SelectMode, TabComponent, UI } from 'junte-ui';
import { combineLatest, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  select = SelectComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  placeholderControl = this.fb.control('');
  requiredControl = this.fb.control(false);
  disabledControl = this.fb.control(false);
  labelControl = this.fb.control(null);
  allowEmptyControl = this.fb.control(true);
  modeControl = this.fb.control(SelectMode.single);
  searchControl = this.fb.control(false);
  sizeControl = this.fb.control(UI.sizes.normal);
  loaderControl = this.fb.control(null);
  templateControl = this.fb.control(false);
  form = this.fb.group({
    placeholder: this.placeholderControl,
    required: this.requiredControl,
    disabled: this.disabledControl,
    label: this.labelControl,
    allowEmpty: this.allowEmptyControl,
    mode: this.modeControl,
    search: this.searchControl,
    size: this.sizeControl,
    loader: this.loaderControl,
    template: this.templateControl
  });

  selectControl = this.fb.control(null);
  selectForm = this.fb.group({
    select: this.selectControl
  });

  options = [
    {key: 1, label: 'Option 1', likes: 1},
    {key: 2, label: 'Option 2', likes: 2},
    {key: 3, label: 'Option 3', likes: 3},
    {key: 4, label: 'Option 4', likes: 4},
    {key: 5, label: 'Option 5', likes: 5}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => this.code.flash());
    this.disabledControl.valueChanges.subscribe(disabled =>
      disabled ? this.selectControl.disable() : this.selectControl.enable());

    this.selectControl.valueChanges.subscribe(value => console.log(value));
  }

  search() {
    return (query: string) => new Observable(observable => {
      observable.next(this.options.filter(option => !query
        || option.label.toLowerCase().includes(query.toLowerCase())));
      observable.complete();
    }).pipe(delay(1000));
  }

}
