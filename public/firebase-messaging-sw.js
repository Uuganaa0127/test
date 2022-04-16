// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAWG1JIHPvjJZUpC76sp41JQ3l3Qq_4-aI",
    authDomain: "test1-c3988.firebaseapp.com",
    projectId: "test1-c3988",
    storageBucket: "test1-c3988.appspot.com",
    messagingSenderId: "154718115306",
    appId: "1:154718115306:web:58493c597a1a8009524e93"
  };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});