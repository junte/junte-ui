import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SkeletonComponent, UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum Sketch {
  User = 'user',
  VerticalPost = 'verticalPost',
  HorizontalPost = 'horizontalPost'
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
  types = {skeleton: SkeletonComponent};

  @ViewChild('code') code: TabComponent;

  sketchControl = this.fb.control(Sketch.User);
  animationControl = this.fb.control(true);

  builder = this.fb.group({
    sketch: this.sketchControl,
    animation: this.animationControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
