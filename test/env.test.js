require("custom-env").env("secrets");

console.log(process.env.BOT_TOKEN);
console.log(process.env.FB_URL);