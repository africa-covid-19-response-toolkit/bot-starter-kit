'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const ngrok = require('./get_public_urls');
const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;;
const PictureMessage = require('viber-bot').Message.Picture;
const KeyboardMessage = require('viber-bot').Message.Keyboard;

const localConfig = require('./config');
const keyboards = require('./keyboards');
const bot_messages = require('./messages');

function say(response, message) {
    response.send(new TextMessage(message));
}

function on_option_kyboard(response){
    response.send(new TextMessage(bot_messages.WELCOME_STATUS, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.OPTION_KEYBOARD));
}

function on_symptoms_keyboard(response){
	//response.send(new TextMessage(bot_messages.SYMPTOMS, keyboards.WELCOME_KEYBOARD));
	//bot.sendMessage([new TextMessage("Here's the product you've requested:"), new UrlMessage("http://my.ecommerce.site/product1"), new TextMessage("Shipping time: 1-3 business days")]);
	//response.send(new KeyboardMessage(keyboards.LATE_KEYBOARD));
		response.send(new PictureMessage("https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2020/03/shutterstock_1487854622_Fotor-16x9-1-1024x576-1.jpg", "COVID-19: Information on symptoms, transmission"));
		response.send(new PictureMessage("https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-shortness-breath.jpg", "COVID-19: Information on symptoms, transmission"));
		response.send(new PictureMessage("https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-fever.jp", "COVID-19: Information on symptoms, transmission"));
		response.send(new PictureMessage("https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-cough.jpg", "COVID-19: Information on symptoms, transmission"));

}

function on_ethiopia_keyboard(response){
    response.send(new TextMessage(bot_messages.ETHIOPIA, keyboards.DAYOFF_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.DAYOFF_KEYBOARD));
}

function on_world_keyboard(response){
    response.send(new TextMessage(bot_messages.WORLD, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.HALFDAYOFF_KEYBOARD));
}

function on_supportus_keyboard(response){
    response.send(new TextMessage(bot_messages.SUPPORTUS, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.REASON_KEYBOARD));
}

function on_doihave_keyboard(response){
    response.send(new TextMessage(bot_messages.DOIHAVE, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.REASON_KEYBOARD));
}

function on_what_keyboard(response){
    response.send(new TextMessage(bot_messages.WHATDOIDO, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.REASON_KEYBOARD));
}

function on_helpme_keyboard(response){
    response.send(new TextMessage(bot_messages.HELPME, keyboards.WELCOME_KEYBOARD));
    //response.send(new KeyboardMessage(keyboards.REASON_KEYBOARD));
}
// Creating the bot with access token, name and avatar
const bot = new ViberBot({
    authToken: localConfig.viber_auth_token, // <--- Paste your token here
		name: "covid19ethiopia",
		avatar: "https://dl-media.viber.com/1/share/2/long/vibes/icon/image/0x0/eb3a/58464e735f9f6d54caf783fe8c117604d82a6bee12ebe18254e405b5d742eb3a.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

bot.on(BotEvents.SUBSCRIBED, response => {
  //response.send(new TextMessage('Hi there ${response.userProfile.name}. I am ${bot.name}! Welcome to the offical Covid19Ethiopian Offical Update!'));
	  response.send(new TextMessage(`Hi there ${response.userProfile.name}. Welcome to the offical Covid19Ethiopian Offical Update!`));
	//response.send(new KeyboardMessage(keyboards.OPTION_KEYBOARD));
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	response.send(new TextMessage("", keyboards.WELCOME_KEYBOARD));
	//response.send(new KeyboardMessage(keyboards.WELCOME_KEYBOARD));
});

const userProfile = bot.onSubscribe(response => bot.getUserDetails(response.userProfile)
        .then(userProfile => console.log(userProfile)));

// A simple regular expression to answer messages in the form of 'hi' and 'hello'.
/*bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. Welcome to the offical Covid19Ethiopian Offical Update!`)));*/
bot.onTextMessage(/^covid19|ethiopia$/i, (message, response) =>
    response.send(new TextMessage(`There are 9 confirmed cases reported for COVID-19 in Ethiopia.`)));

bot.onTextMessage(/./, (message, response) => {
    switch(message.text) {
        case 'Reload':
            on_option_kyboard(response);
            break;
        case 'Symptoms':
						on_symptoms_keyboard(response);
						break;
        case '5to10min':
        case '30min':
        case '1hr':
        case 'more1hr':
            reason_keyboard(response);
            break;
        case 'Ethiopia':
            on_ethiopia_keyboard(response);
            break;
        case 'World':
            on_world_keyboard(response);
            break;
        case 'Help':
						on_helpme_keyboard(response);
						break;
        case 'Support':
            on_supportus_keyboard(response);
            break;
        case 'DOI':
				  on_doihave_keyboard(response);
					break;
        case 'What':
					on_what_keyboard(response);
					break;
        case 'GPS':
        case 'trainingtrip':
        default :
            response.send(new TextMessage("-- Menu--\n\ Volunteer coder/translater needed #bot-and-api slack page \n\to see Button Menu send \"Reload\""));
    }
});

const http = require('http');
const port = process.env.PORT || 8080;
return ngrok.getPublicUrl().then(publicUrl => {
    console.log('Set the new webhook to"', publicUrl);
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});
