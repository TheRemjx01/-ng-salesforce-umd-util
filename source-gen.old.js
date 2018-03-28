function addScript(source, name) {
    var script = document.createElement('script');
    script.setAttribute('src', source);
    script.setAttribute('type', 'text/javascript');
    function callBack(name) {
        console.log('Script: ' + name + ' has been loaded');
    }
    script.onload = callBack(name);
    const body = document.body;
    body.parentNode.insertBefore(script, document);
}

function createScript(source, name) {
    var script = document.createElement('script');
    script.setAttribute('src', source);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('async', false);
    function callBack(name) {
        console.log('Script: ' + name + ' has been loaded');
    }
    script.onload = callBack(name);
    return script;
}



function loadAngularScript(url) {
    const inlineSrc = url + "/inline.bundle.js";
    const polyfillSrc = url + "/polyfills.bundle.js";
    const stylesSrc = url + "/styles.bundle.js";
    const vendorSrc = url + "/vendor.bundle.js";
    const mainSrc = url + "/main.bundle.js";
    const inlineScript = createScript(inlineSrc, 'inline');
    const polyfillScript = createScript(polyfillSrc, 'polyfill');
    const stylesScript = createScript(stylesSrc, 'styles');
    const vendorScript = createScript(vendorSrc, 'vendor');
    const mainScript = createScript(mainSrc, 'main');
    var allScripts = [inlineScript, polyfillScript, stylesScript, vendorScript, mainScript];
    // allScripts.reverse();
    console.log('All scripts: ', allScripts);
    const body = document.body;

    for(var i = 0; i < allScripts.length; i++) {
        body.appendChild(allScripts[i]);
    }
}

var allScripts = function (url) {
    return [
        url + "/inline.bundle.js",
        url + "/polyfills.bundle.js",
        url + "/styles.bundle.js",
        url + "/vendor.bundle.js",
        url + "/main.bundle.js"
    ];
}('https://2ea3343b.ap.ngrok.io');
function loadAngularScriptInOrder() {
    const script = allScripts.shift();
    if (!script) return;
    var js = document.createElement('script');
    js.type='text/javascript';
    js.src = script;
    js.onload = (e) => {
        loadAngularScriptInOrder();
    }
    const body = document.body;
    body.parentNode.insertBefore(js, body);
}
loadAngularScriptInOrder();