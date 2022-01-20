/* @flow */

import { html } from './html';

export const script = ({ personalization } : {| personalization : {| text : string, tracking : {| impression : string, click : string |} |} |}) : string => {
    return `
        const taglineElement = document.querySelector('.paypal-button-tagline > .paypal-button-text');
        if (taglineElement) {
            taglineElement.innerHTML = "${ personalization.text }";

        }
    `;
};
