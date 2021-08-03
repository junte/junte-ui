import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarouselComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.scss']
})
export class CarouselTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  handbook = HANDBOOK;
  seconds = 9;
  minutes = 0;
  hours = 0;
  days = 0;
  finished = 0;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/dynamic/carousel';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2616%3A70';

  @ViewChild('carousel')
  carousel: CarouselComponent;

  @ViewChild('tabs')
  tabs: TabsComponent;

  arrowsControl = this.fb.control(true);
  dotsControl = this.fb.control(false);
  autoplayControl = this.fb.control(false);
  infiniteControl = this.fb.control(true);
  orientationControl = this.fb.control(UI.carousel.orientation.left);
  autoplaySpeedControl = this.fb.control(3);

  builder = this.fb.group({
    arrows: this.arrowsControl,
    dots: this.dotsControl,
    autoplay: this.autoplayControl,
    infinite: this.infiniteControl,
    orientation: this.orientationControl,
    autoplaySpeed: this.autoplaySpeedControl
  });

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}

