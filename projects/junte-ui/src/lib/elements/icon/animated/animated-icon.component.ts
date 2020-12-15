import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { JunteUIConfig } from '../../../config';
import { PropertyApi } from '../../../core/decorators/api';
import { InMemoryCacheService } from '../../../core/services/in-memory-cache.service';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.encapsulated.html'
})
export class AnimatedIconComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-animated-icon-host';

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
  color = null;

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

  private render(icon: string) {
    this.renderer.setProperty(this.hostRef.nativeElement, 'innerHTML', icon);
  }

  private load() {
    const path = `${this.config.assets}/icons/animated/${this.iconset}/${this.icon}.svg?hash=${this.config.hash}`;

    const icon = this.cache.get<string>(path);
    if (icon === undefined) {
      this.http.get(path, {responseType: 'text'})
        .subscribe(i => {
          this.render(i);
          this.cache.set(path, i);
        });
    } else {
      this.render(icon);
    }
  }
}
