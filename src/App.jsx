import Home from "./components/Home";
import React from "react";
const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/3 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-10 left-1/3 w-36 h-36 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-center mb-8 space-y-4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                        ✨ AI Image Enhancer ✨
                    </h1>
                    <p className="text-xl text-gray-600 font-medium animate-fade-in-delay">
                        Transform your images with the power of AI in seconds!
                    </p>
                    <div className="flex items-center justify-center space-x-2 animate-fade-in-delay-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>

                <Home />

                <div className="text-sm text-gray-500 mt-8 font-medium animate-fade-in-delay-3">
                    Powered By @Lakshya-AI ✨
                </div>
            </div>
        </div>
    );
};

export default App;