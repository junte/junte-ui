import { Component } from '@angular/core';
import { SkeletonComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';

export enum Sketches {
  UserCard = 'userCard',
  VerticalPostCard = 'verticalPostCard',
  HorizontalPostCard = 'horizontalPostCard'
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

  type = new FormControl(Sketches.UserCard);
  animation = new FormControl(true);

  form = this.fb.group({
    type: this.type,
    animation: this.animation,
  });

  constructor(private fb: FormBuilder) {
  }

}
