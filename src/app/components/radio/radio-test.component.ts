import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss']
})
export class RadioTestComponent implements OnInit {
  ui = UI;

  form: FormGroup;

  developers = [
    {developer: 'Anton', age: 32},
    {developer: 'Andrey', age: 33},
    {developer: 'Roman', age: 26}
  ];
  selected = 2;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      select: this.fb.control(5),
      selectDeveloper: this.fb.control(26)
    });
  }
}
