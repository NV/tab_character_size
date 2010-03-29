chrome.extension.sendRequest({}, function replaceTabs(response) {
	var REPLACEMENT = response.replacement || '  ';
	var pre_elements = document.body.getElementsByTagName('pre');
	for (var i = 0; i < pre_elements.length; i++) {
		var no_tabs = pre_elements[i].innerHTML.replace(/\t/g, REPLACEMENT);
		if (pre_elements[i].innerHTML != no_tabs) {
			pre_elements[i].innerHTML = no_tabs;
		}
	}
});