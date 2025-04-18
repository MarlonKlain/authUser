## Authentication API Project with Node.js, Fastify, and JWT (Study)

This project was developed as a learning exercise, following the video tutorial "[Autenticação JWT no Node.js com Fastify - Guia Completo e Seguro!](https://www.youtube.com/watch?v=qbMxwtGVLV4)". The main goal was to deepen knowledge in building secure REST APIs using a modern Node.js stack and how to authenticate a user properly.

### Purpose

Developing this API served to practice and consolidate concepts of:

* User authentication using JSON Web Tokens (JWT).
* API creation with the Fastify framework.
* Database interaction with PostgreSQL using the Prisma ORM.
* Best practices for project organization and security in backend applications.

### Technologies Used

* **Runtime:** Node.js
* **Package Manager:** npm
* **Web Framework:** Fastify (chosen for performance and active community)
* **ORM:** Prisma (for modeling, migrations, and database access)
* **Database:** PostgreSQL (using Neon DB for a serverless instance)
* **Authentication:** JSON Web Tokens (JWT)
* **Password Hashing:** Argon2 (mentioned as the library used for password security)
* **Utilities:** `glob` (for automatic route loading)

### Implemented Features

The developed API includes the following endpoints:

1.  **User Registration (`POST /users`):**
    * Receives `name`, `username`, and `password`.
    * Checks if the `username` already exists in the database.
    * Hashes the password before saving.
    * Saves the new user to the PostgreSQL database via Prisma.
2.  **User Authentication (`POST /sessions`):**
    * Receives `username` and `password`.
    * Checks if the user exists.
    * Securely compares the provided password with the stored hash (using Argon2).
    * Generates a JWT token containing user information (like ID) if credentials are valid.
    * Returns the JWT token to the client.
3.  **Get Authenticated User Data (`GET /me`):**
    * Protected route requiring a valid JWT token in the `Authorization` header (Bearer Token).
    * Verifies the validity of the JWT token.
    * Extracts the user ID from the token's payload.
    * Fetches and returns the user data (ID, name, username) corresponding to the token.
4.  **Ping/Health Check (`GET /ping`):**
    * A simple endpoint to check if the API is online.

### Key Concepts Learned and Practiced

* **Project Structure:** Code organization based on *features* rather than traditional MVC.
* **Fastify Configuration:** Server initialization, enabling logs (`logger: true`), defining routes (`server.get`, `server.post`).
* **Prisma:**
    * Schema Definition (`schema.prisma`) with models and constraints (`@unique`).
    * Synchronizing the schema with the database (`prisma db push`).
    * Using Prisma Client for CRUD operations (`prisma.user.findUnique`, `prisma.user.create`).
    * Configuring the database connection (including SSL for Neon DB).
* **Security:**
    * Password hashing with Argon2 for secure storage.
    * Secure password comparison during login.
    * Implementation of JWT-based authentication (generation, validation, and use for protecting routes).
    * Handling authentication and authorization errors (returning `400` and `401` status codes).
    * User existence validation before registration.
    * Best practices when validating credentials (avoiding indicating *which* field is incorrect).
* **Routes and Validation:**
    * Definition of request and response schemas for validation and documentation (facilitating Swagger integration).
    * Automatic loading of route files using `glob`.
* **Simple Testing:** Using `.http` files (with the VSCode REST Client extension) to test the API endpoints.
* **Environment Variables:** Mentioned as a point of improvement/challenge (storing secrets like the JWT secret and database URL).

This project was an excellent opportunity to apply theoretical knowledge in a practical scenario, resulting in a functional and secure API with relevant technologies in the market.

---
