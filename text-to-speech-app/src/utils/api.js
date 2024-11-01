// src/utils/api.js

const huggingFaceToken = process.env.REACT_APP_HUGGING_FACE_TOKEN;

export async function queryTextToSpeech(inputText) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/mms-tts-eng",
            {
                headers: {
                    Authorization: `Bearer ${huggingFaceToken}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ inputs: inputText }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API error:", response.status, response.statusText, errorText);
            throw new Error(`API request failed with status ${response.status}: ${errorText}`);
        }

        // Log the response to verify it is a blob
        const resultBlob = await response.blob();
        console.log("Audio blob received:", resultBlob);
        return resultBlob;
    } catch (error) {
        console.error("Error fetching audio:", error);
        throw error;
    }
}
