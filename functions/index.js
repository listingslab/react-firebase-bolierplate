/**
 * React Firebase Bolierplate
 *
 * @package    react-firebase-bolierplate
 * @author     Chris Dorward <chris.dorward@aligent.com.au>
 */

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});