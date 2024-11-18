import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */

    get productPage () {
        return $('.app_logo');
    }
    get errorpupup () {
        return $('button[class="error-button"]');
    }
    get shippingPge () {
        return $('div[class="checkout_info"]')
    }

}

export default new SecurePage();
