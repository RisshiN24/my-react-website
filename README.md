# My React Personal Website

## Project Overview

This project is a personal website built with React.js. It showcases information about me, including my background, hobbies, experience, and more. It uses React Router for navigation and is styled with CSS.

## Features

Home Page: Welcome message and brief overview including headshot.

About Page: Information about my personal story and some of my professional + non-professional interests.

Experience Page: Details about work experience and projects.

Header and Footer Components: Navigation and links to my GitHub, Kaggle, and LinkedIn.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

npm (comes with Node.js)

### Installation

Clone the repository:

git clone <repository-url>
cd <repository-folder>

### Install dependencies:

`npm install`

Start the development server:

`npm start`

The app will open at http://localhost:3000.

## Key Dependencies

├── @react-pdf-viewer/core@3.12.0
├── @react-pdf-viewer/default-layout@3.12.0
├── @testing-library/jest-dom@5.17.0
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── aos@2.3.4
├── react-dom@18.3.1
├── react-router-dom@7.1.5
├── react-scripts@5.0.1
├── react@18.3.1
└── web-vitals@2.1.4

## Commands

npm start: Start the development server.

npm run build: Build the app for production.

npm test: Run tests.

## Known Issues

Vulnerabilities may remain in development dependencies, but they do not affect production builds.

Ensure images like github-logo.png and linkedin-logo.png are placed in src/assets.

## Future Enhancements

Add animations using Framer Motion.

Implement a dark mode toggle.

Display experience dynamically with data fetched from an API or JSON file.

## License

This project is licensed under the MIT License.