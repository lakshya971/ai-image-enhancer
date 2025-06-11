import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-80 lg:h-96 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-violet-400/20 rounded-full blur-xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Main Loading Content */}
            <div className="relative z-10 text-center space-y-6">
                {/* Main Spinner */}
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-violet-200 rounded-full animate-spin">
                        <div className="absolute inset-0 border-4 border-transparent border-t-violet-600 border-r-purple-600 rounded-full animate-spin"></div>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-pink-600 border-l-purple-600 rounded-full animate-spin animate-reverse"></div>
                    
                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                        ✨ Enhancing Your Image ✨
                    </h3>
                    <p className="text-gray-600 font-medium animate-fade-in-out">
                        AI is working its magic...
                    </p>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-bounce delay-200"></div>
                </div>

                {/* Progress Bar */}
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full animate-loading-bar"></div>
                </div>

                {/* Loading Messages */}
                <div className="text-sm text-gray-500 animate-pulse">
                    <p>Please wait while we enhance your image quality...</p>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-violet-400 rounded-full animate-float-particle"></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-float-particle-delayed"></div>
                <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-particle"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-violet-400 rounded-full animate-float-particle-delayed"></div>
            </div>
        </div>
    );
};

export default Loading;