import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateComponent, ReadComponent } from './components';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './components/state/tutorial.state';


@NgModule({
    declarations: [
        ReadComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgxsModule.forFeature([TutorialState])
    ]
})
export class DashboardModule {
}
