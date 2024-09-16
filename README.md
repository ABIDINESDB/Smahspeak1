
Project Banner
typescript nextdotjs tailwindcss
LinguaSpeak
Build this project step by step with our detailed tutorial on Your YouTube Channel. Join the community!
📋 Table of Contents
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
🕸️ Assets & Code
🚀 More
🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, Code with Albert.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

🤖 Introduction
Built with the latest Next.js and TypeScript, LinguaSpeak is an advanced voice translation tool. It allows users to speak into the microphone, translate the spoken text to another language, and playback the translation. This project is perfect for those looking to learn how to integrate speech recognition and translation APIs into a Next.js application.

If you're getting started and need assistance or face any bugs, join our active Discord community. It's a place where people help each other out.



⚙️ Tech Stack
Next.js
TypeScript
OpenAI API
React Speech Recognition
Tailwind CSS
🔋 Features
👉 Speech Recognition: Converts spoken words into text using the Web Speech API.

👉 Text Translation: Translates the recognized text into a selected target language using OpenAI's GPT-4 model.

👉 Audio Playback: Converts translated text back into speech using the Web Speech API's speech synthesis.

👉 File Upload: Reads and translates text from uploaded files, including RTF to plain text conversion.

👉 Link Content Fetching: Fetches and translates text content from provided URLs.

👉 Language Selection: Allows users to select target languages for translation.

👉 Copy to Clipboard: Copies the translated text to the clipboard.

👉 Like, Dislike, and Favorite: Provides user interaction features for translations.

👉 Responsive Design: Ensures a seamless experience across different devices.

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/mendsalbert/lingua-speak.git
cd linguaspeak
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

NEXT_PUBLIC_API_KEY=your-openai-api-key
Replace the placeholder values with your actual OpenAI credentials. You can obtain these credentials by signing up on the OpenAI website.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.
 
 
