"use strict";

// moment = require("moment");

class Clock {
    constructor () {
        this.fmt_hours_minutes = null;
        this.fmt_seconds = null;
        this.fmt_ampm = null;
        this.fmt_date = null;
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

function update (id, value, value1) {
    if (value !== value1) {
        deid(id).innerHTML = value;
    }
}

function tick () {
    const now = moment();
    const fmt_hours_minutes = now.format("h:mm");
    const fmt_seconds = now.format("ss");
    const fmt_ampm = now.format("a");
    const fmt_date = now.format("dddd, MMMM D, YYYY");
    if (fmt_hours_minutes != clock.fmt_hours_minutes) {
        get_element("hours-minutes").innerHTML = fmt_hours_minutes;
        clock.fmt_hours_minutes = fmt_hours_minutes;
    }
    if (fmt_seconds != clock.fmt_seconds) {
        get_element("seconds").innerHTML = fmt_seconds;
        clock.fmt_seconds = fmt_seconds;
    }
    if (fmt_ampm != clock.fmt_ampm) {
        get_element("ampm").innerHTML = fmt_ampm;
        clock.fmt_ampm = fmt_ampm;
    }
    if (fmt_date != clock.fmt_date) {
        get_element("date").innerHTML = fmt_date;
        clock.fmt_date = fmt_date;
    }
    if (stopwatch.run) {
    }
}

function init() {
    tick();
    timer = window.setInterval(tick, 500);
}

window.addEventListener("load", init);
