import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LabelComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-label-test',
  templateUrl: './label-test.component.html',
  styleUrls: ['./label-test.component.scss']
})
export class LabelTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {label: LabelComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/elements/label';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=187%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

  sizeControl = this.fb.control(null);
  colorControl = this.fb.control(UI.color.primary);
  iconControl = this.fb.control(true);
  dotControl = this.fb.control(false);
  outlineControl = this.fb.control(null);

  builder = this.fb.group({
    icon: this.iconControl,
    size: this.sizeControl,
    color: this.colorControl,
    dot: this.dotControl,
    outline: this.outlineControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
