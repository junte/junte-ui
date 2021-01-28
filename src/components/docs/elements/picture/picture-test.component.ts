import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PictureComponent, TabComponent, UI } from 'junte-ui';
import { Fit } from 'projects/junte-ui/src/lib/core/enums/fit';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

export enum Sketches {
  icon = 'icon',
  image = 'image'
}

@Component({
  selector: 'app-picture-test',
  templateUrl: './picture-test.component.html',
  styleUrls: ['./picture-test.component.scss']
})
export class PictureTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sketches = Sketches;
  types = {picture: PictureComponent};
  handbook = HANDBOOK;
  fit = Fit;

  @ViewChild('code') code: TabComponent;

  imageControl = this.fb.control(true);
  iconControl = this.fb.control(false);
  typeControl = this.fb.control(this.sketches.image);
  fitControl = this.fb.control(null);
  positionControl = this.fb.control(null);
  widthControl = this.fb.control(300);
  heightControl = this.fb.control(200);

  builder = this.fb.group({
    image: this.imageControl,
    icon: this.iconControl,
    type: this.typeControl,
    fit: this.fitControl,
    position: this.positionControl,
    width: this.widthControl,
    height: this.heightControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
