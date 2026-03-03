# 🎁 Corporate Khushiyaan
AI-Enabled Corporate Gifting Platform

Corporate Khushiyaan is a full-stack AI-powered gifting platform designed to simplify corporate gift selection and purchasing. The platform combines structured product browsing, secure authentication, cart management, and an intelligent AI assistant that provides real-time, budget-based gift recommendations.

## Index

- [Overview](#overview)
- [Demo Link](#demo-link).
- [Key Features](#key-features)
- [AI Assistant Architecture](#ai-assistant-architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
  


## Overview 

Corporate gifting often involves manual searching and decision-making. This platform streamlines the process through:

- Structured product browsing

- Secure user accounts

- Personalized cart management

- AI-driven gift recommendations

The AI assistant acts as a virtual sales consultant, guiding users based on occasion, budget, and requirements.

## Demo Link
   https://corporate-khushiyaan-fullstack-proj-pi.vercel.app/
   
## Key Features 
#### Authentication & User Management 

- User registration and login

- Secure session handling

- Personalized user experience

#### Product & Cart System 

- Product listing and detailed view

- Add to cart / remove from cart

- Budget-based product suggestions

- User-specific cart storage

#### AI Sales Assistant (Core Feature) 
 

- Real-time chat interface

- Intelligent gift recommendations

- Budget-based filtering

- Occasion-based suggestions

- Designed for future voice and personalization upgrades

### AI Assistant Architecture 

- User submits a query through chat UI.

- Frontend sends request to backend AI route.

- Backend processes request and connects with AI service.

- AI generates contextual recommendations.

- Response displayed dynamically in chat interface.

- The assistant enhances decision-making by acting like a digital sales advisor.

## Technology Stack 
#### Frontend

React.js

HTML5 & CSS3

JavaScript (ES6)

Axios

React Router DOM

#### Backend

Node.js

Express.js

RESTful APIs

#### Database

MongoDB Atlas

Mongoose ODM

#### Deployment & Tools

Frontend: Vercel

Backend: Render

Version Control: Git & GitHub

## Project Structure

```bash
Corporate_Khushiyaan_Fullstack_Project/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── build/
│   ├── public/
│   ├── src/
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation & Setup
#### 1. Clone Repository
git clone <repository-url>

#### 2. Backend Setup
cd backend
npm install
npm run dev

Create .env file inside backend:

MONGO_URI=your_mongodb_connection,

JWT_SECRET=your_secret_key,

AI_API_KEY=your_ai_key

#### 3. Frontend Setup
cd frontend
npm install
npm start

