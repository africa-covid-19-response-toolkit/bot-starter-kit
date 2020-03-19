require('dotenv').config();
const Telegraf = require('telegraf');
const TelegrafFlow = require('telegraf-flow');
const flow = new TelegrafFlow();

const Secrets = require("./src/Secrets");
const { Scenes } = require("./src/Scenes");
const { CommandHandler } = require("./src/CommandHandler");
const { Hear } = require("./src/Hear");
// const { ActionHandler } = require("./src/ActionHandler");


// bot
const bot = new Telegraf(Secrets.BOT_TOKEN);

// commandHandler
const commandHandler = new CommandHandler(flow);

// Hear
const hear = new Hear(flow);

// Action
// const actionHandler = new ActionHandler(bot);

console.log("==> Bot Started...");


// commands
commandHandler.start();

// Hear
hear.hear();


// action
// actionHandler.actions();




// register
flow.register(new Scenes().greeterScene());
flow.register(new Scenes().reportScene());
flow.register(new Scenes().aboutScene());
flow.register(new Scenes().getNameScene());
flow.register(new Scenes().getPhone());
flow.register(new Scenes().getAge());
flow.register(new Scenes().getGender());
flow.register(new Scenes().getGPSCoord());
flow.register(new Scenes().getLocation());
flow.register(new Scenes().finScene());
flow.register(new Scenes().symptomScene());
flow.register(new Scenes().statScene());


bot.use(Telegraf.session());
bot.use(flow.middleware());


// bot.telegram.setWebhook("https://.herokuapp.com/" + process.env.BOT_TOKEN);
// bot.startWebhook('/' + process.env.BOT_TOKEN, null, process.env.PORT)

bot.launch();
