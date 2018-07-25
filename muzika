// ==UserScript==
// @name         Skriptinam muzika
// @namespace    http://tampermonkey.net/
// @version      0.2.1a
// @description  Bad Boy!
// @author       Paulius Zebelys
// @match        https://www.pakartot.lt/*
// @grant       GM_addStyle
// ==/UserScript==

/*Pridedam paslepta valdikli*/
$("audio").attr( "controls", "" );
$("audio").attr( "id", "id-stiliukas" );

/*stiliu pakoregavimas*/
GM_addStyle(" #id-stiliukas { width: 100%; z-index: 9999; position: relative; margin-top: 50px; } #jp-slide { display: none; } .jp-time { display: none; } ");
