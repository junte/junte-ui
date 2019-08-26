import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-switcher-test',
  templateUrl: './switcher-test.component.html',
  styleUrls: ['./switcher-test.component.scss']
})

export class SwitcherTestComponent implements OnInit {

  ui = UI;
  form: FormGroup;

  options = new Array(15);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      selected: {obj: 2}
    });

    this.form.valueChanges.subscribe(f => console.log(f));
  }
}
