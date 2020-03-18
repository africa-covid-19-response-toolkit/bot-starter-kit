/**
 * 
 * 
 * 
 * CommandHandler.js
 * 
 * 
 * 
 */


const Secrets = require("./Secrets");


class CommandHandler {
   constructor(flow) {
       this.flow = flow;
   }


   start() {
       this.flow.start((ctx) => {
           ctx.flow.enter("greeterScene");
       });
   }


   
}



module.exports.CommandHandler = CommandHandler;

