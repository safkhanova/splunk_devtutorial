"use strict";

var app_name = "./devtutorial";

require.config({
    paths: {
        myApp: "../app/" + app_name + "/javascript/views/app",
        react: "../app/" + app_name + "/javascript/vendor/react.production.min",
        ReactDOM: "../app/" + app_name + "/javascript/vendor/react-dom.production.min",
    },
    scriptType: "module",
});

// Enter require() method to render setup page logic into main container
;
