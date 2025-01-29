"use client";
import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Default hidden
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("✅ Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("🚨 Service Worker registration failed:", error);
        });
    }

    // Detect if the user is on an iOS device (iPhone/iPad)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iosDevice = /iphone|ipad|ipod/.test(userAgent);

    setIsIos(iosDevice);

    const handleBeforeInstallPrompt = (event) => {
      console.warn("🔥 beforeinstallprompt event fired!", event);
      
      event.preventDefault(); // Prevent the default install prompt
      
      setDeferredPrompt(event); // Save the event to trigger it later
      
      setIsVisible(true); // Show the install button
    };

    const handleAppInstalled = () => {
      // Hide the button once the app is installed
      setIsVisible(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    console.warn("Install button clicked");
    if (!deferredPrompt) {
      console.error("❌ deferredPrompt is null. Cannot install.");
      return;
    }

    try {
      // Show install prompt
      await deferredPrompt.prompt();
      console.warn("✅ Install prompt triggered");
  
      // Wait for user choice
      const choiceResult = await deferredPrompt.userChoice;
      console.warn("User response:", choiceResult);
  
      if (choiceResult.outcome === "accepted") {
        console.warn("🎉 User accepted the install prompt");
      } else {
        console.warn("❌ User dismissed the install prompt");
      }
  
      // Clear the saved prompt
      setDeferredPrompt(null);
      setIsVisible(false);
    } catch (error) {
      console.error("🚨 Error triggering install prompt:", error);
    }
  };

  if (isIos) {
    // iOS users: Show custom message
    return (
      <div className="fixed bottom-10 left-4 right-4 bg-gray-100 text-black p-3 rounded-md shadow-md text-center">
        📲 To install this app on iPhone:
        <br />
        <strong>1. Tap the Share Button (📤) in Safari.</strong>
        <br />
        <strong>2. Select "Add to Home Screen".</strong>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-36 left-4 bg-gray-500 text-white font-bold px-4 py-2 rounded shadow-lg"
    >
      Install App
    </button>
  );
};

export default InstallButton;
