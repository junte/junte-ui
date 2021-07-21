import { AfterViewInit, ContentChildren, Directive, Input, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ViewportType } from '../../core/enums/viewport';

const WINDOW_RESIZE_LISTENER = 'resize';

@Directive({
  selector: 'jnt-viewport-rule'
})
export class ViewportRuleDirective {

  @Input()
  type: ViewportType = ViewportType.fixed;

  @Input()
  from: number;

  @Input()
  to: number;

  @Input()
  width: number;
}

@Directive({
  selector: 'jnt-viewport'
})
export class ViewportDirective implements OnInit, AfterViewInit, OnDestroy {

  viewport: { global?: HTMLMetaElement, current?: HTMLMetaElement } = {};
  listeners: { resize?: () => void } = {};

  @Input()
  defaults = 'width=device-width, initial-scale=1';

  @ContentChildren(ViewportRuleDirective)
  rules: QueryList<ViewportRuleDirective>;

  ngOnInit() {
    const viewport = document.head.querySelector('meta[name=viewport]') as HTMLMetaElement;
    if (!!viewport) {
      document.head.removeChild(viewport);
      this.viewport.global = viewport;
    }

    const resize = () => this.render();
    window.addEventListener(WINDOW_RESIZE_LISTENER, () => this.render());
    this.listeners.resize = resize;
  }

  ngAfterViewInit() {
    this.rules.changes.subscribe(() => this.render());
    this.render();
  }

  ngOnDestroy() {
    if (!!this.viewport.current) {
      document.head.removeChild(this.viewport.current);
    }
    if (!!this.viewport.global) {
      document.head.appendChild(this.viewport.global);
    }

    if (!!this.listeners.resize) {
      window.removeEventListener(WINDOW_RESIZE_LISTENER, this.listeners.resize);
    }
  }

  private render() {
    if (!this.rules) {
      return;
    }

    if (!!this.viewport.current) {
      document.head.removeChild(this.viewport.current);
      this.viewport.current = null;
    }

    const props = [];
    for (const rule of this.rules) {
      if (window.screen.availWidth > rule.from
        && window.screen.availWidth < rule.to) {
        props.push(`width=${rule.width}`);
      }
    }
    const viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute('content', props.length > 0 ? props.join(', ') : this.defaults);
    document.head.appendChild(viewport);

    this.viewport.current = viewport;
  }

}
