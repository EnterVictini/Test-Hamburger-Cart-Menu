import { $ } from '@wdio/globals'
import Page from './page.js';


class ShippingInfo extends Page {
    get Firstname () {
        return $('input[data-test="firstName"]')
    }

    get Lastname () {
        return $('input[data-test="lastName"]')
    }

    get Zip () {
        return $('intup[data-test="postalCode"]')
    }

    get Continuebtn () {
        return $('input[type="submit"]')
    }

   


    async info (Firstname, Lastname, Zip) {
        await this.Firstname.setValue(Firstname);
        await this.Lastname.setValue(Lastname);
        await this.Zip.setValue(Zip);
        await this.Continuebtn.click();
        
    }

    open () {
        return super.open();
    }
}

export default new ShippingInfo(); 