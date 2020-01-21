import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BlockComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './blocks-test.component.html',
  styleUrls: ['./blocks-test.component.scss']
})
export class BlocksTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {block: BlockComponent};

  @ViewChild('block', {static: false})
  block: BlockComponent;

  @ViewChild('code', {static: false})
  code: TabComponent;

  padding = new FormControl(UI.padding.normal);
  title = new FormControl(true);
  footer = new FormControl(true);
  state = new FormControl();
  width = new FormControl(UI.width.default);
  scheme = new FormControl(UI.schemes.primary);

  form = this.fb.group({
    padding: this.padding,
    title: this.title,
    footer: this.footer,
    state: this.state,
    width: this.width,
    scheme: this.scheme
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
