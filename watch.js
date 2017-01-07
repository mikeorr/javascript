"use strict";

// moment = require("moment");

var stopwatch_start = null;
var timer = null;

var update = function (id, value, value1) {
    console.log(value === value1)
    if (value !== value1) {
        document.getElementById(id).innerHTML = value;
    }
}

var tick = function() {
    var now = moment();
    var hours_minutes = now.format("h:mm")
    var seconds = now.format("ss")
    var ampm = now.format("a")
    var date = now.format("dddd, MMMM D, YYYY")
    update("hours-minutes", hours_minutes, null);
    update("seconds", seconds, null);
    update("ampm", ampm, null);
    update("date", date, null);
}

var init = function() {
    tick();
    timer = window.setInterval(tick, 500);
}

window.addEventListener("load", init);
