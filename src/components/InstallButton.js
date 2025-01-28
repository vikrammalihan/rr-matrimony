"use client";
import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const handleBeforeInstallPrompt = (event) => {
      console.warn("🔥 beforeinstallprompt event fired!", event);
      // Prevent the default install prompt
      event.preventDefault();
      // Save the event to trigger it later
      setDeferredPrompt(event);
      // Show the install button
      setIsVisible(true);
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
