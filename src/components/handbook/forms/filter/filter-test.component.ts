import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FilterComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK, Hero, Abilities, Sources, Universes } from 'src/consts';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

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
    new FilterHero(Hero.batman, 'Batman', Abilities.intellect, Sources.technologies, Universes.dc),
    new FilterHero(Hero.ironman, 'Ironman', Abilities.intellect, Sources.technologies, Universes.marvel),
    new FilterHero(Hero.spiderman, 'Spiderman', Abilities.strength, Sources.acquired, Universes.marvel),
    new FilterHero(Hero.wolverine, 'Wolverine', Abilities.immortality, Sources.congenital, Universes.xmen),
    new FilterHero(Hero.superman, 'Superman', Abilities.fly, Sources.congenital, Universes.dc),
    new FilterHero(Hero.captainAmerica, 'Captain America', Abilities.immortality, Sources.acquired, Universes.marvel),
    new FilterHero(Hero.wonder, 'Wonder Woman', Abilities.fly, Sources.congenital, Universes.dc),
    new FilterHero(Hero.thanos, 'Thanos', Abilities.strength, Sources.congenital, Universes.marvel),
    new FilterHero(Hero.hulk, 'Hulk', Abilities.strength, Sources.acquired, Universes.marvel)
  ];

  iconControl = new FormControl(false);

  builder = this.fb.group({
    icon: this.iconControl,
  });

  filteredControl = new FormControl([Hero.batman, Hero.ironman, Hero.spiderman, Hero.wolverine, Hero.superman, Hero.captainAmerica, Hero.wonder, Hero.thanos, Hero.hulk]);
  abilitiesControl = new FormControl(null);
  sourcesControl = new FormControl(null);
  universesControl = new FormControl(null);

  form = this.fb.group({
    filtered: this.filteredControl,
    abilities: this.abilitiesControl,
    sources: this.sourcesControl,
    universes: this.universesControl
  });

  @ViewChild('tabs') tabs: TabsComponent;

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
      .subscribe(() => this.tabs.flash(1));
  }

}
