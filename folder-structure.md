## npx prisma db push
- This command runs on the terminal and is used to connect for the very first time with database.
- In this project, the neon is been used as the database. So, after creating the model user with Prisma
it will create in the neon the table user and its respectives atributes.
-If already exists a database, the correct way to do it would be through "migrations"ks

# Project Folder Structure Documentation

This document explains the structure of the project and describes the purpose of each folder and file.

## Root

```
├── docs/
│   └── ping.http
├── node_modules/
├── src/
│   └── features/
│       └── ping/

│   └── server.js
├── package.json
├── package-lock.json
```

---

## Folders and Files Description

### `docs/`
- Contains HTTP request documentation samples for testing endpoints.
- `ping.http`: HTTP request example file for testing the ping route.

### `node_modules/`
- Auto-generated folder containing all the dependencies defined in `package.json`.

### `src/`
- Main source code of the application.

#### `features/ping/`
- Feature folder responsible for handling the "ping" functionality of the app.
- Usually includes route, controller, and test files for the feature.
- route.js: responsible for the definition/structure of the ping route.
- endpoint.js: TODO
#### /signup
--

### `loaders`
- This will be responsible for load all the routes in the server and prevents the inconsistencies or forgetfulness about the importing, What could happening in major projects that have a lot of routes.

#### `server.js`
- Entry point of the application, where the server is set up and started.

### `package.json`
- Project metadata and dependency definitions.

### `package-lock.json`
- Automatically generated file that locks the version of installed dependencies for consistency.

---

