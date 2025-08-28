# Hotel Guest Management

A simple full-stack mini-project for managing hotel guests.  
Built with **React + Vite + TypeScript + TailwindCSS** on the frontend, and **PocketBase** (SQLite) as the backend.

---

## 📂 Project Structure
```
hotel-guest-management/
├── client/              
├── server/              
│   ├── pocketbase.exe   
│   ├── pb_migrations/   
│   └── README.md        
└── README.md           
```

---

## ⚙️ Backend (PocketBase)

### 1. Setup

1. Open a terminal in the `server/` folder.
2. Run PocketBase:
   ```powershell
   .\pocketbase.exe serve
   ```
3. The server will start at:

API → http://127.0.0.1:8090
Admin UI → http://127.0.0.1:8090/_/

### 2. Admin UI Login 
(has provided on Server folder README.md file.)

---

## 💻 Frontend (React + Vite)

### 1. Setup

1. Open a terminal in the client/ folder.
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create a .env file in client/ with:
   ```
   VITE_PB_URL=http://127.0.0.1:8090
   ```
### 2. Run the App
   ```powershell
   npm run dev
   ```

The frontend will start at:
http://localhost:5173

## Application Routes
```
/guests → List all guests (with search & filter)
/guests/new → Add a new guest
/guests/:id → View / Edit / Delete guest details
```
### Thank you





