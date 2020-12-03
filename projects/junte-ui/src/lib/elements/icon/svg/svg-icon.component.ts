import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { JunteUIConfig } from '../../../config';
import { Stroke } from '../../../core/enums/stroke';
import { InMemoryCacheService } from '../../../core/services/in-memory-cache.service';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-svg-icon',
  templateUrl: './svg-icon.encapsulated.html'
})
export class SvgIconComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-svg-icon-host';

  private icon$ = new BehaviorSubject<string>(null);
  private iconset$ = new BehaviorSubject<string>(DEFAULT_ICONSET);

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

  @HostBinding('attr.data-stroke')
  _stroke: Stroke = Stroke.normal;

  @Input()
  @HostBinding('attr.data-tags')
  tags: string[];

  @Input()
  set stroke(stroke: Stroke) {
    this._stroke = stroke || Stroke.normal;
  }

  get stroke() {
    return this._stroke;
  }

  constructor(private http: HttpClient,
              private cache: InMemoryCacheService,
              private hostRef: ElementRef,
              private renderer: Renderer2,
              private config: JunteUIConfig) {
  }

  ngOnInit() {
    combineLatest([this.iconset$, this.icon$])
      .pipe(filter(([iconset, icon]) => !!iconset && !!icon),
        distinctUntilChanged())
      .subscribe(() => this.load());
  }

  render(icon: HTMLElement) {
    const el = this.hostRef.nativeElement;
    this.renderer.setProperty(el, 'innerHTML', icon.outerHTML);
  }

  private load() {
    const path = `${this.config.assets}/icons/svg/${this.iconset}.xml?hash=${this.config.hash}`;
    const key = `${path}|${this.icon}`;

    let icon = this.cache.get<HTMLElement>(key);
    if (icon === undefined) {
      let iconset$ = this.cache.get<BehaviorSubject<Document>>(path);
      if (iconset$ === undefined) {
        iconset$ = new BehaviorSubject<Document>(null);
        this.cache.set(path, iconset$);

        this.http.get(path, {responseType: 'text'}).subscribe(response =>
          iconset$.next(new DOMParser().parseFromString(response, 'application/xml')));
      }
      iconset$.pipe(filter(iconset => !!iconset))
        .subscribe(iconset => {
          icon = iconset.querySelector(`[id=${this.icon}]`);
          if (!icon) {
            throw new Error(`icon [${this.icon}] not found`);
          }

          icon.setAttribute('child-of', this.host);
          icon.setAttribute('width', '100%');
          icon.setAttribute('height', '100%');
          this.render(icon);

          this.cache.set(key, icon);
        });
    } else {
      this.render(icon);
    }
  }

}
