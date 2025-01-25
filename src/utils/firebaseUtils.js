import { initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Safely handle service worker registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready
    .then((registration) => {
      if (registration && registration.active) {
        registration.active.postMessage({
          type: "INIT_FIREBASE",
          payload: firebaseConfig,
        });
        console.log("Firebase configuration sent to service worker.");
      } else {
        console.error("Service worker is not active.");
      }
    })
    .catch((error) => {
      console.error("ServiceWorker ready error:", error);
    });
} else {
  console.error("Service workers are not supported in this browser.");
}


// Get Firebase Messaging
export const requestNotificationPermission = async () => {
  try {
    const messaging = getMessaging(app); // Use the initialized app
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });

    if (token) {
      console.warn("FCM Token:", token);
      return token;
    } else {
      console.warn("No registration token available. Request permission to generate one.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching FCM Token:", error);
    throw error;
  }
};

// function to get FCM device token
export const getFCMDeviceToken = async () => {
  if (typeof window === "undefined") {
    console.error("This function must be run in the browser.");
    return null;
  }

  try {
    const isMessagingSupported = await isSupported();
    if (!isMessagingSupported) {
      console.warn("Firebase Messaging is not supported on this browser.");
      return null;
    }

    if (!("serviceWorker" in navigator)) {
      console.error("Service workers are not supported in this browser.");
      return null;
    }

    const registration = await navigator.serviceWorker.ready.catch((error) => {
      console.error("ServiceWorker registration failed or not ready:", error);
      return null;
    });

    if (!registration) {
      console.error("Service worker is not ready. Ensure the service worker is properly registered.");
      return null;
    }

    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
    if (!vapidKey) {
      console.error("VAPID key is missing. Ensure it's set in the .env file.");
      return null;
    }

    const messaging = getMessaging(app);

    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.warn("FCM Device Token:", token);
      return token;
    } else {
      console.warn("No registration token available. User may not have granted permission.");
      return null;
    }
  } catch (error) {
    console.error("Error while fetching FCM device token:", error);
    return null;
  }
};

export const listenForForegroundNotifications = (messaging) => {
  onMessage(messaging, (payload) => {
    console.log("Foreground notification received:", payload);

    // Show a toast or custom notification
    alert(`New notification: ${payload.notification.title} - ${payload.notification.body}`);
  });
};
