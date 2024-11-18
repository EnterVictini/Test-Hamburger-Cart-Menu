/** import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js' 
import SecurePage from '../pageobjects/secure.page.js'
import hamburgerMenu from '../pageobjects/hamburgermenu.js' */
import MyCart from '../pageobjects/test-cart.js'
/** import ShippingInfo from './ShippingInfo.js' */

describe('Cart Button ', () => {
    it('walkthrough test!', async () => {
        await MyCart.CartTest();

    })
})