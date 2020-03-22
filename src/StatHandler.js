/**
 * 
 * 
 * StatHandler.js
 * 
 * 
 */


 /**
 * 
 * 
 * Log.js
 * 
 * 
 */

 const fetch = require("node-fetch");
 const Strings = require("./Strings");
 const covid = require("novelcovid");


class StatHandler {
    constructor() {
    }

    async fetchData(cb) {
        
        let data = await covid.all();
        let date = new Date(data.updated * 1000);

        let last_updated = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  -  ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

        let msg = `${Strings.stat_string}\n_____________________\n\n${Strings.world_stat_string}\n\n${Strings.stat_total}: ${data.cases}\n${Strings.stat_dead}: ${data.deaths}\n${Strings.stat_reco}: ${data.recovered}\n${Strings.last_update_string}: ${last_updated}`;


        
        // callback
        cb(msg);
    }


    async fetchETDate(cb) {
        let data = await covid.countries();

        for (var i = 0; i < data.length; i++) {
            if (data[i].country == "Ethiopia") {
                cb(`${Strings.ethio_stat_string}\n_____________________\n\n${Strings.stat_total}: ${data[i].cases}\n${Strings.stat_dead}: ${data[i].deaths}\n${Strings.stat_reco}: ${data[i].recovered}`);
                break;
            }
        }
    }

}


module.exports.StatHandler = StatHandler;