import { Address } from './address'

export class ShippingLabel {
    from: Address;
    to: Address;
    weight: number;
    shippingOption: string;

    constructor() {
        this.from = new Address();
        this.to = new Address();
        this.shippingOption = '';
    }
}