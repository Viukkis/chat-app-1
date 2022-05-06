// Import firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

/* Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2Cbd0ppIoNpybWzUbOyvn_pQl19MydZo",
    authDomain: "chat-app-1-5da1a.firebaseapp.com",
    projectId: "chat-app-1-5da1a",
    storageBucket: "chat-app-1-5da1a.appspot.com",
    messagingSenderId: "810430938164",
    appId: "1:810430938164:web:47479f77484f3104331e61"
}; */