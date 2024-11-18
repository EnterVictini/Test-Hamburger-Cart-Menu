import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import hamburgerMenu from '../pageobjects/hamburgermenu.js'
import ShippingInfo from './ShippingInfo.js';
/** import ShippingInfo from './ShippingInfo.js'; */

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

    get RemoveFrmCrt () {
        return $('button[data-test="remove-sauce-labs-backpack"]')
    }

    get ContShopping () {
        return $('button[id="continue-shopping"]')
    }

    get removebtn () {
        return $('button[data-test="remove-sauce-labs-backpack"]')
    }

    get CheckOut () {
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

    get Continuebtn () {
        return $('input[type="submit"]')
    }
    
    get finishBtn () {
        return $('button[data-test="finish"]')
    }
    
    get backHome() {
        return $('button[data-test="back-to-products"]')
    }

    get closeButton () {
        return $('button[id="react-burger-cross-btn"]')
    }

    get addtoCart2 () {
        return $('button[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    get addtoCart3 () {
        return $('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    get addtoCart4 () {
        return $('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    }

    get addtoCart5 () {
        return $('button[data-test="add-to-cart-sauce-labs-onesie"]')
    }

    get addtoCart6 () {
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }

    async CartTest () {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce')
        /** await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
        
        await this.hamburgerMenu.click();
        await this.allItems.click();
        await this.closeButton.click();
        */
        await this.addtoCart.click();
        await this.addtoCart2.click();
        await this.addtoCart3.click();
        await this.addtoCart4.click();
        await this.addtoCart5.click();
        await this.addtoCart6.click();
        await this.cartBtn.click();
        await this.RemoveFrmCrt.click();
        await this.ContShopping.click();
        await this.addtoCart.click();
        await this.removebtn.click();
        await this.addtoCart.click();
        await this.cartBtn.click();
        await this.CheckOut.click();
        
        await ShippingInfo.open();
        const firstNameInput = await $('//input[@name="firstName"]');
        await firstNameInput.waitForExist({ timeout: 5000 }); // Wait up to 5 seconds
        await firstNameInput.setValue('Scott');
        const lastNameInput = await $('input[data-test="lastName"]');
        await lastNameInput.waitForExist({ timeout: 5000 }); // Wait up to 5 seconds
        await lastNameInput.setValue('Scottson');
        const ZipInput = await $('intup[data-test="postalCode"]');
        await ZipInput.waitForExist({ timeout: 5000 }); // Wait up to 5 seconds
        await ZipInput.setValue('42096');
        
        /** await ShippingInfo.info('Scott', 'Scottson', '42096')
        await expect(SecurePage.shippingPge).toBeExisting() 
        await expect(SecurePage.shippingPge).toHaveText(
            expect.stringContaining('Swag Labs')) */
        await this.btnContinue.click();
        await this.finishBtn.click();
        await this.backHome.click();
    }

    open () {
        return super.open();
    }
}

export default new MyCart();