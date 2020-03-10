import { Component, EventEmitter, HostBinding, Input, Output, Pipe, PipeTransform } from '@angular/core';
import { UI } from 'junte-ui';

type icon = string | { [key: string]: string };

@Pipe({name: 'getIcons'})
export class GetIconsPipe implements PipeTransform {
  transform(icons: { [key: string]: icon }): { name: string, icon: string }[] {
    return Object.entries(icons)
      .filter(([key, value]) => typeof value === 'string')
      .map(([key, value]) => ({
        name: key, icon: value.toString()
      }));
  }
}

@Pipe({name: 'getGroups'})
export class GetGroupsPipe implements PipeTransform {
  transform(icons: { [key: string]: icon }): { [key: string]: icon }[] {
    return Object.entries(icons)
      .filter(([key, value]) => typeof value === 'object')
      .map(([key, value]) => ({
        name: key, icons: value
      }));
  }
}

@Pipe({name: 'getPath'})
export class GetPathPipe implements PipeTransform {
  transform(path: string[], name: string): string[] {
    return !!name ? path.concat([name]) : path;
  }
}

@Component({
  selector: 'app-icons-list',
  templateUrl: './icons-list.component.html',
  styleUrls: ['./icons-list.component.scss']
})
export class IconsListComponent {

  ui = UI;

  @Input()
  name: string = null;

  @Input()
  path: string[] = [];

  @Input()
  icons: { [key: string]: icon } = {};

  @Output()
  selected = new EventEmitter<{ path: string, name: string, value: string }>();

  @HostBinding('attr.with-name')
  get withName() {
    return !!this.name;
  }

}
