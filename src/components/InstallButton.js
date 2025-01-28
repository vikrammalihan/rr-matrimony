"use client";
import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
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
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.warn("User accepted the install prompt");
    } else {
      console.warn("User dismissed the install prompt");
    }

    // Clear the saved prompt
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-36 left-4 bg-gray-500 text-white px-4 py-2 rounded shadow-lg"
    >
      Add to Home Screen
    </button>
  );
};

export default InstallButton;
