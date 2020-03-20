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
       admin.initializeApp({
           credential: admin.credential.cert(serviceAccount),
           databaseURL: process.env.FB_URL
       });
    }


    pushTestData() {
        console.info("Pushing test data...");

        let ref = this.ref.child("test");

        ref.push({
            name: "test",
            number: 44
        });
    }
}



new FireHandler().pushTestData();