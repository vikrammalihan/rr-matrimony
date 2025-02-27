"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Trash2, Upload, X } from "lucide-react";

export default function EditMyPictures() {
    const [images, setImages] = useState([]);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const openCamera = async () => {
        try {
            if (images.length >= 10) return;
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            setIsCameraOpen(true);

            // Delay setting video source to ensure the element exists
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            }, 100);
        } catch (error) {
            console.error("Camera access denied:", error);
        }
    };

    const closeCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        setIsCameraOpen(false);
    };

    const captureImage = () => {
        if (!canvasRef.current || !videoRef.current) return;

        const canvas = canvasRef.current;
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageUrl = canvas.toDataURL("image/png");

        setImages((prev) => [...prev.slice(0, 9), imageUrl]); // Limit to 10 images
        closeCamera();
    };

    const handleImageUpload = (event) => {
        const files = event.target.files;
        if (files) {
            const newImages = [...images];
            for (let file of files) {
                if (newImages.length < 10) {
                    newImages.push(URL.createObjectURL(file));
                }
            }
            setImages(newImages.slice(0, 10)); // Limit to 10 images
        }
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">Upload Pictures</h2>

            {/* Camera Preview */}
            {isCameraOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative w-full max-w-lg p-4 bg-white rounded-md">
                        <video ref={videoRef} autoPlay className="w-full rounded-md"></video>
                        <canvas ref={canvasRef} className="hidden"></canvas>

                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-600 transition"
                                onClick={captureImage}
                            >
                                Capture
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-600 transition"
                                onClick={closeCamera}
                            >
                                <X size={18} /> Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Show Empty Message */}
            {images.length === 0 && (
                <div className="text-gray-500 text-center py-10">
                    No pictures uploaded. Add your pictures to get started.
                </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {images.map((img, index) => (
                    <div key={index} className="relative w-full h-40 bg-gray-400 rounded-md">
                        <img
                            src={img}
                            alt={`Uploaded ${index}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <button
                            className="absolute top-2 right-2 text-red-600 bg-white p-1 rounded-full shadow"
                            onClick={() => removeImage(index)}
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Upload Buttons */}
            {images.length < 10 && (
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-600 transition"
                        onClick={openCamera}
                    >
                        <Camera size={18} /> Take a Picture
                    </button>

                    <label className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-red-600 transition cursor-pointer">
                        <Upload size={18} /> Upload from Gallery
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
                </div>
            )}
        </div>
    );
}
