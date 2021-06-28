import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabsComponent, UI } from 'junte-ui';
import { ProgressBarComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-progress-bar-test',
  templateUrl: './progress-bar-test.component.html',
  styleUrls: ['./progress-bar-test.component.scss']
})
export class ProgressBarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {progress: ProgressBarComponent};
  handbook = HANDBOOK;
  added = false;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/dynamic/progress-bar';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2616%3A69';

  @ViewChild('tabs') tabs: TabsComponent;

  valueControl = this.fb.control(50);
  legendControl = this.fb.control(true);

  builder = this.fb.group({
    value: this.valueControl,
    legend: this.legendControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
