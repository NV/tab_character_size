// ==UserScript==
// @name          Tab size
// @namespace     http://nv.github.com/tab-size.js/
// @include       *
// @description   Replace all tab characters with two spaces (or something else)
// @version       1.0
// @icon          http://userscripts.ru/js/tab-character-size/chrome/icon_48.png
// ==/UserScript==

var REPLACEMENT = '  ';
if (typeof GM_getValue === 'function') {
	REPLACEMENT = GM_getValue('tab_replacement') || REPLACEMENT;
}

function replaceTabsInElement(element) {
	var pre_elements = element.getElementsByTagName('pre');

	for (var i=0; i<pre_elements.length; i++) {
		var no_tabs = pre_elements[i].innerHTML.replace(/\t/g, REPLACEMENT);
		if (pre_elements[i].innerHTML != no_tabs) {
			pre_elements[i].innerHTML = no_tabs;
		}
	}
}

replaceTabsInElement(document.body);

// Will not work in IE < 9
document.body.addEventListener("DOMNodeInserted", function(e) {
	replaceTabsInElement(e.target);
}, false);

if (typeof GM_registerMenuCommand === 'function') {
	GM_registerMenuCommand('Change tab size...', function setTabReplacement(value){
		GM_setValue('tab_replacement', prompt('Replace tabs with', REPLACEMENT));
	});
}
