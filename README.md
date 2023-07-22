# MERN | Login and Registration with JWT and OAuth

This is a demo project showcasing a basic login and registration system implemented using the MERN stack (MongoDB, Express.js, React, and Node.js). The project also integrates JWT (JSON Web Tokens) for authentication and 0Auth for additional authentication options.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [License](#license)

## Introduction

The purpose of this project is to demonstrate how to build a basic login and registration system using the MERN stack, JWT, and 0Auth. It provides a boilerplate codebase that can be extended and customized for more complex applications that require user authentication and authorization.

## Features

- User registration with email and password
- User login with email and password
- User authentication using JWT (JSON Web Tokens)
- OAuth support for additional authentication options (e.g., Google, Facebook, etc.)

## Technologies Used

- **MERN Stack:**
  - MongoDB: A NoSQL database for storing user information.
  - Express.js: A web application framework for Node.js to handle backend API requests.
  - React: A frontend JavaScript library for building user interfaces.
  - Node.js: A JavaScript runtime for executing server-side code.

- **JWT (JSON Web Tokens):** A secure way of transmitting information between parties as a JSON object.

- **OAuth:** An open standard for access delegation that allows users to share their resources stored on one website with another website.


<p><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40">&nbsp;  &nbsp;  &nbsp;  &nbsp;  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40">&nbsp;  &nbsp;  &nbsp;  &nbsp;  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40">&nbsp;  &nbsp;  &nbsp;  &nbsp;  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"></p>


## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB server is running)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SandupaAbeywardana/MERN-Login-JWT-OAuth.git
cd MERN-Login-JWT-OAuth
```

2. Install the backend dependencies:

```bash
cd server
npm install
```

3. Install the frontend dependencies:

```bash
cd ../client
npm install
```

## Configuration

Before running the application, you need to configure some environment variables. Create a `.env` file in the `server` directory and provide the following variables:

```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key_for_jwt
```

## Usage

To start the development server, follow these steps:

1. Start the backend server (from the `server` directory):

```bash
npm start
```

2. Start the frontend development server (from the `client` directory):

```bash
npm start
```

The frontend will be accessible at `http://localhost:8085`, and the backend API will be available at `http://localhost:3005`.

## API Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Authenticate and login an existing user.

Additional endpoints can be added as per the project requirements.

## Authentication

The project uses JWT (JSON Web Tokens) for user authentication. When a user logs in or registers successfully, a token will be generated and sent back to the client. The client should include this token in the header of subsequent API requests to access protected routes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contribution

Contributions to the project are welcome. If you find a bug or want to add new features, feel free to create an issue or submit a pull request.

<a href="https://github.com/SandupaAbeywardana/MERN-Login-JWT-OAuth/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SandupaAbeywardana/MERN-Login-JWT-OAuth" />
</a>

---

**Note:** This is a demo project and should not be used as-is in production environments. Proper security measures and additional features should be implemented before deploying it to a production environment.
