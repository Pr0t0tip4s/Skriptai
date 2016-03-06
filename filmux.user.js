// ==UserScript==
// @name        filmux.org
// @namespace   nemokami filmai
// @include     http://filmux.org/*
// @include     http://www.filmux.org/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     1
// @grant       GM_addStyle 
// ==/UserScript==


$("noindex").remove();
$("noscript").remove();


GM_addStyle(' #blockblockA { display: none !important;  } ');
GM_addStyle(' #blockblockB { display: block !important;  } ');
