import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UI} from 'junte-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ui = UI;

  form: FormGroup;
  inputValue = 'test';
  selectedOption: any;
  options: any[] = [
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
  ];

  loading = {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      value: 'test text'
    });
  }
}
