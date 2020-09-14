import { Component, EventEmitter, HostBinding, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectableDirective, UI } from 'junte-ui';

type Icon = string | { [key: string]: string };

interface IconTag {
  name: string;
  path: string;
  icons: { [key: string]: string };
}

@Pipe({name: 'getIcons'})
export class GetIconsPipe implements PipeTransform {
  transform(icons: { [key: string]: Icon }): { name: string, icon: string }[] {
    return Object.entries(icons)
      .filter(([key, value]) => typeof value === 'string')
      .map(([key, value]) => ({
        name: key, icon: value.toString()
      }));
  }
}

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent implements OnInit {


  selectable = SelectableDirective;

  ui = UI;
  tags: IconTag[] = [];

  @Input()
  name: string = null;

  @Input()
  path: string;

  @Input()
  icons: { [key: string]: Icon } = {};

  @Output()
  selected = new EventEmitter<{ value: Icon, name: string }>();

  @HostBinding('attr.with-name')
  get withName() {
    return !!this.name;
  }

  iconControl = this.fb.control(null);
  selectIcon = this.fb.group({
    icon: this.iconControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.iconsByTags(this.icons, this.path);
    this.iconControl.valueChanges.subscribe( value => {
      this.selected.emit(value);
    });
  }

  iconsByTags(icon: { [key: string]: Icon }, path: string) {
    for (const [key, value] of Object.entries(icon)) {
      if (typeof value === 'object') {
        this.iconsByTags(value, path.concat('.', key));
      } else {
        const tags = value.split(':')[3];
        const name = !tags.includes('|') ? tags : tags.split('|')[0];
        const tag = this.tags.find(t => name === t.name);
        if (!!tag) {
          tag.icons[key] = value;
        } else {
          this.tags.push({name: name, path: path, icons: {[key]: value}});
        }
      }
    }
  }

}
