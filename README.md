# Voting App

This is a full-stack web application for conducting online voting. The application is built with a MongoDB database, a Node.js server, and a React frontend.

## Tech Stack

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Database: MongoDB

## Features

- User authentication and authorization
- User registration
- Candidate registration
- Vote casting
- Election start and stop
- View candidate applications
- View voter registrations
- View election results

## Installation

- Clone the repository
- Run `npm install` in the root directory
- Run `npm install` in the `server` and `votingAppUI` directories
- Create a `.env` file in the root directory with the following variables:
  - `MONGO_URI`: the URI of your MongoDB database
  - `JWT_SECRET`: a secret key for generating JWTs
- Run `npm run start` in the root directory to start the server and frontend

or 

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/voting-app.git
    ```

2. Navigate to the project directory:

    ```sh
    cd voting-app
    ```

3. Install server dependencies:

    ```sh
    cd server
    npm install
    ```

4. Install client dependencies:

    ```sh
    cd ../ui
    npm install
    ```

## Usage

1. Start the backend server:

    ```sh
    cd server
    npm start
    ```

    The server will run on `http://localhost:5000`.

2. Start the frontend development server:

    ```sh
    cd ../ui
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## How to Use

- Register as a voter or candidate
- Login to your account
- If you are a voter, you can view the candidates and cast your vote
- If you are a candidate, you can view the voters and apply to run in the election
- If you are an official, you can view the candidates and voters, and start and stop the election

## Video Demonstration & Flowchart: 
- [Video Demonstration & Flowchart](https://drive.google.com/drive/folders/1zBVnMeQQvL7K1V7SPC53NUFqC_ET4bVY?usp=sharing)
