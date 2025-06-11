import Loading from "./Loadingt";
import React from "react";

const ImagePreview = (props) => {
    return (
        <div className="mt-12 w-full max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                    ✨ Image Comparison ✨
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Original Image Section */}
                <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 p-4">
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10 flex items-center justify-center space-x-3">
                                <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-white tracking-wide">
                                    Original Image
                                </h3>
                                <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
                            {props.uploaded ? (
                                <div className="relative group/image">
                                    <img
                                        src={props.uploaded}
                                        alt="Original"
                                        className="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover/image:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-lg opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover/image:translate-y-0">
                                        📸 Original
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-80 lg:h-96 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-10 left-10 w-20 h-20 bg-violet-400 rounded-full blur-xl animate-float"></div>
                                        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full blur-xl animate-float-delayed"></div>
                                    </div>
                                    <div className="relative z-10 text-center space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-violet-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto animate-bounce">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 font-medium">No Image Selected</p>
                                        <div className="flex justify-center space-x-1">
                                            <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                                            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Enhanced Image Section */}
                <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-4">
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="relative z-10 flex items-center justify-center space-x-3">
                                <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-white tracking-wide">
                                    Enhanced Image
                                </h3>
                                <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse delay-300"></div>
                                {props.loading && (
                                    <div className="ml-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
                            {props.loading ? (
                                <div className="h-80 lg:h-96">
                                    <Loading />
                                </div>
                            ) : props.enhanced ? (
                                <div className="relative group/image">
                                    <img
                                        src={props.enhanced}
                                        alt="Enhanced"
                                        className="w-full h-80 lg:h-96 object-cover transition-all duration-700 group-hover/image:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                        ✨ Enhanced
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-lg opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover/image:translate-y-0">
                                        🚀 AI Enhanced
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-80 lg:h-96 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-10 right-10 w-20 h-20 bg-emerald-400 rounded-full blur-xl animate-float"></div>
                                        <div className="absolute bottom-10 left-10 w-16 h-16 bg-teal-400 rounded-full blur-xl animate-float-delayed"></div>
                                    </div>
                                    <div className="relative z-10 text-center space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto animate-bounce">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 font-medium">No Enhanced Image</p>
                                        <div className="flex justify-center space-x-1">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-100"></div>
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Stats */}
            {props.uploaded && props.enhanced && !props.loading && (
                <div className="mt-8 bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 animate-fade-in-up">
                    <div className="text-center">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                            Enhancement Complete! 🎉
                        </h4>
                        <div className="flex items-center justify-center space-x-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600 font-medium">Original</p>
                            </div>
                            <div className="flex-1 h-1 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600 font-medium">Enhanced</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImagePreview;