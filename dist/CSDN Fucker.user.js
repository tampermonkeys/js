// ==UserScript==
// @name         CSDN Fucker
// @namespace    https://github.com/tampermonkeys/tampermonkey/
// @version      0.12
// @description  try to take over the world!
// @author       おばさんは铁道を洗います
// @match        *://*.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    $('.pulllog-box').remove();
    // Your code here...
})();