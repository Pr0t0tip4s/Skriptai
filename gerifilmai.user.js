// ==UserScript==
// @name        gerifilmai.net - Kodo generatorius.
// @namespace   filmu sriptas
// @include     http://gerifilmai.net/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     v1.16.7
// Autorius: Paulius Žebelys
// @grant       GM_addStyle 
// ==/UserScript==

function tvarkomSerijas(i) {
  var t,
  o;
  t = document.getElementsByTagName('head') [0],
  t && (o = document.createElement('style'), o.type = 'text/css', o.innerHTML = i, t.appendChild(o))
}
function sNumeriai() {
  var i = $('div#cboxLoadedContent a:last').attr('id'),
  t = i.split('d').pop( - 1);
  elements = document.getElementsByClassName('myButton');
  for (var o = 1, a = 1; t >= a; a++) $('#playVid' + a).text().length ? ($('#playVid' + a).attr('onclick', 'buyVid(\'' + a + '\', \'\')'), $('#playVid' + a).attr('title', $('h1.news_t1').text() + ' #Kodas: ' + a))  : $('#playVid' + a).length && ($('#playVid' + a).attr('onclick', 'buyVid(\'' + a + '\', \'\')'), $('#playVid' + a).attr('title', $('h1.news_t1').text() + o + ' serija #Kodas: ' + a), $('#playVid' + a).text(o + ' serija'), o++)
}
$('.watch_movie').hide(),
$('.example6').show(),
unsafeWindow.sentInfo = function () {
},
unsafeWindow.buyVidCode = function () {
},
tvarkomSerijas('#cboxLoadedContent { max-width: 800px !important;  max-height: 478px !important; height: 450px !important; }'),
tvarkomSerijas('.myButton { border: 1px solid #ff0000 !important; padding: 1px 7px !important; }'),
tvarkomSerijas('#cboxContent, #cboxMiddleLeft, #cboxMiddleRight { max-height: 480px !important; }'),
tvarkomSerijas('#cboxWrapper { min-height: 260px !important;}'),
tvarkomSerijas('#colorbox { min-height: 268px !important; position: fixed !important; top: 28px !important; }'),
tvarkomSerijas('#cboxTitle { bottom: 0px !important; background-color: #fff !important; padding: 7px !important; font-weight: bold !important; }'),
$('.reit:first-child').append('                                                              <div class="Forma">                                                      <a href="javascript:void(0);" onclick=\'buyVidLang("0"); return false;\' id="informa"><img width="24px" id="pav2" src="http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/32/Folders-OS-Info-Metro-icon.png" title="Rodyti/Slėpti Informacija"></a>       <input type="number" class="Kodas" value="" min="1" max="1000" placeholder="#Kodas">        <a class="ziureti" href="javascript:void(0);" onclick=\'buyVid("0",""); return false;\'>Žiūrėti</a>        <a class="siustis" href="javascript:void(0);" onclick=\'buyDownVid("0",""); return false;\'>Siųstis</a>        <b id="pranesimas"></b>        <a href="javascript:void(0);" id="rodyti"><img width="22px" id="pav" src="http://icons.iconarchive.com/icons/sekkyumu/developpers/32/Add-icon.png" title="Rodyti/Slėpti Informacija"></a>       <hr class="skirtukas" style="display: none;">        <p class="inFo" style="display: none;">Filmų kodai prasideda nuo: 1 ir gali testis iki n, priklausomai keliomis kalbomis galima žiūrėti. <a href="javascript:void(0);" onclick=\'buyVidLang("0",""); return false;\'>Tikrinti</a></p>     </div>                                                                    '),
$('input.Kodas').keyup(function () {
  var i = $('.myButton').text(),
  t = $('.reit:last-child b').text(),
  o = $('h1.news_t1').text(),
  a = $(this).val();
  $.isNumeric(a) ? ($('#pranesimas').text('' != t ? ' ' + o + ' - ' + a + ' serija' : ' ' + o), $('.ziureti').show(), $('.ziureti').attr('onclick', 'buyVid(\'' + a + '\', \'\')'), $('.siustis').show(), $('.siustis').attr('onclick', 'buyDownVid(\'' + a + '\', \'\')'))  : ($('#pranesimas').text('' != t ? 'Įveskite serijos kodą kuria norite žiūrėti.' + i : 'Įveskite filmo kodą kurį norite žiūrėti.' + i), $('#pranesimas').show(), $('.ziureti').hide(), $('.siustis').hide())
}).keyup(),
$('.Forma').insertAfter($('.reit:first-child')),
$('#rodyti').click(function () {
  $('.inFo').slideToggle('500', function () {
    'block' == $('.inFo').css('display') ? ($('.skirtukas').show(), $('#pav').attr('src', 'http://icons.iconarchive.com/icons/sekkyumu/developpers/32/Remove-icon.png'))  : ($('.skirtukas').hide(), $('#pav').attr('src', 'http://icons.iconarchive.com/icons/sekkyumu/developpers/32/Add-icon.png'))
  })
}),
waitForKeyElements('#cboxLoadedContent', sNumeriai),
GM_addStyle(' .Forma {     text-align:left;     background: #101010;     margin: 5px 0px 5px 0px;     padding: 3px;     display: block-inline;     border: 1px solid #323232; } .Kodas {     width: 70px;     -moz-appearance: textfield;     background-color: #171717;     border: 1px solid #3C3C3C;    padding: 3px;    color: #ccc;    font-family: Verdana;    font-size: 12px;    font-weight: bold; }.ziureti, .siustis {     background-color: #2E2E2E;     color: #fff;     padding: 3px 5px;     font-size: 12px;    font-weight: bold;     border-radius: 2px;     box-shadow: inset 0 0 0 2px #4A4A4A; } .ziureti:hover{     box-shadow: inset 0 0 0 2px #8CC74C;      color: #8CC74C;     text-decoration: none; } .siustis:hover {     box-shadow: inset 0 0 0 2px #6FC3ED;      color: #6FC3ED;    text-decoration: none; }#pranesimas {     color: #6EE261;  } #pav:hover{    opacity: 0.8;}#pav2:hover{    opacity: 0.8;}#rodyti{     float: right; }#informa{     float: left;     margin-right: 3px; }hr {     width: 100%;     border: 0;     height: 1px;     background: #323232; }');
