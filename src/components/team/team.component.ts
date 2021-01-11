import { Component } from '@angular/core';
import {BreakpointService, UI} from 'junte-ui';
import {LocalUI} from '../../enums/local-ui';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  ui = UI;
  localUi = LocalUI;
}
