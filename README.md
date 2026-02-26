# JS Backend Project

This repository contains a Node.js backend application built with Express and MongoDB (Mongoose).

## Project Structure

```
package.json
README.md
backend/
    package.json
    src/
        app.js
        index.js
        config/
            constans.js
            database.js
        controllers/
            user.controller.js
        models/
            usermodel.js
        routes/
            user.routes.js
```

- **backend/src/app.js** – Express setup and middleware configuration.
- **backend/src/index.js** – Entry point that starts the server.
- **backend/src/config/** – Configuration utilities such as database connection.
- **backend/src/controllers/** – Request handlers (e.g. user registration/login).
- **backend/src/models/** – Mongoose schemas and models.
- **backend/src/routes/** – Route definitions.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB running locally or accessible via connection string

## Setup

1. Clone the repository:
   ```bash
   git clone https://your-repo-url.git
   cd js-backend
   ```
2. Install root dependencies (if any):
   ```bash
   npm install
   ```
3. Navigate to backend folder and install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Configure environment variables as needed (e.g., `MONGO_URI`, `PORT`).

## Running the application

From the `backend` directory, start the server:

```bash
npm start
```

The API will be available at `http://localhost:3000` (or the configured port).

## API Endpoints

### User Registration

`POST /api/users/register` – create a new user. Body:

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### User Login

`POST /api/users/login` – authenticate user. Body:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Testing

TBD – add testing instructions when tests are available.

## License

MIT
