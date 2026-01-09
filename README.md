# AdaptAid

What is AdaptAid?

AdaptAid is a full-stack web application built to demonstrate practical implementation of frontend–backend integration using modern web technologies.

The application enables users to submit patient information through a web interface, which is then processed by an Express-based backend, validated for correctness and duplication, and securely stored in a MongoDB database. The project follows a modular structure with clearly defined routes, models, and frontend assets, reflecting real-world web application architecture.

AdaptAid includes multiple backend routes for patient registration, user login, and partner interactions, showcasing RESTful API design, server-side validation, and database persistence using Mongoose. The frontend is implemented using static HTML, CSS, and JavaScript, focusing on form handling and HTTP communication with the backend.

This project was developed as a learning-focused full-stack implementation, emphasizing clarity of data flow, maintainable code structure, and hands-on understanding of how client-side and server-side components interact in a web application.

The application allows users to submit patient information via a frontend form, which is then processed, validated, and stored in MongoDB through Express routes. It also includes basic login and partner-related routes to demonstrate multi-route backend architecture.

This project was built as a learning-oriented full-stack implementation, emphasizing clarity, modular structure, and practical understanding of how frontend and backend systems interact in a real application.

This repository contains the AdaptAid web project with a backend (Express + MongoDB) and a frontend (static HTML/CSS/JS). This README explains, step-by-step, how to run the project locally, how the end-to-end flow works, and how to verify data is saved to MongoDB.

## Repo layout (important files)
- `ADAPTAID WEB BE/` — backend (Express, EJS views, routes, Mongoose models)
  - `server.js` — main Express server
  - `routes/` — route handlers (e.g. `patients.js`, `loginRoutes.js`, `partnersRoutes.js`)
  - `models/` — Mongoose schemas (e.g. `Patient.js`, `user.js`, `Partner.js`)
  - `package.json` — scripts & dependencies
- `ADAPTAID WEB FE/` — frontend static files (HTML/CSS/JS)
  - `Patient.html` — patient login form that POSTs to `/patients`
  - `Home.html`, `partners.html`, etc.

## Prerequisites
- Node.js (v18+ recommended) and `npm`
- MongoDB running locally (or use a remote MongoDB URI)

## Backend — Setup and run

1. Open a terminal in the backend folder:

```powershell
cd "c:\Users\dell\OneDrive\Desktop\SEM 3\WEB D\EVALUATION WEB D\ADAPTAID WEB BE"
```

2. Install dependencies (if not already):

```powershell
npm install
```

3. Configure environment (optional but recommended):
- The server currently connects to MongoDB at `mongodb://127.0.0.1:27017/adaptaid` in `server.js`.
- To use an env file, create a `.env` at the backend folder and set `MONGO_URI` and other secrets. (If you add `.env`, do NOT commit it.)

4. Run in development mode (auto-restarts with changes):

```powershell
npm run dev
```

Or run without auto-reload:

```powershell
npm start
```

You should see logs like `MongoDB Connected` and `Server running on http://localhost:3000`.

## Frontend — Options to open

Option A — Serve frontend from backend (recommended single origin):
- The backend is configured to serve the `ADAPTAID WEB FE` folder statically. Open in browser:

```
http://localhost:3000/Patient.html
```

Option B — Use Live Server / static host (another origin):
- If you open `Patient.html` with Live Server at `http://127.0.0.1:5500/Patient.html`, the frontend will still POST to the backend because CORS is enabled in the backend.

## End-to-end flow (Patient form example)

1. User opens `Patient.html` and fills name, email, phone.
2. On submit, browser JavaScript sends a JSON POST to `http://localhost:3000/patients`:

```http
POST /patients
Content-Type: application/json

{ "name": "A Name", "email": "a@b.com", "phone": "1234567890" }
```

3. Backend route `routes/patients.js` validates fields, checks duplicates (by email or phone) and creates a new `Patient` document in MongoDB.
4. Backend responds with JSON `{ message: 'Patient saved', patient: {...} }` on success.

## API endpoints (current)
- `POST /patients` — Create patient (body: `name`, `email`, `phone`) — returns 201 on success or 409 if already exists.
- `GET /login` — Render login page (EJS view)
- `POST /login/send-otp` — Receives `name`, `email`, `phone`, creates a `user` document with a fake OTP (currently `1234`) and returns a simple text response.
- `GET /partners` — Renders partners page (EJS)

Use `curl` to test `POST /patients`:

```powershell
curl -X POST http://localhost:3000/patients -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"t@test.com\",\"phone\":\"9999999999\"}"
```

## Verify data saved in MongoDB
1. Start `mongosh` and run:

```javascript
use adaptaid
db.patients.find().pretty()
```

You should see documents with `name`, `email`, `phone`, and `createdAt`.

## Common issues & troubleshooting
- 405 from port 5500: Means your frontend (Live Server) tried to handle the POST itself — ensure your fetch target is the backend `http://localhost:3000/patients` or serve the frontend from the backend origin.
- `Unexpected end of JSON input`: Means the response body was not valid JSON (e.g., an HTML error page). The frontend now tries to parse JSON safely.
- `MODULE_NOT_FOUND` for route imports: Confirm `require()` matches actual file names (we fixed `partnersRoutes.js`).

## Security notes & recommended improvements
- Do NOT store plain OTPs or passwords in production. Use hashing (`bcrypt`) and/or sign tokens.
- Store secrets in `.env` and never commit them. If secrets were pushed, rotate them immediately.
- Add validation (email format, phone normalization) and rate-limit OTP endpoints to prevent abuse.
- Use HTTPS in production.

## Git & push notes
- `.gitignore` added at repo root to ignore `node_modules`, `.env`, logs, and editor files.
- If `node_modules` or `.env` were already committed, remove them from the git index before pushing:

```powershell
git rm -r --cached node_modules
git rm --cached ADAPTAID\ WEB\ BE/.env
git add .gitignore
git commit -m "Remove tracked ignored files and add .gitignore"
git push origin main
```

## Next steps you can request
- Add OTP verification endpoint (verify OTP and sign session token)
- Hash OTPs and add expiry timestamps
- Add unique index in Mongoose for `email`/`phone`
- Improve frontend UX (toasts, modal) and validations

---

If you want, I can update the README in Hindi or add screenshots/sequence diagrams. Batado kya format chahiye (Hindi/English)?
