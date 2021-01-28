/* eslint-disable no-undef */
// Temporarily disable the tracking for testing (set to false to enable Analytics)
window['ga-disable-UA-136831794-2'] = true;

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

// Default no consent to share cookie data
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
});

gtag('js', new Date());

gtag('config', 'UA-136831794-2');