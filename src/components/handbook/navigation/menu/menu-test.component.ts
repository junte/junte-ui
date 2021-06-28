import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuComponent, MenuItemDirective, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

enum SourceType {
  external = 'external',
  local = 'local'
}

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  types = {menu: MenuComponent, menuItem: MenuItemDirective};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/navigation/menu';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2570%3A2780';

  @ViewChild('tabs') tabs: TabsComponent;

  orientationControl = this.fb.control(null);
  spacingControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);
  collapsedControl = this.fb.control(false);
  loadingControl = this.fb.control(false);
  styleControl = this.fb.control(null);
  disabledControl = this.fb.control(null);

  builder = this.fb.group({
    orientation: this.orientationControl,
    spacing: this.spacingControl,
    icons: this.iconsControl,
    badges: this.badgesControl,
    collapsed: this.collapsedControl,
    loading: this.loadingControl,
    style: this.styleControl,
    disabled: this.disabledControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    // this.styleControl.valueChanges.subscribe(value => {
    //   if (value === UI.menu.style.tabs) {
    //     this.orientationControl.setValue(UI.orientation.horizontal);
    //     this.orientationControl.disable();
    //   } else {
    //     this.orientationControl.enable();
    //   }
    // });
  }
}
