import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Observable, Subject, Subscription } from 'rxjs'
import { WizardAction } from '../wizardActions';
import { WizardData } from '../wizardData'

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit, WizardData {

  @Input('wizardStepTitle') wizardStepTitle: string;
  @Input('context') context: object;
  @Output() actionClicked = new EventEmitter();
  active: boolean;
  activeStep: number;
  stepSubscription: Subscription

  constructor(public WizardService: WizardService) { }

  ngOnInit() {
  }
  onAction(action) {
    if (action == 'next') {
      this.WizardService.changeStep.next(WizardAction.Next)
    }
    else if (action == 'prev')
      this.WizardService.changeStep.next(WizardAction.Prev)
  }

  isItDone() {
    return this.WizardService.getActiveStep() == 4;
  }


}






