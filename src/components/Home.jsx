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
        <div className="w-full max-w-6xl p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-3xl hover:bg-white/90">
            {/* Upload Section */}
            <div className="mb-8 relative">
                <label className="group relative block w-full">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-indigo-50/50 p-8 text-center transition-all duration-300 group-hover:border-solid group-hover:shadow-lg group-hover:scale-[1.02] group-hover:border-purple-400">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                Drop your image here or click to browse
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Support JPG, PNG, GIF up to 10MB
                            </p>
                        </div>
                    </div>
                </label>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {selectedImage && (
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                                <h3 className="text-lg font-semibold text-gray-800">Original Image</h3>
                            </div>
                            <div className="relative overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300">
                                <img
                                    src={selectedImage}
                                    alt="Original"
                                    className="w-full h-auto object-cover shadow-md"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                )}

                {(enhancedImage || isLoading) && (
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                                <h3 className="text-lg font-semibold text-gray-800">Enhanced Image</h3>
                                {isLoading && (
                                    <div className="ml-auto">
                                        <div className="w-5 h-5 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </div>
                            <div className="relative overflow-hidden rounded-xl group-hover:scale-[1.02] transition-transform duration-300">
                                {isLoading ? (
                                    <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
                                            <p className="text-purple-600 font-medium">Enhancing your image...</p>
                                            <div className="mt-2 flex justify-center space-x-1">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={enhancedImage}
                                            alt="Enhanced"
                                            className="w-full h-auto object-cover shadow-md"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                            ✨ Enhanced
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl animate-shake">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-red-700 font-medium">{error}</p>
                    </div>
                </div>
            )}

            {/* Enhance Button */}
            <div className="text-center">
                <button
                    onClick={handleEnhance}
                    disabled={!selectedImage || isLoading}
                    className={`group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                        !selectedImage || isLoading
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white hover:scale-105 hover:shadow-2xl active:scale-95"
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center justify-center space-x-2">
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Enhancing...</span>
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                <span>Enhance Image</span>
                            </>
                        )}
                    </div>
                    {!selectedImage && !isLoading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 animate-pulse"></div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Home;