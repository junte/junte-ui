import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SkeletonComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

export enum Sketch {
  User = 'user',
  VerticalPost = 'verticalPost',
  HorizontalPost = 'horizontalPost',
  Text = 'text',
  ImageGallery = 'imageGallery',
  Contacts = 'contacts'
}

@Component({
  selector: 'app-skeleton-test',
  templateUrl: './skeleton-test.component.html',
  styleUrls: ['./skeleton-test.component.scss']
})
export class SkeletonTestComponent {

  ui = UI;
  sketch = Sketch;
  localUi = LocalUI;
  skeleton = SkeletonComponent;

  sketchControl = this.fb.control(Sketch.User);
  animationControl = this.fb.control(true);

  form = this.fb.group({
    sketch: this.sketchControl,
    animation: this.animationControl,
  });

  constructor(private fb: FormBuilder) {
  }

}
