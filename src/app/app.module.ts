import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component';
import { AppService } from './services/app.service'
import { AppRouterModule } from './app.route';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
