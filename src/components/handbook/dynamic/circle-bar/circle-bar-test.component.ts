import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabsComponent, UI } from 'junte-ui';
import { CircleBarComponent } from 'junte-ui';
import { BarIndicatorComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-circle-bar-test',
  templateUrl: './circle-bar-test.component.html',
  styleUrls: ['./circle-bar-test.component.scss']
})
export class CircleBarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {indicator: BarIndicatorComponent, bar: CircleBarComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/tree/master/projects/junte-ui/src/lib/components/dynamic/circlebar';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=1751%3A6554';

  @ViewChild('tabs') tabs: TabsComponent;

  likesControl = this.fb.control(50);
  powerControl = this.fb.control(60);
  healthControl = this.fb.control(80);
  likesColorControl = this.fb.control(UI.color.purple);
  powerColorControl = this.fb.control(UI.color.red);
  healthColorControl = this.fb.control(UI.color.green);

  builder = this.fb.group({
    likes: this.likesControl,
    power: this.powerControl,
    health: this.healthControl,
    likesColor: this.likesColorControl,
    powerColor: this.powerColorControl,
    healthColor: this.healthColorControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
