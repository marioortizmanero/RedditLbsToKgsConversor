// ==UserScript==
// @name         Reddit Unit Converter
// @version      0.4
// @description  Converts lbs to kgs
// @author       Mario O.M.
// @namespace    https://github.com/marioortizmanero/RedditLbsToKgsConverter
// @match        *://*.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    /*
     * You can change the matches below to something like '*://*.reddit.com/Brogress/*' to
     * only use it on your preferred subreddits. Just keep adding match tags for every
     * subreddit you want to use it on.
     *
     * Change 'round' below to 'true' if you prefer a double decimal result like '25.83'
     * instead of '26'.
     *
     * Change 'reverse' to 'true' if you want to convert from kgs to lbs instead.
     *
    */
    'use strict';
    const reverseConverter = false;
    const round = false;

    const lbsToKgRegex = /(\d*)\s?(lbs|pounds)/g;
    const kgToLbsRegex = /(\d*)\s?(kg|kgs|kilograms)/g;
    const lbsToKgsDivision = 2.205;

    var comments = document.querySelectorAll("p");
    var titles = document.querySelectorAll("h2");

    // Modifies the numbers and units
    function lbsToKg(match,p1,p2) {
        p2 = "kg";
        p1 = round ? Math.round(p1/lbsToKgsDivision*100)/100 : Math.round(p1/lbsToKgsDivision);
        return [p1,p2].join("");
    }

    function kgToLbs(match,p1,p2) {
        p2 = "lbs";
        p1 = round ? Math.round(p1*lbsToKgsDivision*100)/100 : Math.round(p1*lbsToKgsDivision);
        return [p1,p2].join("");
    }

    // Regex expressions:
    for (var i=0;i<titles.length; i++) {
        if(reverseConverter) {
            titles[i].innerHTML = titles[i].innerHTML.replace(kgToLbsRegex, kgToLbs);
        } else {
            titles[i].innerHTML = titles[i].innerHTML.replace(lbsToKgRegex, lbsToKg);
        }
    }
    for (var j=0;j<comments.length; j++) {
        if(reverseConverter) {
            comments[j].innerHTML = comments[j].innerHTML.replace(kgToLbsRegex, kgToLbs);
        } else {
            comments[j].innerHTML = comments[j].innerHTML.replace(lbsToKgRegex, lbsToKg);
        }
    }
})();
