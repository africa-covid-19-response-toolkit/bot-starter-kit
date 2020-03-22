/**
 * 
 * 
 * Keyboard.js
 * 
 * 
 */

const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const Strings = require("./Strings");



class Keyboard {
    constructor() {
    }


    mainKeyboard() {
        return Markup.keyboard([
            [Strings.report_string, Strings.symptom],
            [Strings.statistics, Strings.tips],
            [Strings.about]
        ])
        .oneTime()
        .resize()
        .extra();
    }

    genderKeyboard() {
        return Markup.keyboard([
            [Strings.male, Strings.female],
            [Strings.cancel]
        ])
        .oneTime()
        .resize()
        .extra();
    }


    gpsKeyboard() {
        return Extra.markup((markup) => {
            return markup.resize()
                .keyboard([
                    markup.locationRequestButton(Strings.reqGPS),
                    Strings.cancel
                ]);
        });
    }


    contactKeyboard() {
        return Extra.markup((markup) => {
            return markup.resize()
                .keyboard([
                    markup.contactRequestButton(Strings.getphone),
                    Strings.cancel
                ]);
        });
    }


    cancelKeyboard() {
        return Markup.keyboard([
            [Strings.cancel]
        ])
        .oneTime()
        .resize()
        .extra();
    }

}



module.exports.Keyboard = Keyboard;