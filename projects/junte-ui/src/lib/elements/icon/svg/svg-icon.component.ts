import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { InMemoryCacheService } from '../../../core/services/in-memory-cache.service';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-svg-icon',
  templateUrl: './svg-icon.encapsulated.html'
})
export class SvgIconComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-svg-icon-host';

  private icon$ = new BehaviorSubject<string>(null);
  private iconset$ = new BehaviorSubject<string>(DEFAULT_ICONSET);
  private source$ = new BehaviorSubject<string>(null);
  private container$ = new BehaviorSubject<any>(null);

  @ViewChild('svg', {static: true})
  svg: ElementRef;

  private set source(source: string) {
    this.source$.next(source);
  }

  private get source() {
    return this.source$.getValue();
  }

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

  private set container(nativeElement: HTMLElement) {
    this.container$.next(nativeElement);
  }

  private get container() {
    return this.container$.getValue();
  }

  constructor(private http: HttpClient,
              private cache: InMemoryCacheService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    combineLatest([this.iconset$, this.icon$])
      .pipe(filter(([iconset, icon]) => !!iconset && !!icon),
        distinctUntilChanged())
      .subscribe(() => this.load());

    combineLatest([this.container$, this.source$])
      .pipe(filter(([container, source]) => !!container && !!source))
      .subscribe(() => this.render());
  }

  ngAfterViewInit() {
    this.container = this.svg.nativeElement;
  }

  private render() {
    this.renderer.setProperty(this.container, 'innerHTML', this.source);
  }

  private extract(iconset) {
    const icon = iconset.querySelector(`[id=${this.icon}]`);
    if (!icon) {
      throw new Error(`icon [${this.icon}] not found`);
    }

    this.source = icon.innerHTML;
  }

  private load() {
    const path = `assets/icons/svg/${this.iconset}.xml`;
    const key = `${path}|${this.icon}`;

    const source = this.cache.get<string>(key);
    if (source === undefined) {
      let iconset$ = this.cache.get(path);
      if (iconset$ === undefined) {
        iconset$ = new BehaviorSubject<Document>(null);
        this.cache.set<Observable<string>>(path, iconset$);

        this.http.get(path, {responseType: 'text'}).subscribe(response =>
          iconset$.next(new DOMParser().parseFromString(response, 'application/xml')));
      }
      iconset$.pipe(filter(iconset => !!iconset))
        .subscribe(iconset => this.extract(iconset));
    } else {
      this.source = source;
    }
  }

}
