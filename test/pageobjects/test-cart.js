import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import hamburgerMenu from '../pageobjects/hamburgermenu.js'

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

    get ContShopping () {
        return $('button[id="continue-shopping"]')
    }

    get removeBackpack () {
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

    get removeBikeLight () {
        return $('button[data-test="remove-sauce-labs-bike-light"]')
    }

    get removeTshirt () {
        return $('button[data-test="remove-sauce-labs-bolt-t-shirt"]')
    }

    get removeFleeceJacket () {
        return $('button[data-test="remove-sauce-labs-fleece-jacket"]')
    }

    get removeOnsie () {
        return $('button[data-test="remove-sauce-labs-onesie"]')
    }

    get removeTshirtRed () {
        return $('button[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    }

    async CartTest () {
        await this.addtoCart.click();
        await this.addtoCart2.click();
        await this.addtoCart3.click();
        await this.addtoCart4.click();
        await this.addtoCart5.click();
        await this.addtoCart6.click();
        const element = await $('span[data-test="shopping-cart-badge"]');
        expect(await element.getText()).toBe('6');
        await this.cartBtn.click();
        await this.removeBackpack.click();
        await this.removeBikeLight.click();
        await this.removeTshirt.click();
        await this.removeFleeceJacket.click();
        await this.removeOnsie.click();
        await this.removeTshirtRed.click();
        await this.ContShopping.click();
    }

    open () {
        return super.open();
    }
}

export default new MyCart();