import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const mokemiRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/mokemi/home'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mokemiRoutes)
    ]
})
export class MokemiRouteModule {
    constructor() {}
}