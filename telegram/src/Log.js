/**
 * 
 * 
 * Log.js
 * 
 * 
 */

const Secrets = require("./Secrets");
const Extra = require('telegraf/extra');


class Log {
    constructor(ctx) {
        this.ctx = ctx;
    }

    log(msg) {
        let data = this.ctxBeautifier() + `\n\n${msg}`;
       //  let extra = Extra.markdown();

        this.ctx.telegram.sendMessage(Secrets.LOG_ID, data);
    }

    ctxBeautifier() {
        let craft = `🆔: ${this.ctx.from.id} ([Link](tg://user?id=${this.ctx.from.id}))\n` +
                   `🎃: ${this.ctx.from.is_bot}\n` + 
                   `👤: ${this.ctx.from.first_name}\n` +
                   `👥: ${this.ctx.from.last_name}\n` +
                   `🧿: @${this.ctx.from.username}`;
       
       return craft;
    }
}


module.exports.Log = Log;