import { Component, OnInit, Input } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Observable, Subject, Subscription } from 'rxjs'

@Component({
  selector: 'app-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.css']
})
export class WizardHeaderComponent implements OnInit {
  progressSubscription: Subscription
  @Input() label: string
  constructor(public WizardService: WizardService) { }
  areavalue = 0;
  ngOnInit() {
    this.progressSubscription = this.WizardService.changeProgress.subscribe((areaValue: number) => {
      this.areavalue = (areaValue / 4) * 100
    });
  }

  ngOnDestory() {
    this.progressSubscription.unsubscribe();
  }



}
