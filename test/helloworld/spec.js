const conversation = require('alexa-conversation');
const app = require('../../handlers/helloworld/handler');

const opts = {
  name: 'Test Conversation',
  appId: process.env.APP_ID,
  handler: app.helloworld
};

conversation(opts)
  .userSays('LaunchRequest')
    .plainResponse
      .shouldContain('Hello World from Alexa')
	    .end();
