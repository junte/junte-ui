import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {AvatarModule, GridModule, StackModule, LinkModule, IconModule, MenuModule} from 'junte-ui';
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
        AppFooterModule,
        IconModule,
        MenuModule
    ]
})
export class TeamModule {
}
