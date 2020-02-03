import { Component, OnInit, ViewChild } from '@angular/core';
import { AvatarComponent, TabComponent, UI } from 'junte-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { LocalUI } from '../../../../enums/local-ui';
import { AvatarsListComponent } from 'junte-ui';
import { AvatarsGroupComponent } from 'junte-ui';

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrls: ['./avatar-test.component.scss']
})
export class AvatarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  avatar = AvatarComponent;
  avatarsList = AvatarsListComponent;
  avatarsGroup = AvatarsGroupComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  sizeControl = new FormControl(UI.size.normal);
  shapeControl = new FormControl(UI.shape.circle);
  iconControl = new FormControl(false);
  textControl = new FormControl(false);
  imageControl = new FormControl(false);

  form = this.fb.group({
    size: this.sizeControl,
    shape: this.shapeControl,
    icon: this.iconControl,
    text: this.textControl,
    image: this.imageControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

}
