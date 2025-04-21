# QR Code Generator

## Project Description

This is a QR code generator built using **React.js** and **Tailwind CSS**. It allows users to generate QR codes for URLs, text, and other types of data. The application provides a simple interface where users can input data and instantly see the generated QR code. Tailwind CSS is used for styling the application, ensuring a clean and responsive design.

## Live Link

You can check out the live demo of the project here: [Live QR Code Generator](https://your-live-link.com)

## Features

- Generate QR codes for text, URLs, and other data types.
- Customizable size and error correction level for the generated QR code.
- User-friendly interface with a clean and modern design using Tailwind CSS.
- Real-time generation of QR codes as the user types input.

## Technologies Used

- **React.js** (for building the user interface)
- **Tailwind CSS** (for styling the application)
- **qrcode.react** (React library for generating QR codes)

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd qr-code-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the app locally:
   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser to start using the application.

## Usage

1. Enter the text or URL you want to convert into a QR code in the input field.
2. The QR code will automatically generate and appear below the input field as you type.
3. You can customize the QR code size or other parameters.

## What I Learned

### React.js Concepts

- **Functional Components:** I worked with React functional components to build the UI and manage the state.
- **State Management:** Learned how to use `useState` for managing state in React and update the QR code generation dynamically.
- **Event Handling in React:** I handled user interactions such as typing in an input field and clicking a button to trigger state updates.
- **Conditional Rendering:** Used conditional rendering to display the generated QR code only when there is valid input.
- **Props:** Learned how to pass data between components using props, especially for customizing QR code parameters like size and error correction level.
- **React Hooks:**
  - `useState`: Managed state for user input and the generated QR code.
  - `useEffect`: Could be used to run side effects like updating the QR code when input changes (if needed).
- **Handling Forms in React:** Learned how to manage form input in React, making the user interface dynamic without full page reloads.
- **API call:** Lern how the API works using QRserver API.

### Tailwind CSS Concepts

- **Utility-First CSS:** I used Tailwind's utility-first approach to quickly build responsive layouts and style the app without writing custom CSS.
- **Responsive Design:** Tailwind’s responsive utilities made it easy to create a mobile-friendly interface that adjusts to different screen sizes.

### Live Link

- **Real-Time Feedback:** By deploying the app to a live server, I learned how to deploy React applications and test them in a live environment.
- **Continuous Integration:** Got experience with setting up deployment pipelines for React apps and handling issues related to live deployment.
