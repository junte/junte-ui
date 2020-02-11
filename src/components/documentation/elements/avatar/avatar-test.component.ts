import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AvatarComponent, AvatarsGroupComponent, AvatarsListComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrls: ['./avatar-test.component.scss']
})
export class AvatarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {
    avatar: AvatarComponent,
    list: AvatarsListComponent,
    group: AvatarsGroupComponent
  };

  @ViewChild('code', {static: false}) code: TabComponent;

  sizeControl = this.fb.control(null);
  shapeControl = this.fb.control(null);
  iconControl = this.fb.control(true);
  textControl = this.fb.control(true);
  imageControl = this.fb.control(true);

  builder = this.fb.group({
    size: this.sizeControl,
    shape: this.shapeControl,
    icon: this.iconControl,
    text: this.textControl,
    image: this.imageControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
