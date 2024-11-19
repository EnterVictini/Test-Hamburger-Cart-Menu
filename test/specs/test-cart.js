import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js' 
import SecurePage from '../pageobjects/secure.page.js'
import hamburgerMenu from '../pageobjects/hamburgermenu.js'
import MyCart from '../pageobjects/test-cart.js'

describe('Cart Button ', () => {
    it('walkthrough test!', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

        /** await MyCart.CartTest(); */
        
        let count = 0;
        const maxRuns = 10; 

        while (count < maxRuns) {
        console.log(`Running iteration ${count + 1}`);
        await MyCart.CartTest();
        count++; 
        }
    })
})