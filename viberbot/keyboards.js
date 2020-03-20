module.exports = {

    WELCOME_KEYBOARD: {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "🌡Symptoms",
                //TextVAlign, TextHAlign : using default (middle, center)
                "ActionType": "reply",
                "ActionBody": "Symptoms"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "🇪🇹 Report Covid 19 Case",
                "ActionType": "open-url",
                "ActionBody": "https://www.aa.com.tr/en/africa/ethiopia-4-coronavirus-suspects-quarantined/1716863"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "🇪🇹 Ethiopian Statistics",
                "ActionType": "reply",
                "ActionBody": "Ethiopia"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": "🇪🇹 World Statistics",
                "ActionType": "reply",
                "ActionBody": "World"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": " Do I have Covid19?",
                "ActionType": "reply",
                "ActionBody": "DOI"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": " What Should I have to Do?",
                "ActionType": "reply",
                "ActionBody": "What"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": " Help me !!",
                "ActionType": "reply",
                "ActionBody": "Help"
            },
            {
                "Columns": 3,
                "Rows": 1,
                "BgColor": "#2db9b9",
                "Text": " Send me help by location GPS !!",
                "ActionType": "reply",
                "ActionBody": "GPS"
            }

        ]
    },

    SYMPTOMS_KEYBOARD: {
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
