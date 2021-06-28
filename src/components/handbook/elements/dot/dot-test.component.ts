import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DotComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-dot-test',
  templateUrl: './dot-test.component.html',
  styleUrls: ['./dot-test.component.scss']
})
export class DotTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {dot: DotComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/elements/dot';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=9331%3A0';

  @ViewChild('tabs') tabs: TabsComponent;

  colorControl = this.fb.control(UI.color.primary);
  pulseControl = this.fb.control(null);

  builder = this.fb.group({
    color: this.colorControl,
    pulse: this.pulseControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
