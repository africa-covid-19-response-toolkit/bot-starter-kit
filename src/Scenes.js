/**
 * 
 * 
 * Scenes.js
 * 
 * 
 */

const TelegrafFlow = require('telegraf-flow');
const { Scene } = TelegrafFlow;
const Extra = require('telegraf/extra');

const { Keyboard } = require("./Keyboard");
const { Log } = require("./Log");
const { StatHandler } = require("./StatHandler");
const { FireHandler } = require("./FireHandler");
const Strings = require("./Strings");

 class Scenes {
     constructor() {
         this.keyboard = new Keyboard();
         this.firehandler = new FireHandler();
     }


     greeterScene() {
         const greeter = new Scene("greeterScene");

         greeter.enter((ctx) => {
             let fname = (ctx.from.first_name != undefined) ? ctx.from.first_name : ctx.from.username;

             ctx.reply(`Hello ${fname}`, this.keyboard.mainKeyboard());

             // state
             new StatHandler().fetchData((data) => {
                 ctx.reply(data);

                 // ET stat
                 new StatHandler().fetchETDate((data) => {
                     ctx.reply(data);
                 });
             });
             

             // log
             new Log(ctx).log("Started the bot!");

             // leave
             ctx.flow.leave();
         });
         greeter.leave((ctx) => {});


         return greeter;
     }

     statScene() {
         let stat = new Scene("statScene");


         stat.enter((ctx) => {
             new StatHandler().fetchData((data) => {
                 ctx.reply(data);

                // get ET stat
                new StatHandler().fetchETDate((data) => {
                    ctx.reply(data);
                })
                
                 // Log
                 new Log(ctx).log("Clicked on Stat button!");

                 // leave
                 ctx.flow.leave();
            });

         });

         stat.leave((ctx) => {});

         return stat;
     }

     tipsScene() {
         let tips = new Scene("tipsScene");

         tips.enter((ctx) => {

            // tip a
            ctx.replyWithPhoto(
                "https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png",
                {caption: Strings.tip_a }
            );

            // tip b
            ctx.replyWithPhoto(
                "https://www.cdc.gov/coronavirus/2019-ncov/images/protect-quarantine.png",
                {caption: Strings.tip_b}
            );

            // tip c
            ctx.replyWithPhoto(
                "https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_06_coverCough.png",
                {caption: Strings.tip_c}
            );

            // Log 
            new Log(ctx).log("Clicked on Tips button!");

            
            // leave
            ctx.flow.leave();
         });


         tips.leave((ctx) => {});


         return tips;
     }


     symptomScene() {
         const symptom = new Scene("symptomScene");

         symptom.enter((ctx) => {
             ctx.replyWithPhoto(
                 "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-shortness-breath.jpg",
                 {caption: Strings.symptom_string_breath}
             );

             ctx.replyWithPhoto(
                 "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-fever.jpg",
                 {caption: Strings.symptom_string_fever}
             );

             ctx.replyWithPhoto(
                 "https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-cough.jpg",
                 {caption: Strings.symptom_string_cough}
             );

             // Log
             new Log(ctx).log("Clicked on the symptom button!");
         });


         symptom.leave((ctx) => {});

         return symptom;
     }


     reportScene() {
         const report = new Scene("reportScene");


         report.enter((ctx) => {

             // enter a scene
             ctx.flow.enter("getnameScene", ctx.flow.state);
         
            // Log
            new Log(ctx).log("Clicked on Report button!");
         });

         report.leave((ctx) => {});

         return report;
     }


     aboutScene() {
         const about = new Scene("aboutScene");

         about.enter((ctx) => {
             ctx.reply("about");


             // Log
             new Log(ctx).log("Clicked on about button!");


             // leave
             ctx.flow.leave();
         });


         about.leave((ctx) => {});


         return about;
     }


     // data collection ps: the collector is a grate name
     getNameScene() {
         const getname = new Scene("getnameScene");

         getname.enter((ctx) => {
             ctx.reply(Strings.getName, this.keyboard.cancelKeyboard())
         });


         getname.on("message", (ctx) => {
             let msg = ctx.message.text;

             if (msg == "" || msg == undefined) {
                 ctx.reply(Strings.invalidInput);

                 ctx.flow.enter("getnameScene", ctx.flow.state);
             } else {
                // save to state
                ctx.flow.state.full_name = msg;

                // enter scene
                ctx.flow.enter("getphoneScene", ctx.flow.state);
             }

            
         });

         getname.leave((ctx) => {});

         return getname;
     }


     getPhone() {
         const getphone = new Scene("getphoneScene");

         getphone.enter((ctx) => {
             ctx.reply(Strings.getphone, this.keyboard.contactKeyboard());
         });

         getphone.on("contact", (ctx) => {
             let phone = ctx.update.message.contact.phone_number;

             if (phone == "" || phone == undefined) {
                 ctx.reply(Strings.invalidInput);

                 ctx.flow.enter("getphoneScene", ctx.flow.state);
             } else {
                // save to state
                ctx.flow.state.phoneNumber = phone;

                // enter flow
                ctx.flow.enter("getageScene", ctx.flow.state);
             }

            

         });

         getphone.leave((ctx) => {});


         return getphone;
     }


     getAge() {
        const getage = new Scene("getageScene");

        getage.enter((ctx) => {
            ctx.reply(Strings.getAge, this.keyboard.cancelKeyboard());
        });

        getage.on("message", (ctx) => {
            let msg = ctx.message.text;

            if (msg == "" || msg == undefined) {
                ctx.reply(Strings.invalidInput);

                ctx.flow.enter("getageScene", ctx.flow.state);
            } else {
                // save to state
                ctx.flow.state.person_age = msg;

                // enter flow
                ctx.flow.enter("getGender", ctx.flow.state);
            }

            

        });

        getage.leave((ctx) => {});


        return getage;
     }


     getGender() {
        const gender = new Scene("getGender");

        gender.enter((ctx) => {
            ctx.reply(Strings.getGender, this.keyboard.genderKeyboard());
        });

        gender.on("message", (ctx) => {
            let msg = ctx.message.text;

            if (msg == "" || msg == undefined) {
                ctx.reply(Strings.invalidInput);

                ctx.flow.enter("getGender", ctx.flow.state);
            } else {
                // save to state
               
                    ctx.flow.state.gender = msg;

                    // enter flow
                    ctx.flow.enter("getlocationbynameScene", ctx.flow.state);
            }


        });

        gender.leave((ctx) => {});


        return gender;
     }


     getLocation() {
        const getLocation = new Scene("getlocationbynameScene");

        getLocation.enter((ctx) => {
            ctx.reply(Strings.getLocation, this.keyboard.cancelKeyboard());
        });

        getLocation.on("message", (ctx) => {
            let msg = ctx.message.text;

            if (msg == "" || msg == undefined) {
                ctx.reply(Strings.invalidInput);

                ctx.flow.enter("getlocationbynameScene", ctx.flow.state);
            } else {

                // save to state
                ctx.flow.state.location_name = msg;

                // enter flow
                ctx.flow.enter("gpsScene", ctx.flow.state);
            }

        });

        getLocation.leave((ctx) => {});


        return getLocation;
     }

     getGPSCoord() {
        const getGPS = new Scene("gpsScene");

        getGPS.enter((ctx) => {
            ctx.reply(Strings.getGPS, this.keyboard.gpsKeyboard());
        });

        getGPS.on("location", (ctx) => {
            let loc = ctx.message.location;

            if (loc != undefined) {
                // save to state

                ctx.flow.state.lat = loc.latitude;
                ctx.flow.state.long = loc.longitude;

                ctx.flow.enter("descScene", ctx.flow.state);
            } else {
                ctx.reply(Strings.invalidInput);
                
                ctx.flow.enter("gpsScene", ctx.flow.state);
            }
        });

        getGPS.leave((ctx) => {});


        return getGPS;
     }


     descScene() {
         const desc = new Scene("descScene");

         desc.enter((ctx) => {
             ctx.reply(Strings.getDesc, this.keyboard.cancelKeyboard());
         });


         desc.on("message", (ctx) => {
             let msg = ctx.message.text;


             if (msg == "" || msg == undefined) {
                 ctx.reply(Strings.invalidInput);

                 ctx.flow.enter("descScene", ctx.flow.state);
             } else {
                 // save to state
                 ctx.flow.state.desc = msg;

                 ctx.flow.enter("finScene", ctx.flow.state);
             }
         });


         desc.leave((ctx) => {});

         return desc;
     }


     finScene() {
        const fin = new Scene("finScene");

        fin.enter((ctx) => {
            let id = ctx.from.id;
            let fn = ctx.flow.state.full_name;
            let pn = ctx.flow.state.phoneNumber;
            let age = ctx.flow.state.person_age;
            let gen = ctx.flow.state.gender;
            let loc = ctx.flow.state.location_name;
            let long = ctx.flow.state.long;
            let lat = ctx.flow.state.lat;
            let desc = ctx.flow.state.desc;

            // ctx.reply(fn + " " + pn + " " + age + " " + gen + " " + loc + " " + long + " " + lat);

            // firebase
            this.firehandler.pushReport(id, fn, pn, Number(age), gen, loc, long, lat, desc, () => {
                // leave when saving is done.

                ctx.flow.leave();
            });

        });


        fin.leave((ctx) => {
            ctx.reply(Strings.thank, this.keyboard.mainKeyboard());
        });


        return fin;
     }




     


 }



 module.exports.Scenes = Scenes;