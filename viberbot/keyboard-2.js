module.exports = {

    OPTION_KEYBOARD: {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#5d9722",
                "Text": "🌡Symptoms",
                //TextVAlign, TextHAlign : using default (middle, center)
                "ActionType": "reply",
                "ActionBody": "Late"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#b33518;",
                "Text": ":mask: Report Covid 19 Case",
                "ActionType": "reply",
                "ActionBody": "DayOff"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "World Statstics",
                "ActionType": "reply",
                "ActionBody": "HalfDayOff"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#f9c014;",
                "Text": "🇪🇹 Ethiopian Statistics",
                "ActionType": "reply",
                "ActionBody": "HalfDayOff"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#f9c014;",
                "Text": "What should I have to do?",
                "ActionType": "reply",
                "ActionBody": "HalfDayOff"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#f9c014;",
                "Text": "🇪🇹  Do I have Covid-19?",
                "ActionType": "reply",
                "ActionBody": "HalfDayOff"
            },
            {
                "Columns": 2,
                "Rows": 1,
                "BgColor": "#f9c014;",
                "Text": "Support Covid19 Task Force",
                "ActionType": "reply",
                "ActionBody": "HalfDayOff"
            }

        ]
    },

    LATE_KEYBOARD: {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 3,
                "Rows": 2,
                "BgColor": "#2db9b9",
                "Text": "5-10 Minutes",
                //TextVAlign, TextHAlign : using default (middle, center)
                "ActionType": "reply",
                "ActionBody": "5to10min"
            },
            {
                "Columns": 3,
                "Rows": 2,
                "BgColor": "#2db9b9",
                "Text": "30 Minutes",
                "ActionType": "reply",
                "ActionBody": "30min"
            },
            {
                "Columns": 3,
                "Rows": 2,
                "BgColor": "#2db9b9",
                "Text": "1 Hour",
                "ActionType": "reply",
                "ActionBody": "1hr"
            },
            {
                "Columns": 3,
                "Rows": 2,
                "BgColor": "#2db9b9",
                "Text": "> 1 Hour",
                "ActionType": "reply",
                "ActionBody": "more1hr"
            }
        ]
    },
    DAYOFF_KEYBOARD : {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Bad Health",
                "ActionType": "reply",
                "ActionBody": "badhealth"
            },
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Training / Business Trip",
                "ActionType": "reply",
                "ActionBody": "trainingtrip"
            },
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Private",
                "ActionType": "reply",
                "ActionBody": "privatereason"
            }
        ]
    },
    HALFDAYOFF_KEYBOARD : {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "AM Off",
                //TextVAlign, TextHAlign : using default (middle, center)
                "ActionType": "reply",
                "ActionBody": "amoff"
            },
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "PM Off",
                "ActionType": "reply",
                "ActionBody": "pmoff"
            },
        ]
    },
    REASON_KEYBOARD : {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Train Delay",
                //TextVAlign, TextHAlign : using default (middle, center)
                "ActionType": "reply",
                "ActionBody": "traindelay"
            },
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Bad Health",
                "ActionType": "reply",
                "ActionBody": "badhealth"
            },
            {
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Private",
                "ActionType": "reply",
                "ActionBody": "privatereason"
            },
            /*{
                "Columns": 6,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "Other",
                "ActionType": "reply",
                "ActionBody": "Please send your late reason!"
            },*/
        ]
    }
};
