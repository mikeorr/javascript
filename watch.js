"use strict";

// moment = require("moment");

class Clock {
    constructor () {
        this.fmt_hours_minutes = null;
        this.fmt_seconds = null;
        this.fmt_ampm = null;
        this.fmt_date = null;
        this.last_monent = null;
        this.military = false;
        this.unix = null;
    }
}


class Stopwatch {
    constructor () {
        this.run = false;
        this.split = false;
        this.start = false;
        this.fmt_time = null;
    }
}


const clock = new Clock();
const stopwatch = new Stopwatch();
const get_element = document.getElementById.bind(document)

let timer = null;


function tick(refresh_all=false) {
    let now, changed, fmt_hours_minutes, fmt_seconds, fmt_ampm, fmt_date;
    now = moment();
    changed = (
        refresh_all ||
        clock.last_moment == null ||
        !now.isSame(clock.last_moment, "second")
        );
    // console.log("Clock changed = %s", changed);
    if (!changed) {
        return;
    }
    // console.log("Updating clock display.");
    clock.last_moment = now;
    if (clock.military) {
        fmt_hours_minutes = now.format("H:mm");
        fmt_ampm = "";
    } else {
        fmt_hours_minutes = now.format("h:mm");
        fmt_ampm = now.format("a");
    }
    fmt_seconds = now.format("ss");
    fmt_date = now.format("dddd, MMMM D, YYYY");
    if (refresh_all || fmt_hours_minutes != clock.fmt_hours_minutes) {
        get_element("hours-minutes").innerHTML = fmt_hours_minutes;
        clock.fmt_hours_minutes = fmt_hours_minutes;
    }
    if (refresh_all || fmt_seconds != clock.fmt_seconds) {
        get_element("seconds").innerHTML = fmt_seconds;
        clock.fmt_seconds = fmt_seconds;
    }
    if (refresh_all || fmt_ampm != clock.fmt_ampm) {
        get_element("ampm").innerHTML = fmt_ampm;
        clock.fmt_ampm = fmt_ampm;
    }
    if (refresh_all || fmt_date != clock.fmt_date) {
        get_element("date").innerHTML = fmt_date;
        clock.fmt_date = fmt_date;
    }
    if (stopwatch.run) {
    }
}

function init() {
    tick(true);
    timer = window.setInterval(tick, 500);
}

function onclick_24hour(event) {
    // 'event.target' and 'this' are the checkbox.
    clock.military = event.target.checked;
    tick(true);
}

window.addEventListener("load", init);
get_element("24hour").addEventListener("click", onclick_24hour);
