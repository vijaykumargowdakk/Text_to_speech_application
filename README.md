
# 🎙️ Text to Speech Converter

> **Live Demo**: [🚀 Click here to see the app in action!](https://text-to-speech-app-vijaykumargowdakks-projects.vercel.app/)

A web application that converts text into speech using Hugging Face's API. Built with React and styled with Tailwind CSS, it features an animated gradient background and a responsive, modern UI. 

## ✨ Features

- 🎧 **Text to Speech Conversion**: Converts user-inputted text into speech using a model from Hugging Face's inference API.
- 🎨 **Animated Gradient Background**: Enjoy a visually engaging background with smooth color transitions.
- 📱 **Responsive UI**: Built with Tailwind CSS for a clean and accessible interface.
- 🔗 **Social Links**: Connect with the developer via GitHub and email right from the app.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Hugging Face API**: API used for text-to-speech conversion.
- **React Icons**: For displaying GitHub and email icons in the footer.

## 🚀 Getting Started

### 📥 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/text-to-speech-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd text-to-speech-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Install `react-icons` for icon support**:

   ```bash
   npm install react-icons
   ```

### 🔧 Setup

1. Create a `.env` file in the root directory to store your Hugging Face API token:

   ```plaintext
   REACT_APP_HUGGING_FACE_TOKEN=your_hugging_face_token
   ```

   Replace `your_hugging_face_token` with your actual Hugging Face API token.

## 🖥️ Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the app.

3. Type the text you want to convert to speech and click **Convert to Speech**. The audio output will be available below the button. 🎶

## 📁 Folder Structure

- `src/`
  - `components/`
    - `TextToSpeech.js`: Main component for text-to-speech conversion.
  - `utils/`
    - `api.js`: Contains the API call function for Hugging Face API.

## 🗂️ Project Files

### `TextToSpeech.js`

Handles the UI and core functionality of the application, including:
- ✍️ Text input for user-provided text.
- 🔄 Convert button to trigger text-to-speech conversion.
- 🔉 Audio output for playing the converted speech.

### `index.css`

Contains Tailwind CSS configurations and custom styles, including the animated gradient background.

## 📦 Dependencies

- **react**: ^17.0.2
- **react-icons**: ^4.3.1
- **tailwindcss**: ^2.2.19

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Contact

- **Developer**: Vijay Kumar Gowda K K
- **GitHub**: [vijaykumargowdakk](https://github.com/vijaykumargowdakk)
- **Email**: [rvit21bis065.rvitm@rvei.edu.in](mailto:rvit21bis065.rvitm@rvei.edu.in)
