import CC from "CookieConsent";

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
        message: "This website uses cookies for Google Analytics, for pure statistics purposes."
    }
});

cc.on("initialized", (...args) => console.log(args));
cc.on("error", console.error);
cc.on("popupOpened", () => console.log("Popup Open"));
cc.on("popupClosed", () => console.log("Popup Closed"));
cc.on("revokeChoice", () => console.log("Popup Reset"));
cc.on("statusChanged", (...args) => console.log(args));