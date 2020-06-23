import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChartComponent, ChartIndicatorComponent, TabComponent, UI } from 'junte-ui';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.scss']
})
export class ChartTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  hero = Hero;

  heroes = [
    {
      id: 1, name: 'spiderman', title: 'Spiderman', avatar: 'assets/images/heroes/spiderman.svg', likes: 9981,
      label: '10k', value: 10, color: UI.color.yellow, image: 'https://giphy.com/embed/yFqLQzipdekuI'
    },
    {
      id: 2, name: 'ironman', title: 'Ironman', avatar: 'assets/images/heroes/ironman.svg', likes: 10412,
      label: '10k', value: 30, color: UI.color.red, image: 'https://giphy.com/embed/4gkA8zBZnI13i'
    },
    {
      id: 3, name: 'captain_america', title: 'Captain America', avatar: 'assets/images/heroes/captain.svg', likes: 10221,
      label: '10k', value: 40, color: UI.color.blue100, image: 'https://giphy.com/embed/aShBCHV3Cu6FG'
    }
  ];

  types = {
    chart: ChartComponent,
    chartIndicator: ChartIndicatorComponent
  };

  @ViewChild('code', {static: false}) code: TabComponent;

  templateControl = this.fb.control(false);

  builder = this.fb.group({
    template: this.templateControl
  });

  heroControl = this.fb.control(null);
  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }


}
