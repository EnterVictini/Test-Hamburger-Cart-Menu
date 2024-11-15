import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

class MyCart extends Page {
    get cartBtn () {
        return $('a[class="shopping_cart_link"]');
    }

    get hamburgerMenu () {
        return $('button[id="react-burger-menu-btn"]');
    }

    get allItems () {
        return $('a[id="inventory_sidebar_link"]');
    }
   
    get addtoCart () {
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    
    /** get cartBtn () {
        return $('a[class="shopping_cart_link"]');
    } */

    get RemoveFrmCrt () {
        return $('button[data-test="remove-sauce-labs-backpack"]')
    }

    get ContShopping () {
        return $('button[id="continue-shopping"]')
    }

    /** get addtoCart () {
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]');
    } 
    
    get cartBtn () {
        return $('a[class="shopping_cart_link"]');
    } */

    get ChckOut () {
        return $('button[data-test="checkout"]')
    }

    get Firstname () {
        return $('input[data-test="firstName"]')
    }

    get Lastname () {
        return $('input[data-test="lastName"]')
    }

    get Zip () {
        return $('intup[data-test="postalCode"]')
    }
    
    
    async shipngInfo (Firstname, Lastname, Zip) {
        await this.inputFirstname.setValue(Firstname);
        await this.inputLastname.setValue(Lastname);
        await this.inputZip.setValue(Zip);
        await this.btnContinue.click();
    }

    async Menu () {
        await this.hamburgerMenu.click();
        await this.closeButton.click();
        await this.hamburgerMenu.click();
        await this.allItems.click();
        await this.about.click();
        await browser.back();
        await this.hamburgerMenu.click();
        await this.logOut.click();
        
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    open () {
        return super.open();
    }
}

export default new hamburgerMenu();