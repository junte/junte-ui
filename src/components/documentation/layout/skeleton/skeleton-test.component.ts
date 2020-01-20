import { Component } from '@angular/core';
import { SkeletonComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';

export enum Sketches {
  User = 'user',
  VerticalPost = 'verticalPost',
  HorizontalPost = 'horizontalPost'
}

@Component({
  selector: 'app-skeleton-test',
  templateUrl: './skeleton-test.component.html',
  styleUrls: ['./skeleton-test.component.scss']
})
export class SkeletonTestComponent {

  ui = UI;
  sketches = Sketches;
  localUi = LocalUI;
  skeleton = SkeletonComponent;

  type = new FormControl(Sketches.User);
  animation = new FormControl(true);

  form = this.fb.group({
    type: this.type,
    animation: this.animation,
  });

  constructor(private fb: FormBuilder) {
  }

}
