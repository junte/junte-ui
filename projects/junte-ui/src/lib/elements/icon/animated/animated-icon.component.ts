import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { JunteUIConfig } from '../../../config';
import { PropertyApi } from '../../../core/decorators/api';
import { InMemoryCacheService } from '../../../core/services/in-memory-cache.service';
import { IconTag } from '../enums';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.encapsulated.html'
})
export class AnimatedIconComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-animated-icon-host';

  private svg: HTMLElement;
  private _color: string;
  private iconset$: BehaviorSubject<string> = new BehaviorSubject<string>(DEFAULT_ICONSET);
  private icon$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  @Input()
  set iconset(iconset: string) {
    this.iconset$.next(iconset);
  }

  get iconset() {
    return this.iconset$.getValue();
  }

  @HostBinding('attr.data-icon')
  @Input()
  set icon(icon: string) {
    this.icon$.next(icon);
  }

  get icon() {
    return this.icon$.getValue();
  }

  @PropertyApi({
    description: 'Color for icon',
    type: '[ui.color]'
  })
  @Input()
  set color(color: string) {
    this._color = color;
    if (!!this.svg) {
      this.render();
    }
  }

  get color() {
    return this._color;
  }

  @HostBinding('attr.data-has-color')
  get hasColor() {
    return !!this.color;
  }

  @Input()
  @HostBinding('attr.data-tags')
  tags: string[];

  constructor(private http: HttpClient,
              private renderer: Renderer2,
              private cache: InMemoryCacheService,
              private hostRef: ElementRef,
              private config: JunteUIConfig) {
  }

  ngOnInit() {
    combineLatest([this.iconset$, this.icon$])
      .pipe(filter(([iconset, icon]) => !!iconset && !!icon), distinctUntilChanged())
      .subscribe(() => this.load());
  }

  render() {
    if (!!this.color) {
      if (this.tags.includes(IconTag.stroked)) {
        this.svg.setAttribute('stroke', this.color);
      }
      if (this.tags.includes(IconTag.filled)) {
        this.svg.setAttribute('fill', this.color);
      }
    }
    const el = this.hostRef.nativeElement;
    this.renderer.setProperty(el, 'innerHTML', this.svg.outerHTML);
  }

  private load() {
    const path = `${this.config.assets}/icons/animated/${this.iconset}/${this.icon}.svg?hash=${this.config.hash}`;

    let icon = this.cache.get<HTMLElement>(path);
    if (icon === undefined) {
      this.http.get(path, {responseType: 'text'})
        .pipe(map(resp => new DOMParser().parseFromString(resp, 'application/xml')))
        .subscribe(file => {
          icon = file.documentElement;
          const encapsulate = (el: Element) => {
            el.setAttribute('child-of', this.host);
            for (let i = 0; i < el.children.length; i++) {
              encapsulate(el.children[i]);
            }
          };

          encapsulate(icon);
          icon.setAttribute('width', '100%');
          icon.setAttribute('height', '100%');
          this.svg = icon;
          this.render();

          this.cache.set(path, icon);
        });
    } else {
      this.svg = icon;
      this.render();
    }
  }

}
