// src/components/TextToSpeech.js
import React, { useState } from "react";
import { queryTextToSpeech } from "../utils/api";

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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Text to Speech Converter
                </h1>
                <textarea
                    className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type the text you want to convert to speech..."
                ></textarea>
                <button
                    onClick={handleConvert}
                    className={`w-full p-3 rounded-lg text-white font-semibold ${
                        isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? "Converting..." : "Convert to Speech"}
                </button>
                {audioUrl && (
                    <div className="mt-6 text-center">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Audio Output</h2>
                        <audio controls src={audioUrl} className="w-full rounded-lg shadow-sm">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TextToSpeech;
