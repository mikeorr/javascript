"use strict";

// moment = require("moment");

var clock = {
    hours_minutes: null,
    hours_minutes1: null,
    seconds: null,
    seconds1: null,
    ampm: null,
    ampm1: null,
    date: null,
    date1: null
    };

var stopwatch = {
    run: false,
    time: 0,
    time1: 0
    };

var timer = null;

var update = function (id, value, value1) {
    if (value !== value1) {
        document.getElementById(id).innerHTML = value;
    }
}

var tick = function() {
    var now = moment();
    clock.hours_minutes = now.format("h:mm");
    clock.seconds = now.format("ss");
    clock.ampm = now.format("a");
    clock.date = now.format("dddd, MMMM D, YYYY");
    update("hours-minutes", clock.hours_minutes, clock.hours_minutes1);
    update("seconds", clock.seconds, clock.seconds1);
    update("ampm", clock.ampm, clock.ampm1);
    update("date", clock.date, clock.date1);
    clock.hours_minutes1 = clock.hours_minutes;
    clock.seconds1 = clock.seconds;
    clock.ampm1 = clock.ampm;
    clock.date1 = clock.date;
}

var init = function() {
    tick();
    timer = window.setInterval(tick, 500);
}

window.addEventListener("load", init);
