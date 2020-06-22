import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { InMemoryCacheService } from '../../../core/services/in-memory-cache.service';

const DEFAULT_ICONSET = 'default';

@Component({
  selector: 'jnt-animated-icon',
  templateUrl: './animated-icon.encapsulated.html'
})
export class AnimatedIconComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-animated-icon-host';

  private iconset$: BehaviorSubject<string> = new BehaviorSubject<string>(DEFAULT_ICONSET);
  private icon$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private source$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private nativeElement$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

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

  private set source(source: string) {
    this.source$.next(source);
  }

  private get source() {
    return this.source$.getValue();
  }

  private set nativeElement(nativeElement: HTMLElement) {
    this.nativeElement$.next(nativeElement);
  }

  private get nativeElement() {
    return this.nativeElement$.getValue();
  }

  constructor(private http: HttpClient,
              private renderer: Renderer2,
              private cache: InMemoryCacheService,
              private hostRef: ElementRef) {
  }

  ngOnInit() {
    combineLatest([this.iconset$, this.icon$])
      .pipe(filter(([iconset, icon]) => !!iconset && !!icon), distinctUntilChanged())
      .subscribe(() => this.load());

    combineLatest([this.nativeElement$, this.source$])
      .pipe(filter(([nativeElement, source]) => !!nativeElement && !!source))
      .subscribe(() => this.render());
  }

  ngAfterViewInit() {
    this.nativeElement = this.hostRef.nativeElement;
  }

  private render() {
    this.renderer.setProperty(this.nativeElement, 'innerHTML', this.source);
  }

  private load() {
    const path = `assets/icons/animated/${this.iconset}/${this.icon}.svg`;

    const source = this.cache.get(path);
    if (source === undefined) {
      this.http.get(path, {responseType: 'text'})
        .subscribe(response => {
          this.source = response;
          this.cache.set(path, response);
        });
    } else {
      this.source = source;
    }
  }
}
