import { Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { Language } from '../../../../enums/language';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-tabs-test',
  templateUrl: './tabs-test.component.html',
  styleUrls: ['./tabs-test.component.scss']
})
export class TabsTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  types = {tabs: TabsComponent, tab: TabComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/navigation/tabs';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=728%3A22';

  heroes = [
    {id: 1, name: 'Spiderman', avatar: 'assets/images/heroes/spiderman.svg', likes: 381},
    {id: 2, name: 'Ironman', avatar: 'assets/images/heroes/ironman.svg', likes: 412},
    {id: 3, name: 'Captain America', avatar: 'assets/images/heroes/captain.svg', likes: 221}
  ];

  outlineControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);
  adaptedControl = this.fb.control(true);
  titleControl = this.fb.control(false);

  builder = this.fb.group({
    outline: this.outlineControl,
    icons: this.iconsControl,
    badges: this.badgesControl,
    adapted: this.adaptedControl,
    title: this.titleControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
