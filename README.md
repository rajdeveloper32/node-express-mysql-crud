💡 Why This Project?

Basic CRUD (Create, Read, Update, Delete) operations form the foundation of nearly every web application. Whether you're building a blog, an e-commerce site, a user management system, or an admin panel — at the core, you need functionality to manage data.

This project demonstrates how to implement robust and secure CRUD APIs using Express.js with MySQL, following best practices like:

JWT-based authentication

Input validation

Password encryption

Modular structure using Sequelize ORM

It serves as a solid boilerplate for most Express-based backend applications.

# Express MySQL CRUD API with JWT Authentication

A secure and scalable RESTful API built with **Node.js**, **Express.js**, **MySQL**, and **Sequelize ORM**.  
Supports user registration, login with JWT authentication, and full CRUD operations on user data.

---

## Features

- User registration with input validation
- User login with JWT-based authentication
- Password hashing with bcrypt
- CRUD operations: Create, Read, Update, Delete users
- Validation with `express-validator`
- Modular and clean project structure
- Professional error handling with consistent JSON responses

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT (jsonwebtoken)
- bcrypt
- express-validator

---

## Prerequisites

- Node.js (v14 or above)
- MySQL server
- Git

---

## Getting Started

### Clone the repo

```bash
git clone https://github.com/rajdeveloper32/node-express-mysql-crud.git
cd node-express-mysql-crud

Install dependencies

npm install

---

Setup environment variables
Create a .env file in the root directory and add the following:

PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret_key

---

Initialize the database
Make sure your MySQL server is running and the database specified in .env exists.
You can create the database manually if it doesn’t exist:

CREATE DATABASE your_database_name;

npm run dev
The server will start on the port specified in .env (default: 3000).

---

API Endpoints

| Method | Endpoint             | Description                  | Protected |
| ------ | -------------------- | ---------------------------- | --------- |
| POST   | `/api/auth/register` | Register a new user          | No        |
| POST   | `/api/auth/login`    | Login user and receive token | No        |
| GET    | `/api/users`         | Get all users                | Yes       |
| GET    | `/api/users/:id`     | Get user by ID               | Yes       |
| PUT    | `/api/users/:id`     | Update user by ID            | Yes       |
| DELETE | `/api/users/:id`     | Delete user by ID            | Yes       |


---
Usage Example

Register a User

POST /api/auth/register
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

---
Login a User

POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

---

Access Protected Routes
Include the JWT token in the Authorization header:

Authorization: Bearer <your_token_here>

---

I have also added the Postman collection. You can download and import it into Postman to test the APIs directly from there.

Contributing
Feel free to fork this repo and submit pull requests.
For major changes, please open an issue first to discuss what you would like to change.

