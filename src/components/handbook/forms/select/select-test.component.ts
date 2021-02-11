import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { SelectComponent, SelectOptionComponent, TabComponent, UI } from 'junte-ui';
import { Observable, of } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';
import { HANDBOOK } from 'src/consts';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.scss']
})
export class SelectTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {select: SelectComponent, option: SelectOptionComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/select';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=114%3A219';

  @ViewChild('code') code: TabComponent;

  selected = {heroes: []};
  created = {heroes: []};

  modeControl = this.fb.control(null);
  sizeControl = this.fb.control(null);
  disabledControl = this.fb.control(false);
  allowEmptyControl = this.fb.control(true);
  searchControl = this.fb.control(false);
  loaderControl = this.fb.control(null);
  templateControl = this.fb.control(false);
  iconControl = this.fb.control(false);
  loadingControl = this.fb.control(false);

  builder = this.fb.group({
    mode: this.modeControl,
    size: this.sizeControl,
    disabled: this.disabledControl,
    allowEmpty: this.allowEmptyControl,
    search: this.searchControl,
    loader: this.loaderControl,
    template: this.templateControl,
    icon: this.iconControl,
    loading: this.loadingControl,
  });

  selectControl = this.fb.control(null);
  form = this.fb.group({
    select: this.selectControl
  });

  heroes = [
    {id: 1, name: 'Spiderman', avatar: 'assets/images/heroes/spiderman.svg', likes: 381},
    {id: 2, name: 'Ironman', avatar: 'assets/images/heroes/ironman.svg', likes: 412},
    {id: 3, name: 'Captain America', avatar: 'assets/images/heroes/captain.svg', likes: 221}
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges.subscribe(() => this.code.flash());
    this.disabledControl.valueChanges.subscribe(disabled =>
      disabled ? this.selectControl.disable({emitEvent: false}) : this.selectControl.enable({emitEvent: false}));
    this.modeControl.valueChanges.pipe(debounceTime(500)).subscribe(mode => this.selectControl
      .setValue(mode === UI.select.mode.single ? null : []));
  }

  trackHero(index, hero: { id: number }) {
    return hero.id;
  }

  search() {
    return (query: string) => new Observable(observable => {
      observable.next(this.heroes.filter(hero => !query
        || hero.name.toLowerCase().includes(query.toLowerCase())));
      observable.complete();
    }).pipe(delay(1000));
  }

  createHero(name: string, close: Function): Observable<null> {
    const id = this.created.heroes.length + 100;
    this.created.heroes.push({id, name});
    const selected = this.selectControl.value;
    selected.push(id);
    this.selectControl.setValue(selected);
    close();
    return of(null);
  }
}
