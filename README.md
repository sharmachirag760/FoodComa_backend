# 🍕 Pizza Ordering Web App

A full-stack Pizza Ordering application built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project demonstrates dynamic product listing, shopping cart management, secure authentication, and admin order handling.  

---

## 🚀 Features
- User authentication & authorization (JWT-based login/signup).
- Browse available pizzas with **dynamic product listing**.
- Add to Cart, Update Quantity, and Remove items.
- Real-time price calculation and order summary.
- **Admin Dashboard**:
  - Manage pizzas (add/update/delete).
  - Track and update order statuses.
  - Manage inventory.
- Responsive UI for mobile and desktop.

---

## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT, bcrypt
- **State Management**: React Context API / Redux (choose one based on implementation)

---

## 📂 Project Structure
Pizza-App/
│── backend/ # Node.js + Express server
│ ├── models/ # MongoDB models
│ ├── routes/ # API routes
│ └── controllers/ # Business logic
│
│── frontend/ # React app
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── context/ # State management
│
│── package.json
│── README.md

yaml
Copy
Edit

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB installed locally or use [MongoDB Atlas](https://www.mongodb.com/atlas)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/pizza-app.git
   cd pizza-app
Install dependencies for both frontend and backend:

bash
Copy
Edit
cd backend && npm install
cd ../frontend && npm install
Create a .env file inside backend/:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the app:

bash
Copy
Edit
# In backend folder
npm run server

# In frontend folder
npm start
🎯 Future Enhancements
Payment Gateway integration (Stripe/PayPal).

Push notifications for order updates.

Multi-role admin access (e.g., Manager, Staff).

Dark Mode toggle for UI.

📜 License
This project is licensed under the MIT License.
