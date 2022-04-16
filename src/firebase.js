// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken,onMessage} from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyAWG1JIHPvjJZUpC76sp41JQ3l3Qq_4-aI",
    authDomain: "test1-c3988.firebaseapp.com",
    projectId: "test1-c3988",
    storageBucket: "test1-c3988.appspot.com",
    messagingSenderId: "154718115306",
    appId: "1:154718115306:web:58493c597a1a8009524e93"
  };
  initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getToken1 = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BB4ZDd8xNjmCXUUyFoN0qMzxcwmVuVlQwEevn7yC6GLn6LDGvCfHZQVwn4PoY2y3dfsuL-jW2pyrSHh167VqrIY'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });}
    export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
// Your web app's Firebase configuration
  // Initialize Firebase
 
