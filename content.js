var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Kanye West/gi, 'Chris Washington');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Kanye Omari West/gi, 'Chris Washington');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Donald Trump/gi, 'Fat Fascist');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Donald John Trump/gi, 'Fat Fascist');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/President Trump/gi, 'Fat Fascist');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
