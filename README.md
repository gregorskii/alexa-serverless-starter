# Alexa Serverless Starter

Simple example using `serverless/serverless` to create Alexa Skills.

Extends from [https://github.com/serverless/examples/tree/master/aws-node-alexa-skill](https://github.com/serverless/examples/tree/master/aws-node-alexa-skill)

Unit Testing wired up with [alexa-conversation](https://www.npmjs.com/package/alexa-conversation).

## Setup

Clone or download the zip.

Run `yarn install` or `npm install`

Create a `.env` file for testing with the content:

```
APP_ID={YOUR APP ID}
```

NOTE: Serverless will only create the Lambda function and attach Alexa Skill as a trigger. You must create an Alexa Skill following the documentation here:

[https://github.com/serverless/examples/tree/master/aws-node-alexa-skill](https://github.com/serverless/examples/tree/master/aws-node-alexa-skill)

Or using the new [Beta Skill Builder](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/ask-define-the-vui-with-gui).
