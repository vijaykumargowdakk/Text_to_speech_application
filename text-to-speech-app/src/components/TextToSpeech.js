// src/components/TextToSpeech.js
import React, { useState } from "react";
import { queryTextToSpeech } from "../utils/api";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function TextToSpeech() {
    const [inputText, setInputText] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleConvert = async () => {
        if (!inputText) return alert("Please enter some text to convert.");

        setIsLoading(true);
        setAudioUrl(""); // Clear previous audio output
        try {
            const responseBlob = await queryTextToSpeech(inputText);
            const audioUrl = URL.createObjectURL(responseBlob);
            setAudioUrl(audioUrl);
        } catch (error) {
            console.error("Error during text-to-speech conversion:", error);
            alert("There was an error with the text-to-speech conversion. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center animated-gradient-bg p-6">
            <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full transform hover:scale-105 transition duration-300 ease-in-out">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                    Text to Speech Converter
                </h1>
                <textarea
                    className="w-full p-5 mb-6 border border-pink-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 resize-none text-gray-700 text-lg shadow-sm"
                    rows="4"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text here..."
                ></textarea>
                <button
                    onClick={handleConvert}
                    className={`w-full p-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-md transform transition duration-300 ease-in-out ${
                        isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? "Converting..." : "Convert to Speech"}
                </button>
                {audioUrl && (
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                            Audio Output
                        </h2>
                        <audio controls src={audioUrl} className="w-full rounded-lg shadow-lg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
            </div>
            <footer className="mt-8 text-center">
                <p className="text-white text-lg font-medium">
                    Created by Vijay Kumar Gowda K K
                </p>
                <div className="flex justify-center items-center gap-4 mt-2">
                    <a
                        href="https://github.com/vijaykumargowdakk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:text-yellow-400 transition duration-200"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="mailto:rvit21bis065.rvitm@rvei.edu.in"
                        className="text-yellow-300 hover:text-yellow-400 transition duration-200"
                    >
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default TextToSpeech;
