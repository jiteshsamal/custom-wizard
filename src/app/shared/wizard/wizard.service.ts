import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'


@Injectable()
export class WizardService {
    changeStep = new Subject();
    changeProgress = new Subject();
    activeStep: number = 0

    clickedButton(action) {
        return this.changeStep.next(action);
    }

    checkProgressBarstatus(activestep) {
        this.changeProgress.next(activestep)
    }

    setActiveStep(step) {
        this.activeStep = step;
    }
    getActiveStep() {
        return this.activeStep;
    }
}