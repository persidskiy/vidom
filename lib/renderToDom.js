var domAttrSetter = require('./domAttrsMutators');

function render(node) {
    var res;

    if('text' in node) {
        res = document.createTextNode(node.text);
    }
    else {
        res = node.ns?
            document.createElementNS(node.ns, node.tag) :
            document.createElement(node.tag);

        var name, value;
        for(name in node.attrs) {
            (value = node.attrs[name]) != null && domAttrSetter(name).set(res, name, node.attrs[name]);
        }

        var children = node.children;
        if(children) {
            var i = 0,
                len = children.length;
            while(i < len) {
                res.appendChild(render(children[i++]));
            }
        }
    }

    return res;
}

module.exports = render;