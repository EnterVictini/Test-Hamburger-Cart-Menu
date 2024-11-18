import { $ } from '@wdio/globals'
import Page from './page.js';


class ShippingInfo extends Page {
    get firstName () {
        return $('[name="firstName"]')
    }

    get lastName () {
        return $('input[data-test="lastName"]')
    }

    get Zip () {
        return $('intup[data-test="postalCode"]')
    }

    get Continuebtn () {
        return $('input[type="submit"]')
    }

   


    async info (firstName, lastName, Zip) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.Zip.setValue(Zip);
        await this.Continuebtn.click();
    }

    open () {
        return super.open();
    }
}

export default new ShippingInfo(); 