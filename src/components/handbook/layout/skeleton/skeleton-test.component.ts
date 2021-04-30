import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SkeletonComponent, UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import {Language} from '../../../../enums/language';

export enum Sketch {
  User = 'user',
  VerticalPost = 'verticalPost',
  HorizontalPost = 'horizontalPost',
  Cards = 'cards'
}

@Component({
  selector: 'app-skeleton-test',
  templateUrl: './skeleton-test.component.html',
  styleUrls: ['./skeleton-test.component.scss']
})
export class SkeletonTestComponent implements OnInit {

  ui = UI;
  sketch = Sketch;
  localUi = LocalUI;
  language = Language;
  types = {skeleton: SkeletonComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/layout/skeleton';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=1270%3A539';

  @ViewChild('code') code: TabComponent;

  sketchControl = this.fb.control(Sketch.User);
  animationControl = this.fb.control(true);

  builder = this.fb.group({
    sketch: this.sketchControl,
    animation: this.animationControl,
  });

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
