Here's the updated **README** with the folder structure you requested:

---

# MoneyMinder

## Overview

**MoneyMinder** is a personal finance tracker designed to help users manage their financial transactions effectively. The application provides an intuitive interface to track income, expenses, and budget, leveraging **Firebase** for authentication and data management. It uses **Ant Design** components such as charts and tables for displaying transaction data, making it easier for users to visualize and manage their finances.

## Features

- **User Authentication**: Secure login and signup functionality using **Firebase Authentication**.
- **Transaction Tracking**: Add, edit, and delete financial transactions such as income and expenses.
- **Real-time Data**: Transaction data is stored and synced in real-time using **Firebase Firestore**.
- **Data Visualization**: Financial data is presented with charts and tables powered by **Ant Design**, helping users visualize their financial progress.
- **File Upload**: Upload and manage financial records or receipts using **Firebase Storage**.

## Demo

A live demo of the application can be found [here](https://your-netlify-url.com).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Building for Production](#building-for-production)
- [Deploying on Netlify](#deploying-on-netlify)
- [Firebase Setup](#firebase-setup)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Folder Structure](#folder-structure)

## Getting Started

To get this project running on your local machine, follow these instructions.

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- Firebase account and Firebase project

### Setup

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**

   Install all dependencies:

   ```bash
   npm install
   ```

3. **Set Up Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firebase Authentication** for email/password login.
   - Set up **Firestore** for storing transaction data.
   - Set up **Firebase Storage** for file uploads (optional).
   - Add Firebase configuration to a `.env` file at the root of your project:

     ```env
     VITE_FIREBASE_API_KEY=<your-api-key>
     VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
     VITE_FIREBASE_PROJECT_ID=<your-project-id>
     VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
     VITE_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
     VITE_FIREBASE_APP_ID=<your-app-id>
     ```

4. **Start the Development Server**

   Start the app locally by running:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Firebase Setup

Set up **Firebase Authentication**, **Firestore**, and **Firebase Storage** as described earlier. These services will manage user authentication, store financial transaction data, and handle file uploads.

## Building for Production

When you're ready to deploy, build the project for production:

```bash
npm run build
```

This will generate a production-ready build in the `dist/` directory.

## Deploying on Netlify

To deploy on **Netlify**:

1. Commit and push changes to your repository.
2. Go to [Netlify](https://www.netlify.com/) and sign in (or create an account).
3. Select "New site from Git" and link your repository.
4. Set the build command to `npm run build` and the publish directory to `dist`.
5. Click "Deploy Site" to deploy the app.

After deployment, you’ll receive a live URL.

## Scripts

- `npm run dev`: Starts the development server with hot reloading.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.

## Technologies Used

This project is built using the following technologies:

- **React**: For building the user interface.
- **Vite**: A fast build tool for optimized development.
- **Firebase**:
  - **Authentication**: For secure user login/signup.
  - **Firestore**: For storing transaction data.
  - **Storage**: For file uploads (optional).
- **Ant Design**: For UI components like tables and charts.
- **Netlify**: For deploying the app.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Folder Structure

The project follows this folder structure:

```
src/
├── components/
│   ├── Input
│   ├── Modals
│   ├── SignupSignin
│   └── TransactionsTable
└── utils/
    └── firebase.js
```

- **Input**: Contains form input components for adding and editing transactions.
- **Modals**: Contains modal components for confirmation and transaction details.
- **SignupSignin**: Handles user authentication components for login and signup.
- **TransactionsTable**: Displays financial transactions in a table format.
- **firebase.js**: Utility for interacting with Firebase services (Authentication, Firestore, Storage).

---

This updated README now includes the folder structure and additional details for your **MoneyMinder** project. Let me know if you'd like any further changes!
