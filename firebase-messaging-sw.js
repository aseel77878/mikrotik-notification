importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBngHPTFM-eC3k-g2nS1o9l-_hC2fZBhJg",
  authDomain: "mikrotik-notifications-86537.firebaseapp.com",
  projectId: "mikrotik-notifications-86537",
  storageBucket: "mikrotik-notifications-86537.firebasestorage.app",
  messagingSenderId: "216208799015",
  appId: "1:216208799015:web:7d5e1cb06b877b0d642502",
  measurementId: "G-DDWQ98LS8T"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message received:", payload);

  const notificationTitle =
    payload.notification?.title || "إشعارات ميكروتيك";

  const notificationOptions = {
    body: payload.notification?.body || "وصل إشعار جديد من الشبكة 🔔"
  };

  self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
