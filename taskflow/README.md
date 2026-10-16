# TaskFlow — Korean-inspired project management app

## Stack
React + Vite, CSS, Node.js + Express, MongoDB/Mongoose, JWT authentication, Socket.IO.

## Run locally
1. Install Node.js (LTS) and MongoDB Community, or create a free MongoDB Atlas cluster.
2. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and a long `JWT_SECRET`.
3. From this folder run `npm install`, then `npm run install:all`, then `npm run dev`.
4. Frontend: http://localhost:5173 · API: http://localhost:5000

The interface includes a demo-friendly board with task creation, status changes, project creation, comments, login/register, and Socket.IO event wiring. Authenticated API routes persist projects, tasks, and comments to MongoDB. For production, add rate limiting, email verification/password reset, stronger role/ownership checks, input validation, and deployment secrets.
