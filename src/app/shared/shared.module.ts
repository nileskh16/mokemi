import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [RouterModule],
    exports: [RouterModule]
})
export class SharedModule {
    constructor() {}

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}