// ==UserScript==
// @name        filmux.org
// @namespace   http://gist.github.com/
// @include     http://filmux.org/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     1
// @grant       GM_addStyle 
// ==/UserScript==


$("noindex").remove();

waitForKeyElements('#bb6a', blockas);

function blockas() {
  $('#bb6a').hide();
  $("#bb6a").remove();
}

GM_addStyle(' #bb6a { display: none !important;  } ');
