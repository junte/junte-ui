import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FilterComponent, TabComponent, UI } from 'junte-ui';
import { Language } from '../../shared/code-highlight/enum';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';

enum Skills {
  immortality = 'Immortality',
  fly = 'Fly',
  climbing_walls = 'Climbing walls'
}

enum Sources {
  technologies = 'Technologies',
  acquired = 'Acquired',
  congenital = 'Congenital'
}

enum Worlds {
  dc = 'DC',
  marvel = 'Marvel',
  xman = 'XMan'
}

class FilterHero {
  constructor(public id: Hero,
              public name: string,
              public skills: Skills,
              public source: Sources,
              public world: Worlds) {
  }
}

@Component({
  selector: 'app-filters-test',
  templateUrl: './filters-test.component.html',
  styleUrls: ['./filters-test.component.scss']
})
export class FiltersTestComponent implements OnInit {

  localUi = LocalUI;
  ui = UI;
  skills = Skills;
  sources = Sources;
  worlds = Worlds;
  hero = Hero;
  language = Language;
  types = {filter: FilterComponent};

  heroes = [
    new FilterHero(Hero.batman, 'Batman', Skills.immortality, Sources.technologies, Worlds.dc),
    new FilterHero(Hero.ironman, 'Ironman', Skills.fly, Sources.technologies, Worlds.marvel),
    new FilterHero(Hero.spiderman, 'Spiderman', Skills.climbing_walls, Sources.acquired, Worlds.marvel),
    new FilterHero(Hero.wolverine, 'Wolverine', Skills.climbing_walls, Sources.congenital, Worlds.xman),
    new FilterHero(Hero.superman, 'Superman', Skills.fly, Sources.congenital, Worlds.dc),
    new FilterHero(Hero.captainAmerica, 'Captain America', Skills.immortality, Sources.acquired, Worlds.marvel),
  ];

  iconControl = new FormControl(false);

  builder = this.fb.group({
    icon: this.iconControl,
  });

  filteredControl = new FormControl([Hero.batman, Hero.ironman, Hero.spiderman, Hero.wolverine, Hero.superman, Hero.captainAmerica]);
  skillsControl = new FormControl(null);
  sourcesControl = new FormControl(null);
  worldsControl = new FormControl(null);

  form = this.fb.group({
    filtered: this.filteredControl,
    skills: this.skillsControl,
    sources: this.sourcesControl,
    worlds: this.worldsControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.filteredControl.setValue(this.heroes
          .filter(hero => !!this.skillsControl.value ? hero.skills === this.skillsControl.value : true)
          .filter(hero => !!this.sourcesControl.value ? hero.source === this.sourcesControl.value : true)
          .filter(hero => !!this.worldsControl.value ? hero.world === this.worldsControl.value : true)
          .map(hero => hero.id),
        {emitEvent: false});
    });
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
