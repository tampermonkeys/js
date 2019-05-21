// ==UserScript==
// @name         CSDN Fucker
// @namespace    https://github.com/tampermonkeys/tampermonkey/
// @version      0.1
// @description  try to take over the world!
// @author       おばさんは铁道を洗います
// @match        *://blog.csdn.net/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/src/core.min.js
// ==/UserScript==

(function() {
    'use strict';
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    $('.pulllog-box').remove();
    // Your code here...
})();