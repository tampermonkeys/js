// ==UserScript==
// @name         Stackoverflow Fucker
// @namespace    https://github.com/tampermonkeys/tampermonkey/
// @version      0.1
// @description  try to take over the world!
// @author       おばさんは铁道を洗います
// @match        https://stackoverflow.com/questions/*
// @grant        none
// ==/UserScript==


var readcss=`
*{font-family:"Segoe UI","Microsoft YaHei UI" !important;color:rgba(248,248,242,.7) !important;background-color:#282a36 !important}#js-gdpr-consent-banner,#footer.site-footer,#post-form,#left-sidebar,#sidebar,.post-taglist,.post-taglist+.mb0,.post-text+.mb0,header.top-bar{display:none !important}body>.container{max-width:80%}body>.container #content{max-width:100%;width:100%;border:none}#mainbar h1,#mainbar h1>a,#mainbar h2,#mainbar h2>a,#mainbar h3,#mainbar h3>a,.mainbar h1,.mainbar h1>a,.mainbar h2,.mainbar h2>a,.mainbar h3,.mainbar h3>a,body h1,body h1>a,body h2,body h2>a,body h3,body h3>a{color:#bd93f9 !important;font-weight:400 !important}.post-text p{color:rgba(248,248,242,.6) !important}.post-text blockquote{border-left:5px #44475a solid;background-color:rgba(0,0,0,.15) !important}.post-text blockquote>p{color:#6272a4 !important;background-color:transparent !important}.post-text blockquote>p code{background-color:transparent !important}.post-text p a{color:rgba(189,147,249,.5) !important;font-style:italic !important;letter-spacing:.2px !important;margin:0 .5rem;text-decoration:none !important;border-bottom:1px dashed rgba(189,147,249,.3)}.post-text>p>code,.post-text blockquote>p>code,.post-text p a>code{color:#f55 !important;background-color:rgba(0,0,0,.15) !important;font-family:"Fira Code Retina",Consolas !important;font-size:1rem !important;text-shadow:0 1px 1px rgba(0,0,0,.15);font-style:normal !important}.post-text>pre{background-color:rgba(0,0,0,.15) !important}.post-text>pre>code,.post-text>pre>code>span{background-color:transparent !important}code{background-color:transparent !important;font-family:"Fira Code Retina",Consolas !important}code span.kwd{color:#bd93f9 !important}code span.typ{color:#d3d7e5 !important}code span.pun{color:#d3d7e5 !important}code span.com{color:#696e8e !important;font-family:"Segoe UI","Microsoft YaHei UI" !important;font-style:italic !important}code span.pln{min-width:.5rem;color:#d3d7e5 !important}code span{letter-spacing:.2px !important;text-shadow:0 1px 1px rgba(0,0,0,.15)}.post-text code,.wmd-preview code{font-size:1.2rem !important}.js-comments-container{padding-left:5rem;border:0}.js-comments-container ul.comments-list{display:flex !important;flex-flow:column}.js-comments-container ul.comments-list,.js-comments-container ul.comments-list *:not(code){background-color:#21232d !important}.js-comments-container ul.comments-list>li.comment{display:list-item}.js-comments-container ul.comments-list>li.comment+li{border-top:1px solid #282a36 !important;margin-top:.75rem;padding-top:.75rem}.js-comments-container ul.comments-list>li.comment>.comment-actions{display:none}.js-comments-container ul.comments-list>li.comment>.comment-text{border-bottom:0}.js-comments-container ul.comments-list>li.comment>.comment-text .comment-body,.js-comments-container ul.comments-list>li.comment>.comment-text .comment-body span{color:rgba(248,248,242,.5) !important;font-size:1rem !important}.js-comments-container ul.comments-list>li.comment>.comment-text .comment-body code{color:#f55 !important;background-color:rgba(0,0,0,.15) !important;font-family:"Fira Code Retina",Consolas !important;font-size:1rem !important;text-shadow:0 1px 1px rgba(0,0,0,.15);font-style:normal !important;font-size:1rem !important}.js-comments-container ul.comments-list>li.comment>.comment-text .comment-body a{color:rgba(189,147,249,.5) !important;font-style:italic !important;letter-spacing:.2px !important;margin:0 .5rem;text-decoration:none !important;border-bottom:1px dashed rgba(189,147,249,.3)}.js-comments-container .comment-user,.js-comments-container .comment-date{opacity:.6}
`;




(function() {
    'use strict';
    var style= document.createElement('style');
    style.innerHTML=readcss;
    document.head.append(style);
})();