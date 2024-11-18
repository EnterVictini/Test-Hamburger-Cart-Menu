import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import hamburgerMenu from '../pageobjects/hamburgermenu.js'

describe('Hamburger Menu ', () => {
    it('all buttons should work', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))

            await hamburgerMenu.Menu();

            await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.productPage).toBeExisting()
        await expect(SecurePage.productPage).toHaveText(
            expect.stringContaining('Swag Labs'))
            
    
    })
})