<<<<<<< HEAD
# ShopEZ - E-Commerce Platform

A full-stack e-commerce application built with **Node.js + Express + MongoDB** (backend) and **React** (frontend).

---

## Project Structure

```
shopez-ecommerce/
├── backend/    # Node.js + Express + MongoDB REST API
├── frontend/   # React SPA
└── docs/       # ER diagram, API docs
```

---

## Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB (local or Atlas)
- npm >= 9.x

### Installation

#### 1. Clone the repo
```bash
git clone <repo-url>
cd shopez-ecommerce
```

#### 2. Install backend dependencies
```bash
cd backend
npm install
```

#### 3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

#### 4. Configure environment variables

Copy the example env files and fill in the values:

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

### Running the App

#### Backend (development)
```bash
cd backend
npm run dev
```

#### Frontend (development)
```bash
cd frontend
npm start
```

---

## Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Backend   | Node.js, Express.js        |
| Database  | MongoDB + Mongoose         |
| Auth      | JWT                        |
| Frontend  | React, React Router, Axios |
| Payments  | Stripe / Razorpay (TBD)   |

---

## API Docs
See [`docs/API-docs.md`](docs/API-docs.md) — to be filled in by the backend team.
=======
# smartbridge
>>>>>>> 63d9d8fb249e3caa601732185696d4dec95d29dc
