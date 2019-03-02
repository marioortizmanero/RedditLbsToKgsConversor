// ==UserScript==
// @name         Reddit Unit Converter
// @version      0.3
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
    const lbsToKgsDivision = 2.205;
    const commentClassName = "md";
    const titleClassName = "title";
    const reverseConverter = true;
    const round = false;

    const lbsToKgRegex = /\d*\s?(lbs|pounds)/g;
    const kgToLbsRegex = /\d*\s?(kg|kgs|kilograms)/g;

    var comments = document.getElementsByClassName(commentClassName);
    var titles = document.getElementsByClassName(titleClassName);

    // Modifies the numbers and units
    function lbsToKg(match, p1, p2, string) {
        p1 = "kg";
        p2 = round ? Math.round(p2/lbsToKgsDivision*100)/100 : Math.round(p2/lbsToKgsDivision);
        return [p2, p1].join("");
    }

    function kgToLbs(match, p1, p2, string) {
        p1 = "lbs";
        p2 = round ? Math.round(p2*lbsToKgsDivision*100)/100 : Math.round(p2*lbsToKgsDivision);
        return [p2, p1].join("");
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
