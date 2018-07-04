import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ShippingLabel } from '../models/shippingLabel';
import { ShippingOption } from '../models/ShippingOption';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ShippingInfo: ShippingLabel
  shippingOptions: ShippingOption[] = [];
  hidewizard = false;
  shippingCost: string;
  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.ShippingInfo = this.appService.getInitialData();
    this.shippingOptions = this.appService.getShippingOptions();
  }

  wizardCompleted(selectedShippingInfo) {
    this.shippingCost = this.appService.calculateCost(selectedShippingInfo)
    this.hidewizard = true;
  }
}
