# 🧳 Traveloop Backend

1123102098 - RHEGYSA ALVYANTHI JUNIARTHA
1123102100 - ARIENTA AULIA HAPSARI
1123102116 - IMAS NABELLIA VENDA
1123102148 - PASYA WAHYU PERMATA NINGSIH
This is the backend API for the **Traveloop** mobile travel application.  
Built using **Node.js**, **Express**, and **MongoDB**, this backend powers booking features, destination data, user authentication, and transaction processing for the Traveloop app.

---

## 🚀 Features

- 🔐 User Authentication (Register & Login)
- 🗺️ Destination & Tour Package Management
- 📦 Booking & Transaction APIs
- 💬 AI-based Travel Recommendation Support
- 📡 RESTful API with JSON response

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **dotenv**
- **cors**
- **body-parser**
- (Optional) **JWT** for authentication

---

## 📂 Folder Structure

TraveloopBackend/
├── models/
│ └── User.js, Booking.js, Destinasi.js, etc.
├── routes/
│ └── auth.js, booking.js, destinasi.js, etc.
├── controllers/
├── config/
│ └── db.js
├── .env
├── server.js
└── package.json


---

## ⚙️ Environment Variables

Create a `.env` file in the root folder and include:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


---

## 🚦 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
