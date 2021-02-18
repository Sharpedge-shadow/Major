
import firebase from 'firebase/app'
import 'firebase/auth'

const firebase_config = {
    apiKey: "AIzaSyBOFbNIcrvra6keYo2x_xRifRhAEhTnUOA",
    authDomain: "web-conferencing-dfc14.firebaseapp.com",
    databaseURL: "https://web-conferencing-dfc14.firebaseio.com",
    projectId: "web-conferencing-dfc14",
    storageBucket: "web-conferencing-dfc14.appspot.com",
    messagingSenderId: "996845372902",
    appId: "1:996845372902:web:eccea0ffa7c5d41afac227",
    measurementId: "G-6QSHR6PS8F"
  }
firebase.initializeApp(firebase_config)

export const auth = firebase.auth()