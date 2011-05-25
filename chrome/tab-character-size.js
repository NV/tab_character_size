chrome.extension.sendRequest({}, function replaceTabs(response) {
	var REPLACEMENT = response.replacement || '  ';

	function replaceTabsInElement(element) {
		var pre_elements = element.getElementsByTagName('pre');
		for (var i = 0; i < pre_elements.length; i++) {
			var no_tabs = pre_elements[i].innerHTML.replace(/\t/g, REPLACEMENT);
			if (pre_elements[i].innerHTML != no_tabs) {
				pre_elements[i].innerHTML = no_tabs;
			}
		}
	}

	replaceTabsInElement(document.body);

	document.body.addEventListener("DOMNodeInserted", function(e) {
		replaceTabsInElement(e.target);
	}, false);
});
