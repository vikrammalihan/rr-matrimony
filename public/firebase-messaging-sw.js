importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "INIT_FIREBASE") {
        const config = event.data.payload;

        firebase.initializeApp(config);

        const messaging = firebase.messaging();

        messaging.onBackgroundMessage(function (payload) {
            console.log("[firebase-messaging-sw.js] Received background message", payload);

            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
                icon: payload.notification.icon,
            };

            self.registration.showNotification(notificationTitle, notificationOptions);
        });
    }
});

// Add a listener for push events
// Required for Firebase Messaging to work
self.addEventListener("push", (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: "/icons/icon-192x192.png",
    });
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow("/")); // Redirect to a specific URL
});


messaging.onBackgroundMessage(function (payload) {
    console.log("[firebase-messaging-sw.js] Received background message", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
