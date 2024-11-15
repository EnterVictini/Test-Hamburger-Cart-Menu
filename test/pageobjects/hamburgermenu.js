import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

class hamburgerMenu extends Page {
    get hamburgerMenu () {
        return $('button[id="react-burger-menu-btn"]');
    }

    get allItems () {
        return $('a[id="inventory_sidebar_link"]');
    }

    get about () {
        return $('a[id="about_sidebar_link"]');
    }
   
    get logOut () {
        return $('a[id="logout_sidebar_link"]');
    }

    get ResetAppState () {
        return $('a[id="reset_sidebar_link"]');
    }

    get closeButton () {
        return $('button[id="react-burger-cross-btn"]')
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