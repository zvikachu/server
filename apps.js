/**
 * Created by zvi on 8/8/2016.
 */
var express = require('express');
var app = express();
var requestIp = require('request-ip');
var firebase = require('firebase');
const PORT = 9000;

/*

firebase.initializeApp({
    serviceAccount: "./TEST3-c610d475e23d.json",
    databaseURL: "https://test3-7d832.firebaseio.com"
    databaseAuthVariableOverride: {
        uid: "server-worker-1"
    }
});

/!**
 * This service worker should be the olny one getting access to database locations used by him
 * Example:
 * {
  "rules": {
    "server-worker-1-db-folder": {
      ".read": "auth.uid === 'server-worker-1'",
      ".write": "auth.uid === 'server-worker-1'"
    }
  }
}
 *!/
var db = firebase.database();


ITZIK!
*/


//start the node server
app.set('port', process.env.PORT || PORT);
app.get('/' ,function (req,res) {
    var clientIp = requestIp.getClientIp(rgeq);
    res.send('zvi\'s server\nWhere all good things start.' + "\nYour ip: +" + clientIp);
});
app.listen(app.get('port'),function(){
    console.log('server started on port '+ app.get('port'));
});





/*
//retreive data from db + listen to changes to ref
var ref = db.ref("itzik/pantsColor");
// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});*/



/*

//update data
ref.update({
    "nickname": "Amazing Grace"
});
*/




/*

//saving data to the db
var ref2 = db.ref("itzik/pantsColor");
ref2.set({
    monday: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    friday: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});
*/

/*
//verify a user
// idToken comes from the client app via https
firebase.auth().verifyIdToken(idToken).then(function(decodedToken) {
    var uid = decodedToken.sub;
    // ...
}).catch(function(error) {
    // Handle error
});*/



/*//AUTH A NEW USER - need to create a custom string first
var uid = "asdasdasd32q321effff3";
var customToken = firebase.auth().createCustomToken(uid);
console.log(customToken);*/
