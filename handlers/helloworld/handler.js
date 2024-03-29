'use strict';

var Alexa = require('alexa-sdk');

exports.helloworld = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    //alexa.appId = 'appId';

    ///alexa.dynamoDBTableName = 'YourTableName'; // creates new table for session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },

    'MyIntent': function () {
        this.emit(':tell', 'Hello World from Alexa');
    }
};
