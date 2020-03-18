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
            [Strings.symptom, Strings.report_string],
            [Strings.statistics],
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