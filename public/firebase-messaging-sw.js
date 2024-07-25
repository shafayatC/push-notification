// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCq_mducVUECKcFOOU40fT3-fvEOMzbz3Y",
  authDomain: "test-web-c62dd.firebaseapp.com",
  projectId: "test-web-c62dd",
  storageBucket: "test-web-c62dd.appspot.com",
  messagingSenderId: "892046121251",
  appId: "1:892046121251:web:d4ff544e1d942c909a5496",
  measurementId: "G-54LM99R9B5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'testing title';
  const notificationOptions = {
    body: "Lorem Ipsum notify body",
    icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png",
  };

  /*
      const notificationTitle = payload.notification.title + ' testing title';
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };
  */
  self.registration.showNotification(notificationTitle, notificationOptions);
});