import {AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, Renderer2, TemplateRef} from '@angular/core';
import {FormLayout, UI} from '../../enum/ui';
import {FormItemComponent} from './form-item/form-item.component';

@Component({
  selector: 'jnt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  ui = UI;

  @ContentChildren(FormItemComponent)
  set items(items: QueryList<FormItemComponent>) {
    items.toArray().map(item => item as HTMLElement)
      .forEach((item: HTMLElement) => this.renderer.setAttribute(item.host.nativeElement, 'layout', this.layout));
  }

  @Input()
  title: string | TemplateRef<void>;

  @Input()
  footer: TemplateRef<void>;

  @Input()
  layout: FormLayout = FormLayout.vertical;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
