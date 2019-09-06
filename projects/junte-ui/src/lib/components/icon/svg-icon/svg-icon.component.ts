import {HttpClient} from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {CacheService} from '../../../services/cache.service';
import {isUndefined} from 'util';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-svg-icon',
  templateUrl: './svg-icon.encapsulated.html',
  styleUrls: ['./svg-icon.encapsulated.scss']
})
export class SvgIconComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-svg-icon-host';

  private iconset$: BehaviorSubject<string> = new BehaviorSubject<string>(DEFAULT_ICONSET);
  private icon$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private source$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private nativeElement$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

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

  @HostBinding('attr.icon')
  @Input()
  set icon(icon: string) {
    this.icon$.next(icon);
  }

  get icon() {
    return this.icon$.getValue();
  }

  private set nativeElement(nativeElement: HTMLElement) {
    this.nativeElement$.next(nativeElement);
  }

  private get nativeElement() {
    return this.nativeElement$.getValue();
  }

  constructor(private http: HttpClient,
              private cache: CacheService,
              private renderer: Renderer2,
              private hostRef: ElementRef) {
  }

  ngOnInit() {
    combineLatest(this.iconset$, this.icon$)
      .pipe(filter(([iconset, icon]) => !!iconset && !!icon),
        distinctUntilChanged())
      .subscribe(() => this.load());

    combineLatest(this.nativeElement$, this.source$)
      .pipe(filter(([nativeElement, source]) => !!nativeElement && !!source))
      .subscribe(() => this.render());
  }

  ngAfterViewInit() {
    this.nativeElement = this.hostRef.nativeElement;
  }

  private render() {
    this.renderer.setProperty(this.nativeElement, 'innerHTML', this.source);
  }

  private extract(iconset) {
    const icon = iconset.querySelector('[id=' + this.icon + ']');
    if (!!icon) {
      this.source = new XMLSerializer().serializeToString(icon);
    } else {
      console.log(`icon not found ${this.icon}`);
    }
  }

  private load() {
    const path = `assets/icons/svg/${this.iconset}.xml`;
    const key = `${path}|${this.icon}`;

    const source = this.cache.get<string>(key);
    if (isUndefined(source)) {
      let iconset$ = this.cache.get(path);
      if (isUndefined(iconset$)) {
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
