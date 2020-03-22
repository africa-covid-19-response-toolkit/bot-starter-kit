/**
 * 
 * 
 * FireHandler.js
 * 
 * 
 */

 const admin = require("firebase-admin");
 const serviceAccount = require("../KEY/covid19-f7730-firebase-adminsdk-44oki-0507ac7d27.json");

 require("custom-env").env("secrets");


 class FireHandler {
     constructor() {

        // call
        this.initApp();

        this.ref = admin.app().database().ref();
     }

     
     initApp() {
         if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: process.env.FB_URL
            });
        } 
     }


     pushReport(id, name, phone, age, gender, lbn, long, lat, desc, cb) {
        let ref = this.ref.child("Reports");

        let key = ref.push({
            ID: id,
            Name: name,
            Phone: phone,
            Age: age,
            Gender: gender,
            Location_By_Name: lbn,
            Long: long,
            Lat: lat,
            Message: desc,
            is_tg: true,
            created_date: new Date().getTime()
        });

        console.log(`Key: ${key}`);

        cb();
     }
 }



 module.exports.FireHandler = FireHandler;