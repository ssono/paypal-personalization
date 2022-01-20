/* @flow */

import { getActualDomain } from 'cross-domain-utils/src';

import { URI } from './config';

function getPayPalDomain() : string {
    return __PAYPAL_DOMAIN__;
}

export function buildPayPalUrl(path : string = '') : string {
    const domain = 'https://localhost.paypal.com:8443';
    return (__TEST__ && __WEB__)
        ? `${ domain }${ path }`
        : `${ domain }${ path }`;
}

export function getPayPalLoggerUrl() : string {
    return buildPayPalUrl(URI.LOGGER);
}
