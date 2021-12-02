import firebase from "firebase/compat/app";
import "firebase/compat/storage";
<<<<<<< HEAD
// Agregado firebase auth
import "firebase/compat/auth";

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

/* auth creado - Alan */
const auth = firebase.auth();
// auth exportado - alan
export { fire, firebase, storage, auth };


=======
import "firebase/compat/auth";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();
const auth = firebase.auth();

export { fire, firebase, storage, auth };
>>>>>>> 893c12494c01fa30667c5578b49eed638b399c9d
