var getAllScripts = function (url) {
    return [
        url + "/inline.bundle.js",
        url + "/polyfills.bundle.js",
        url + "/styles.bundle.js",
        url + "/vendor.bundle.js",
        url + "/main.bundle.js"
    ];
};

// call getAllScripts('https://2ea3343b.ap.ngrok.io');

function loadScript(allScripts) {
    const script = allScripts.shift();
    if (!script) return;
    var js = document.createElement('script');
    js.type='text/javascript';
    js.src = script;
    js.onload = function(e) {
        loadScript(allScripts);
    };
    const body = document.body;
    body.parentNode.insertBefore(js, body);
}

function loadAngularScriptInOrderFrom(url) {
    var allScripts = getAllScripts(url);
    loadScript(allScripts);
}

// call loadAngularScriptInOrderFrom('https://220c449c.ap.ngrok.io');