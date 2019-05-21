// ==UserScript==
// @name         CSDN Fucker
// @namespace    https://github.com/tampermonkeys/tampermonkey/
// @version      0.1
// @description  try to take over the world!
// @author       おばさんは铁道を洗います
// @match        *://blog.csdn.net/*
// @grant        none
// @require      https://csdnimg.cn/public/common/libs/jquery/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    $('.pulllog-box').remove();
    // Your code here...
})();