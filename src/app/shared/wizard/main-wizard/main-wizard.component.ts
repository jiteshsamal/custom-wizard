import { Component, OnInit, ContentChild, ContentChildren, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { WizardHeaderComponent } from '../wizard-header/wizard-header.component';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { WizardAction } from '../wizardActions'
import { WizardService } from '../wizard.service';


@Component({
  selector: 'app-main-wizard',
  templateUrl: './main-wizard.component.html',
  styleUrls: ['./main-wizard.component.css']
})
export class MainWizardComponent implements OnInit {

  @ContentChild(WizardHeaderComponent) header: WizardHeaderComponent;
  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;
  @Input() wizardContext: object;
  @Output() wizardCompleted: EventEmitter<object> = new EventEmitter<object>();
  stepSubscription: Subscription;
  activeStep: number;
  @Input() headerLabel: string;
  constructor(public WizardService: WizardService) { }

  ngOnInit() {
    this.activeStep = 0;
    this.stepSubscription = this.WizardService.changeStep.subscribe((wizardAction) => this.ChangeStep(wizardAction));
  }

  ngAfterContentInit() {
    this.activateStep(this.steps.toArray(), this.activeStep)

  }
  ngOnDestory() {
    this.stepSubscription.unsubscribe();
  }

  ChangeStep(wizardAction) {
    if (WizardAction.Prev == wizardAction) {
      this.activeStep = this.activeStep == 0 ? this.activeStep : this.activeStep - 1
      this.WizardService.setActiveStep(this.activeStep);
      this.WizardService.changeProgress.next(this.activeStep);
    }
    else if (WizardAction.Next == wizardAction) {
      this.activeStep = this.activeStep + 1

      if (this.activeStep === this.steps.length) {
        this.wizardCompleted.emit(this.wizardContext);
      }
      this.WizardService.setActiveStep(this.activeStep);
      this.WizardService.changeProgress.next(this.activeStep);


    }
    this.activateStep(this.steps.toArray(), this.activeStep)
  }

  activateStep(wizardStepContents: WizardStepComponent[], activeindex) {
    for (let i = 0; i < wizardStepContents.length; i++) {
      if (i == activeindex) {
        wizardStepContents[i].active = true;
      }
      else {
        wizardStepContents[i].active = false;
      }
    }
  }


  isItDone() {
    return this.WizardService.getActiveStep() == this.steps.length;
  }

}
