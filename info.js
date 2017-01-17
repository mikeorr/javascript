"use strict";

// moment = require("moment");

const get_element = document.getElementById.bind(document)

function refresh() {
    // Window
    get_element("window-name").innerHTML = window.name;
    get_element("window-innerHeight").innerHTML = window.innerHeight;
    get_element("window-innerWidth").innerHTML = window.innerWidth;
    get_element("window-history-length").innerHTML = window.window.history.length;

    // Screen
    get_element("screen-height").innerHTML = window.screen.height;
    get_element("screen-width").innerHTML = window.screen.width;
    get_element("screen-colorDepth").innerHTML = window.screen.colorDepth;
    get_element("screen-pixelDepth").innerHTML = window.screen.pixelDepth;

    // Navigator
    get_element("navigator-appCodeName").innerHTML = window.navigator.appCodeName;
    get_element("navigator-appName").innerHTML = window.navigator.appName;
    get_element("navigator-appVersion").innerHTML = window.navigator.appVersion;
    get_element("navigator-cookieEnabled").innerHTML = window.navigator.cookieEnabled;
    get_element("navigator-language").innerHTML = window.navigator.language;
    get_element("navigator-onLine").innerHTML = window.navigator.onLine;
    get_element("navigator-platform").innerHTML = window.navigator.platform;
    get_element("navigator-product").innerHTML = window.navigator.product;
    get_element("navigator-userAgent").innerHTML = window.navigator.userAgent;
    get_element("navigator-javaEnabled").innerHTML = window.navigator.javaEnabled();

}

function init() {
    refresh();
    }

window.addEventListener("load", init);
