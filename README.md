# 🎉 Voting App

## 📜 Overview

The Voting App is a **full-stack web application** designed to facilitate elections. Built with React for the frontend, Express and Node.js for the backend, and MongoDB for the database, this application allows users to register as candidates or voters, participate in elections, and view results. The entire project has been Dockerized for simplified deployment and management.

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## 📁 Project Structure

- `ui/`: Contains the React frontend application, including all components, pages, and styling.
- `server/`: Contains the Express backend application, including API routes, server configuration, and middleware.
- `Dockerfile`: Configures Docker for the backend service, specifying build and runtime instructions.
- `docker-compose.yml`: Manages multi-container Docker applications, orchestrating the deployment of both frontend and backend services.

## ✨ Features

- **Candidate Registration**: Register with details such as name, student ID, DOB, and email.
- **Voter Registration**: Register and await approval from officials to participate in elections.
- **Election Participation**: Approved voters can view candidates and cast their votes.
- **Results Viewing**: View election results after the election period ends.

## 🚀 Getting Started

### Prerequisites

- **Docker**: Ensure Docker is installed on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Ensure Docker Compose is installed. [Install Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Build and start the application**:

    ```bash
    docker-compose up --build
    ```

    This command builds the Docker images and starts the containers for both frontend and backend services.

## 🖥️ Usage

- **Frontend**: Access the application at [http://localhost:3000](http://localhost:3000)
- **Backend**: The backend API is available at [http://localhost:5000](http://localhost:5000)

## ⚙️ Configuration

- **Environment Variables**: Configure any required environment variables in the `.env` file.

    Create a `.env` file in the root directory with the following variables:
    - `MONGO_URI`: URI of your MongoDB database
    - `JWT_SECRET`: Secret key for JWTs

## 🧪 Testing

- **Run Tests**: Implement and run tests as needed for your application.

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests. Contributions are welcome!

## 📹 Video Demonstration & Flowchart

- [Video Demonstration & Flowchart](https://drive.google.com/drive/folders/1zBVnMeQQvL7K1V7SPC53NUFqC_ET4bVY?usp=sharing)

- [Flowdiagram of Officials](https://github.com/vishnuajithg/voting-app-reactjs/blob/main/Documentation/FlowDiagrams/Officials.jpg)

- [Flowdiagram Candidates](https://github.com/vishnuajithg/voting-app-reactjs/blob/main/Documentation/FlowDiagrams/CANDIDATE.jpg)

- [Flowdiagram Voters](https://github.com/vishnuajithg/voting-app-reactjs/blob/main/Documentation/FlowDiagrams/VOTER.jpg)


