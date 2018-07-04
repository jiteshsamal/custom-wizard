import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainWizardComponent } from './main-wizard/main-wizard.component';
import { WizardHeaderComponent } from './wizard-header/wizard-header.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardService } from './wizard.service';



@NgModule({
  declarations: [
    MainWizardComponent,
    WizardHeaderComponent,
    WizardStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WizardService],
  exports: [MainWizardComponent, WizardHeaderComponent, WizardStepComponent]
})
export class WizardModule { }
