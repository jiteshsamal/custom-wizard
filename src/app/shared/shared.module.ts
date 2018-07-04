import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {WizardModule} from './wizard/wizard.module'


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WizardModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [WizardModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule { }
