import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'jnt-svg-icon',
  template: '',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit, AfterViewInit {

  private iconset$: BehaviorSubject<string> = new BehaviorSubject<string>('standard');
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

  @Input()
  set icon(icon: string) {
    this.icon$.next(icon);
  }

  get icon() {
    return this.icon$.getValue();
  }

  private set nativeElement(nativeElement: any) {
    this.nativeElement$.next(nativeElement);
  }

  private get nativeElement() {
    return this.nativeElement$.getValue();
  }

  constructor(private http: HttpClient,
              private cache: CacheService,
              private renderer: Renderer2,
              private host: ElementRef) {
  }

  ngOnInit() {
    combineLatest(this.iconset$, this.icon$).pipe(
      map(([iconset, icon]) => !!iconset && !!icon ? iconset + '|' + icon : null),
      filter(hash => !!hash),
      distinctUntilChanged()
    ).subscribe(() => this.load());

    combineLatest(this.nativeElement$, this.source$).pipe(
      map(([nativeElement, source]) => !!nativeElement && !!source),
      filter(ready => ready)
    ).subscribe(() => this.render());
  }

  ngAfterViewInit() {
    this.nativeElement = this.host.nativeElement;
  }

  private render() {
    this.renderer.setProperty(this.nativeElement, 'innerHTML', this.source);
  }

  private load() {
    let extract = (iconset) => {
      let icon = iconset.querySelector('[id=' + this.icon + ']');
      if (icon) {
        this.source = new XMLSerializer().serializeToString(icon);
      } else {
        console.log(`icon not found ${this.icon}`);
      }
    };

    let path = `/assets/icons/${this.iconset}.svg`;
    let key = `${path}|${this.icon}`;

    let source = this.cache.get<string>(key);
    if (source === undefined) {
      let iconset = this.cache.get(path);
      if (iconset === undefined) {
        iconset = new BehaviorSubject<Document>(null);
        this.cache.set<Observable<string>>(path, iconset);

        this.http.get(path, {responseType: 'text'}).subscribe(source =>
          iconset.next(new DOMParser().parseFromString(source, 'application/xml')));
      }
      iconset.pipe(filter(iconset => !!iconset)).subscribe(iconset => extract(iconset));
    } else {
      this.source = source;
    }
  }

}
