import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'jnt-animated-icon',
  template: '',
  styleUrls: ['./animated-icon.component.scss']
})
export class AnimatedIconComponent implements OnInit, AfterViewInit {

  private iconset$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
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

  private set nativeElement(nativeElement: any) {
    this.nativeElement$.next(nativeElement);
  }

  private get nativeElement() {
    return this.nativeElement$.getValue();
  }

  constructor(private http: HttpClient,
              private renderer: Renderer2,
              private host: ElementRef) {
  }

  ngOnInit() {
    combineLatest(this.iconset$, this.icon$)
      .pipe(distinctUntilChanged())
      .subscribe(() => this.load());

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
    const path = `assets/icons/animated/${!!this.iconset ? this.iconset + '/' : ''}${this.icon}.svg`;
    this.http.get(path, {responseType: 'text'}).subscribe(source => {
      this.renderer.setProperty(this.host.nativeElement, 'innerHTML', source);
    });
  }
}
