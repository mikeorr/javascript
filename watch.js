"use strict";

// moment = require("moment");

var stopwatch_start = null;
var timer = null;

var tick = function() {
    var now = moment();
    var hours_minutes = now.format("h:mm")
    var seconds = now.format("ss")
    var ampm = now.format("a")
    var date = now.format("dddd, MMMM D, YYYY")
    document.getElementById("hours-minutes").innerHTML = hours_minutes
    document.getElementById("seconds").innerHTML = seconds
    document.getElementById("ampm").innerHTML = ampm
    document.getElementById("date").innerHTML = date
    }

var init = function() {
    tick();
    timer = window.setInterval(tick, 500);
    }

window.addEventListener("load", init);
