'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const ngrok = require('./get_public_urls');
const TextMessage = require('viber-bot').Message.Text;
const UrlMessage = require('viber-bot').Message.Url;
const ContactMessage = require('viber-bot').Message.Contact;
const PictureMessage = require('viber-bot').Message.Picture;
const VideoMessage = require('viber-bot').Message.Video;
const LocationMessage = require('viber-bot').Message.Location;
const StickerMessage = require('viber-bot').Message.Sticker;
const RichMedia = require('viber-bot').Message.RichMedia;
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const keyboards = require('./keyboards');
// Creating the bot with access token, name and avatar
const bot = new ViberBot({
	authToken: "4b3d286969a7d01a-d0252031ae8e858d-9b91e8775df0c6f2",
	name: "covid19ethiopia",
	avatar: "https://dl-media.viber.com/1/share/2/long/vibes/icon/image/0x0/eb3a/58464e735f9f6d54caf783fe8c117604d82a6bee12ebe18254e405b5d742eb3a.jpg" // It is recommended to be 720x720, and no more than 100kb.
});


bot.on(BotEvents.SUBSCRIBED, response => {
  response.send(new TextMessage('Hi there ${response.userProfile.name}. I am ${bot.name}! Welcome to the offical Covid19Ethiopian Offical Update!'));
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  response.send(new TextMessage(`Message received.`));
});

const SAMPLE_RICH_MEDIA = {
	"ButtonsGroupColumns": 6,
	"ButtonsGroupRows": 2,
	"BgColor": "#FFFFFF",
	"Buttons": [{
		"ActionBody": "http://www.website.com/go_here",
		"ActionType": "open-url",
		"BgMediaType": "picture",
		"Image": "http://www.images.com/img.jpg",
		"BgColor": "#000000",
		"TextOpacity": 60,
		"Rows": 4,
		"Columns": 6
	}, {
		"ActionBody": "http://www.website.com/go_here",
		"ActionType": "open-url",
		"BgColor": "#85bb65",
		"Text": "Buy",
		"TextOpacity": 60,
		"Rows": 1,
		"Columns": 6
	}]
};

const SAMPLE_KEYBOARD = {
	"Type": "keyboard",
	"Revision": 1,
	"Buttons": [
		{
			"Columns": 3,
			"Rows": 2,
			"BgColor": "#e6f5ff",
			"BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
			"BgMediaType": "picture",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Yes"
		}
	]
};

const message = new KeyboardMessage(SAMPLE_KEYBOARD);
const userProfile = bot.onSubscribe(response => bot.getUserDetails(response.userProfile)
        .then(userProfile => console.log(userProfile)));

bot.postToPublicChat(userProfile, [
	new TextMessage("Welcome to the offical viber channel for covid19-ethiopia information:"),
	new TextMessage("Selamta! -  send hi or hello text"),
    new TextMessage("Status of Covid-19 now! -  send status"),
    new TextMessage("Status of Ethiopia Covid-19 now! -  send us"),
    new TextMessage("Status of Africa Covid-19 now! -  send africa"),
    new TextMessage("To Reports! - send Report Case"),
    new TextMessage("Support Us! - send Support Info"),
    new RichMedia(SAMPLE_RICH_MEDIA)
])

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) =>
	onFinish(new TextMessage(`Hi, ${userProfile.name}! Nice to meet you.`)));

bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) =>
	onFinish(new TextMessage(`Thanks`), {
		saidThanks: true
	}));
// A simple regular expression to answer messages in the form of 'hi' and 'hello'.
bot.onTextMessage(/^hi|hello$/i, (message, response) =>
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. Welcome to the offical Covid19Ethiopian Offical Update!`)));
bot.onTextMessage(/^covid19|ethiopia$/i, (message, response) =>
    response.send(new TextMessage(`There is 6 reported cases of COVID-19 in Ethiopia.`)));

const messagePic = new PictureMessage("https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2020/03/shutterstock_1487854622_Fotor-16x9-1-1024x576-1.jpg", "COVID-19: Information on symptoms, transmission");

console.log(`${messagePic.url}, ${messagePic.text}, ${messagePic.thumbnail}`);


bot.onTextMessage(/./, (message, response) => {
    switch(message.text) {
        case 'Hi':
            on_option_kyboard(response);
            break;
        case 'Late':
            on_late_keyboard(response);
            break;
        case '5to10min':
        case '30min':
        case '1hr':
        case 'more1hr':
            reason_keyboard(response);
            break;
        case 'DayOff':
            on_dayoff_keyboard(response);
            break;
        case 'HalfDayOff':
            on_halfdayoff_keyboard(response);
            break;
        case 'amoff':
        case 'pmoff':
            reason_keyboard(response);
            break;
        case 'privatereason':
        case 'traindelay':
        case 'badhealth':
        case 'trainingtrip':
            email.mailtransporter.sendMail(email.mailoptions, function(error, info){
                if(error){
                    console.log("error happened: " + error);
                }else{
                    console.log("Email sent: " + info.response);
                    response.send(new TextMessage("Noted. Thanks!"));
                }
            });
            break;
        default :
            response.send(new TextMessage("Sorry I do not understand. Please send \"Hi\" "));
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
