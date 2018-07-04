import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';


const appRoutes = [
    { path: '', component: SigninComponent },
    { path: 'label-maker', component: MainComponent }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouterModule { }