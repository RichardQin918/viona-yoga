var express = require('express');
var router = express.Router();
var firebase = require('firebase');
require("firebase/firestore");
// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVKi3H79izZBUp-yAYz1ncsmlb2ieMtxY",
    authDomain: "viona-yoga.firebaseapp.com",
    projectId: "viona-yoga",
    storageBucket: "viona-yoga.appspot.com",
    messagingSenderId: "340564507401",
    appId: "1:340564507401:web:d4759bd1c1148865bfb1d8",
    measurementId: "G-0704WS50ZT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/subscribe', function(req, res, next) {
    db.collection("users").add({
        name: req.body.name,
        email: req.body.email,
        experience: req.body.textContent
    })
        .then((result) => {
            console.log("Document successfully written!");
            res.send(result)
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
            res.send(error)
        });
})



module.exports = router;
