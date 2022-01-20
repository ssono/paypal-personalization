/* @flow */

import { html } from './html';
import { divideLogoAnimationScript } from './designs/divideLogoAnimation';

export const script = ({ personalization } : {| personalization : {| text : string, tracking : {| impression : string, click : string |} |} |}) : string => {   
    return divideLogoAnimationScript();
};
