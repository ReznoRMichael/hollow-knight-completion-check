// Cookie Consent https://github.com/osano/cookieconsent
import CC from "./cookieconsent.min.js";

const cc = new CC({
    //...options,
    palette: {
        popup: {
            background: "#3c404d",
            text: "#d6d6d6"
        },
        button: {
            background: "#3e6d8c",
            text: "#d9f3ff"
        }
    },
    theme: "edgeless",
    type: "opt-in",
    content: {
        message: "This website uses cookies for Google Analytics, for pure statistics purposes.",
        dismiss: 'Got it!',
        allow: 'Allow cookies',
        deny: 'Decline',
        link: 'Learn more',
        href: 'https://www.cookiesandyou.com',
        close: '&#x274c;',
        policy: 'Cookie Policy',
        target: '_blank',
    }
});

// cc.on("initialized", (...args) => console.log(args));
cc.on("initialized", (...args) => {
    console.log(args);

    let type = this.options.type;
    let didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
        // enable cookies
    }
    if (type == 'opt-out' && !didConsent) {
        // disable cookies
    }
});

cc.on("revokeChoice", () => {
    console.log("Popup Reset");

    var type = this.options.type;
    if (type == 'opt-in') {
        // disable cookies
    }
    if (type == 'opt-out') {
        // enable cookies
    }
});

cc.on("statusChanged", (...args) => {
    console.log(args);

    let type = this.options.type;
    let didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
        // enable cookies
    }
    if (type == 'opt-out' && !didConsent) {
        // disable cookies
    }
});

cc.on("error", console.error);
cc.on("popupOpened", () => console.log("Popup Open"));
cc.on("popupClosed", () => console.log("Popup Closed"));