// Modules
import { NgModule } from '@angular/core';
import { MokemiRouteModule } from './mokemi.route.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        MokemiRouteModule,
        SharedModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        CareersComponent,
        DashboardComponent
    ]
})
export class MokemiGroupModule {
    constructor() {}
}