# 🎁 Corporate Khushiyaan
AI-Enabled Corporate Gifting Platform

Corporate Khushiyaan is a full-stack AI-powered gifting platform designed to simplify corporate gift selection and purchasing. The platform combines structured product browsing, secure authentication, cart management, and an intelligent AI assistant that provides real-time, budget-based gift recommendations.

## 📑 Table of Contents

Overview

Key Features

AI Assistant Architecture

Technology Stack

Project Structure

Installation & Setup

Application Workflow

Security Implementation

Future Enhancements

Project Objective

## 📌 Overview

Corporate gifting often involves manual searching and decision-making. This platform streamlines the process through:

Structured product browsing

Secure user accounts

Personalized cart management

AI-driven gift recommendations

The AI assistant acts as a virtual sales consultant, guiding users based on occasion, budget, and requirements.

## 🚀 Key Features
### 🔐 Authentication & User Management

User registration and login

Secure session handling

Personalized user experience

### 🛍️ Product & Cart System

Product listing and detailed view

Add to cart / remove from cart

Budget-based product suggestions

User-specific cart storage

###
🤖 AI Sales Assistant (Core Feature)

Real-time chat interface

Intelligent gift recommendations

Budget-based filtering

Occasion-based suggestions

Designed for future voice and personalization upgrades

### 🧠 AI Assistant Architecture

User submits a query through chat UI.

Frontend sends request to backend AI route.

Backend processes request and connects with AI service.

AI generates contextual recommendations.

Response displayed dynamically in chat interface.

The assistant enhances decision-making by acting like a digital sales advisor.

### 🛠️ Technology Stack
Frontend

React.js

HTML5 & CSS3

JavaScript (ES6)

Axios

React Router DOM

Backend

Node.js

Express.js

RESTful APIs

Database

MongoDB Atlas

Mongoose ODM

Deployment & Tools

Frontend: Vercel

Backend: Render

Version Control: Git & GitHub

📂 Project Structure
corporate-khushiyaan/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <repository-url>
2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create .env file inside backend:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
AI_API_KEY=your_ai_key
3️⃣ Frontend Setup
cd frontend
npm install
npm start
🔄 Application Workflow

User registers or logs in

Products are fetched from database

User browses and adds items to cart

AI assistant provides gift suggestions

User finalizes selection

🔒 Security Implementation

Secure authentication

Protected API routes

Environment-based secret handling

Structured backend routing
