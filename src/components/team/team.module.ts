import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from '../../../projects/junte-ui/src/lib/elements/avatar/avatar.module';
import { GridModule } from '../../../projects/junte-ui/src/lib/layout/grid/grid.module';
import { StackModule } from '../../../projects/junte-ui/src/lib/layout/stack/stack.module';
import { LinkModule } from '../../../projects/junte-ui/src/lib/navigation/link/link.module';
import { AppFooterModule } from '../footer/app-footer.module';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    TranslateModule,
    GridModule,
    LinkModule,
    AvatarModule,
    StackModule,
    TeamRoutingModule,
    AppFooterModule
  ]
})
export class TeamModule {
}
