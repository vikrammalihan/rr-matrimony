"use client";
import { useEffect, useState } from "react";

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // For Android Install Button
  const [isIos, setIsIos] = useState(false);
  const [showBanner, setShowBanner] = useState(false); // For iOS Banner
  const [isSafari, setIsSafari] = useState(false);

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
    const safariBrowser = userAgent.includes("safari") && !userAgent.includes("chrome");

    // Check if the app is already installed
    const isInstalled = window.matchMedia("(display-mode: standalone)").matches ;

    console.warn("📱 iOS Device:", iosDevice) ;
    alert("📱 iOS Device:" + iosDevice);
    alert("📱 Safari Browser:" + safariBrowser);
    alert("📱 isInstalled:" + isInstalled);

    if (iosDevice && !isInstalled) {
      alert("📱 isIos:" + true + "App not installed");

      setIsIos(true);
      setIsSafari(safariBrowser);
      setIsVisible(true);

      // Show popup after 5 seconds (5000ms)
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }

    const handleBeforeInstallPrompt = (event) => {
      console.warn("🔥 beforeinstallprompt event fired!", event);
      
      event.preventDefault(); // Prevent the default install prompt
      
      setDeferredPrompt(event); // Save the event to trigger it later
      
      setIsVisible(true); // Show the install button
    };

    const handleAppInstalled = () => {
      setIsVisible(false); // Hide the button once the app is installed
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

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem("iosPwaInstalled", "true"); // Prevent showing it again
  };

  

  if (!isVisible) {
      console.warn("isVisible: False");
      return null;
    }

  return (
    <>
      {/* ✅ Show install button for Android */}
      {isVisible && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-36 left-4 bg-gray-500 text-white font-bold px-4 py-2 rounded shadow-lg"
        >
          Install App
        </button>
      )}

      {/* ✅ Show Banner for iOS after 5 seconds */}
      {console.warn("📱 isIos:" + isIos + " App not installed" + showBanner)}
      {isIos && showBanner && (
        console.warn("📱 isIos:" + true + " App not installed"),
        
        <div className="fixed bottom-24 left-4 right-4 bg-gray-100 text-black p-3 rounded-md shadow-md text-center">
          {isSafari ? (
            <>
              📲 **To install on iPhone (Safari only):**
              <br />
              1️⃣ Tap the **Share Button (📤)**.
              <br />
              2️⃣ Select **"Add to Home Screen"**.
            </>
          ) : (
            <>
            alert("📱 isIos:" + true + " App not installed");
              ⚠️ **Chrome does not support full installation on iPhone!**  
              Please open this page in **Safari** to install as an app.
            </>
          )}
          <button
            className="mt-2 bg-[e31818] text-white px-4 py-1 rounded"
            onClick={handleCloseBanner}
          >
            Got it!
          </button>
        </div>
      )}
    </>
  );
};

export default InstallButton;
