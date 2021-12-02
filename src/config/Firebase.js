import firebase from "firebase/compat/app";
import "firebase/compat/storage";
/* import "firebase/compat/auth"; */

const config = {
    apiKey: process.env.REACT_APP_APPI_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_ID,

};

 
const fire = firebase.initializeApp(config);
const storage = firebase.storage();
/* const auth = firebase.auth(); */

export { fire, firebase, storage };


