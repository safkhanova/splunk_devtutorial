"use strict";

import * as Splunk from './splunk_helpers.js'
import * as Config from './setup_configuration.js'

export async function perform(splunk_js_sdk, setup_options) {
    var app_name = "devtutorial";

    var application_name_space = {
        owner: "nobody",
        app: app_name,
        sharing: "app",
    };

    try {
        // Enter code to create the Splunk JS SDK Service object
        ;

        let { password, ...properties } = setup_options;

        var storagePasswords = service.storagePasswords();
 
        // Enter code to create a new secret
        
        await Config.complete_setup(service);

        await Config.reload_splunk_app(service, app_name);

        Config.redirect_to_splunk_app_homepage(app_name);
        } catch (error) {

        console.log('Error:', error);
        alert('Error:' + error);
    }
}
