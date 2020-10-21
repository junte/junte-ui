import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import sdk from '@stackblitz/sdk';
import {CardComponent, TabComponent, UI} from 'junte-ui';
import {LocalUI} from 'src/enums/local-ui';

enum Types {
  url = 'url',
  template = 'template'
}

@Component({
  selector: 'app-card-test',
  templateUrl: './card-test.component.html',
  styleUrls: ['./card-test.component.scss']
})
export class CardTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  type = Types;

  @ViewChild('code')
  code: TabComponent;

  @ViewChild('example')
  example: ElementRef;

  types = {card: CardComponent};

  paddingControl = this.fb.control(null);
  titleControl = this.fb.control(false);
  footerControl = this.fb.control(false);
  headerControl = this.fb.control(false);
  widthControl = this.fb.control(null);
  stateControl = this.fb.control(null);
  clickableControl = this.fb.control(false);
  adaptedControl = this.fb.control(false);
  iconControl = this.fb.control(false);
  actionsControl = this.fb.control(false);
  pictureControl = this.fb.control(null);
  colorControl = this.fb.control(null);
  positionControl = this.fb.control(null);

  builder = this.fb.group({
    padding: this.paddingControl,
    state: this.stateControl,
    width: this.widthControl,
    title: this.titleControl,
    footer: this.footerControl,
    header: this.headerControl,
    clickable: this.clickableControl,
    adapted: this.adaptedControl,
    icon: this.iconControl,
    actions: this.actionsControl,
    color: this.colorControl,
    picture: this.pictureControl,
    position: this.positionControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  selected(active: number) {
    if (active === 3) {
      setTimeout(() =>
        sdk.embedProjectId(
          this.example.nativeElement,
          'junte-ui-test',
          {
            openFile: 'card',
            view: 'preview',
            hideExplorer: true,
            hideNavigation: true,
            forceEmbedLayout: true,
            height: 500
          }));
    }
  }
}
