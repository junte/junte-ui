import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FilterComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { Language } from '../../shared/code-highlight/enum';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';

enum Abilities {
  immortality = 'Immortality',
  fly = 'Fly ability',
  crawling_walls = 'Crawling on walls'
}

enum Sources {
  technologies = 'Technologies',
  acquired = 'Acquired',
  congenital = 'Congenital'
}

enum Universes {
  dc = 'DC',
  marvel = 'Marvel',
  xman = 'XMan'
}

class FilterHero {
  constructor(public id: Hero,
              public name: string,
              public abilities: Abilities,
              public source: Sources,
              public universe: Universes) {
  }
}

@Component({
  selector: 'app-filter-test',
  templateUrl: './filter-test.component.html',
  styleUrls: ['./filter-test.component.scss']
})
export class FilterTestComponent implements OnInit {

  localUi = LocalUI;
  ui = UI;
  abilities = Abilities;
  sources = Sources;
  universes = Universes;
  hero = Hero;
  language = Language;
  types = {filter: FilterComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/collections/filters';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=9210%3A0';

  heroes = [
    new FilterHero(Hero.batman, 'Batman', Abilities.immortality, Sources.technologies, Universes.dc),
    new FilterHero(Hero.ironman, 'Ironman', Abilities.fly, Sources.technologies, Universes.marvel),
    new FilterHero(Hero.spiderman, 'Spiderman', Abilities.crawling_walls, Sources.acquired, Universes.marvel),
    new FilterHero(Hero.wolverine, 'Wolverine', Abilities.crawling_walls, Sources.congenital, Universes.xman),
    new FilterHero(Hero.superman, 'Superman', Abilities.fly, Sources.congenital, Universes.dc),
    new FilterHero(Hero.captainAmerica, 'Captain America', Abilities.immortality, Sources.acquired, Universes.marvel),
  ];

  iconControl = new FormControl(false);

  builder = this.fb.group({
    icon: this.iconControl,
  });

  filteredControl = new FormControl([Hero.batman, Hero.ironman, Hero.spiderman, Hero.wolverine, Hero.superman, Hero.captainAmerica]);
  abilitiesControl = new FormControl(null);
  sourcesControl = new FormControl(null);
  universesControl = new FormControl(null);

  form = this.fb.group({
    filtered: this.filteredControl,
    abilities: this.abilitiesControl,
    sources: this.sourcesControl,
    universes: this.universesControl
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.filteredControl.setValue(this.heroes
          .filter(hero => !!this.abilitiesControl.value ? hero.abilities === this.abilitiesControl.value : true)
          .filter(hero => !!this.sourcesControl.value ? hero.source === this.sourcesControl.value : true)
          .filter(hero => !!this.universesControl.value ? hero.universe === this.universesControl.value : true)
          .map(hero => hero.id),
        {emitEvent: false});
    });
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
