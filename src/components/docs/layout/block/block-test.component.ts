import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlockComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-blocks-test',
  templateUrl: './block-test.component.html',
  styleUrls: ['./block-test.component.scss']
})
export class BlockTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {block: BlockComponent};

  @ViewChild('block')
  block: BlockComponent;

  @ViewChild('code')
  code: TabComponent;

  schemeControl = this.fb.control(null);
  paddingControl = this.fb.control(null);
  widthControl = this.fb.control(null);
  titleControl = this.fb.control(true);
  footerControl = this.fb.control(true);
  stateControl = this.fb.control(null);
  adaptedControl = this.fb.control(false);

  builder = this.fb.group({
    padding: this.paddingControl,
    title: this.titleControl,
    footer: this.footerControl,
    state: this.stateControl,
    width: this.widthControl,
    scheme: this.schemeControl,
    adapted: this.adaptedControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
