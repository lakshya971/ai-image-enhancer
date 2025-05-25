import React, { useState } from "react";

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setEnhancedImage(null);
            setError(null);
        }
    };

    const handleEnhance = async () => {
        if (!selectedImage) return;

        setIsLoading(true);
        setError(null);

        try {
            // Add your image enhancement API call here
            // For now, just simulating the enhancement
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setEnhancedImage(selectedImage); // Replace with actual enhanced image
        } catch (err) {
            setError("Failed to enhance image. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
            <div className="mb-6">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedImage && (
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Original Image</h3>
                        <img
                            src={selectedImage}
                            alt="Original"
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {enhancedImage && (
                    <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Enhanced Image</h3>
                        <img
                            src={enhancedImage}
                            alt="Enhanced"
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </div>

            {error && <div className="text-red-500 mt-4">{error}</div>}

            <button
                onClick={handleEnhance}
                disabled={!selectedImage || isLoading}
                className={`mt-6 px-6 py-2 rounded-lg ${
                    !selectedImage || isLoading
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                } text-white font-semibold`}
            >
                {isLoading ? "Enhancing..." : "Enhance Image"}
            </button>
        </div>
    );
};

export default Home;