# Google Chrome - Gemini Nano POC

This project is a Proof of Concept showcasing the functionality of Google Gemini Nano to provide autocompleted suggestions offline using a local Large Language Model (LLM). This POC demonstrates how to integrate this capability into a simple React application, eliminating the need for expensive alternatives.

## Features

- Offline autocomplete suggestions using Google Gemini Nano
- Local LLM integration
- Simple and user-friendly interface using Shadcn for funsies

## Getting Started

Follow the instructions below to set up and run the application on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Google Chrome Dev (127+)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Google Chrome and Gemini Nano:**

   Follow the [installation guide for Chrome](https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/edit) to configure Google Gemini Nano on your machine.

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

### Usage

- Start typing in the search bar to see autocompleted suggestions provided by the local LLM.
- The suggestions will appear in a dropdown below the search bar.
