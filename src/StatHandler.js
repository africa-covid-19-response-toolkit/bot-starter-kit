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


class StatHandler {
    constructor() {
        this.url = "https://capi.abren.tech/stats";
    }

    fetchData(cb) {
        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                let d = data.data[0].total;
                let msg = Strings.stat_string + "\n\n";


                // total
                msg += Strings.stat_total + ": " + d.data[0] + "\n";
                msg += Strings.stat_quar + ": " + d.data[1] + "\n";
                msg += Strings.stat_conf + ": " + d.data[2] + "\n";
                msg += Strings.stat_hosp + ": " + d.data[3] + "\n";
                msg += Strings.stat_hosp_icu + ": " + d.data[4] + "\n";
                msg += Strings.stat_reco + ": " +  d.data[5] + "\n";
                msg += Strings.stat_dead + ": " + d.data[6];

                // callback
                cb(msg);

            });
    }

}


module.exports.StatHandler = StatHandler;