import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AvatarComponent, AvatarsGroupComponent, AvatarsListComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from '../../../../enums/local-ui';

export enum Sketches {
  icon = 'icon',
  initials = 'initials',
  image = 'image'
}

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrls: ['./avatar-test.component.scss']
})
export class AvatarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sketches = Sketches;
  types = {
    avatar: AvatarComponent,
    list: AvatarsListComponent,
    group: AvatarsGroupComponent
  };
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/elements/avatar';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=791%3A0';

  @ViewChild('code') code: TabComponent;

  sizeControl = this.fb.control(null);
  shapeControl = this.fb.control(null);
  dotControl = this.fb.control(false);
  sketchControl = this.fb.control(this.sketches.image);

  builder = this.fb.group({
    size: this.sizeControl,
    shape: this.shapeControl,
    sketch: this.sketchControl,
    dot: this.dotControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
