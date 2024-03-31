# Full-Stack ATM Program

Welcome to the Full-Stack ATM Program! This project aims to provide a full-stack solution for simulating ATM transactions.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## <a name="introduction"></a>Introduction

This project implements a full-stack ATM system where users can perform various banking transactions such as withdrawal, deposit, balance inquiry, etc. The frontend is built using React.js with Tailwind CSS for styling, while the backend is developed using Node.js with Express.js framework and MongoDB for data storage.

## <a name="technologies"></a>Technologies

- **Frontend:**
  - React.js
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## <a name="features"></a>Features

- User authentication and authorization
- Withdrawal and deposit transactions
- Balance inquiry
- Transaction history
- Admin dashboard for managing users and transactions

## <a name="installation"></a>Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aaqilyousuf/cardless-atm-tansaction.git

2. **Install dependencies:**

   ```bash
   cd client
   npm install

3. **Set up environment variables:**

Create a .env file in the root directory and add the following variables:

    ```bash
    PORT=3001
    MONGODB_URI=<your-mongodb-uri>
    SECRET_KEY=<your-secret-key-for-jwt>

4. **Run the backend server:**
   
   ```bash
   npm run server
5. **Run the frontend development server:**
   
   ```bash
   npm start

6. **Usage**

Once the server is running and the frontend is started, you can access the application in your web browser at http://localhost:3000.

7. **License**

This project is licensed under the MIT License.
