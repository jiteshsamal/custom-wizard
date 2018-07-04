import { Injectable } from '@angular/core';
import { ShippingLabel } from '../models/shippingLabel';
import { Subject } from 'rxjs'
import { ShippingOption } from '../models/ShippingOption';



@Injectable()
export class AppService {
    wizardData: ShippingLabel;
    wizardCompleted: Subject<ShippingLabel> = new Subject<ShippingLabel>();
    shippingOptions: ShippingOption[] = [{ 'id': '1', 'value': 'Ground' }, { 'id': '2', 'value': 'Priority' }];
    shippingRate = 0.40;
    constructor() {
        this.wizardData = new ShippingLabel();
    }

    getInitialData() {
        return this.wizardData;
    }

    authenticateUser(userName, password) {
        console.log(userName);
        var authenticatePromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                if (userName && password)
                    resolve(true)
                else
                    reject(false)
            }, 500)
        })
        return authenticatePromise;
    }

    getShippingOptions() {
        return this.shippingOptions;
    }

    calculateCost(shippingLabel: ShippingLabel) {
        return (shippingLabel.weight * this.shippingRate * (shippingLabel.shippingOption === '1' ? 1 : 1.5)).toFixed(2);
    }




}