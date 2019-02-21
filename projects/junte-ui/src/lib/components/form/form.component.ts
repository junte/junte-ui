import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, TemplateRef} from '@angular/core';
import {FormLayout, UI} from '../../enum/ui';
import {FormItemComponent} from './form-item/form-item.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  ui = UI;

  @ContentChildren(FormItemComponent, {read: ElementRef, descendants: true})
  set items(items: QueryList<ElementRef>) {
    setTimeout(() => {
      items.toArray()
        .map(item => item.nativeElement)
        .forEach((item) => this.renderer.setAttribute(item, 'layout', this.layout));
    }, 0);
  }

  @Input()
  title: string | TemplateRef<void>;

  @Input()
  footer: TemplateRef<void>;

  @Input()
  layout: FormLayout;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
