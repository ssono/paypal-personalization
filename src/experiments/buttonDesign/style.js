/* @flow */
import { divideLogoAnimationStyle } from './designs/divideLogoAnimation';
export const style = ({ personalization } : {| personalization : {| text : string, tracking : {| impression : string, click : string |} |} |}) : string => {
    return divideLogoAnimationStyle();
};
