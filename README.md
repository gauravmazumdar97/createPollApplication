# 📊 Voting Bar Chart with Socket.IO

This project demonstrates a real-time voting application using a bar chart to display votes. The frontend is built with React and Material-UI, and the backend is powered by Node.js and Socket.IO. Each user can vote only once per session, and the votes are updated in real-time for all connected clients.

## ✨ Features

- ⚡ Real-time updates using Socket.IO
- 📊 Bar chart visualization of votes
- 🔒 Users can vote only once per connection
- 📱 Responsive design with Material-UI

## 🛠️ Tech Stack

- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express, Socket.IO

## 📹 Screenshot

![Screenshot CreateReact Application](https://github.com/gauravmazumdar97/createPollApplication/assets/83352265/8531ac0b-ef4d-4fe3-ab93-3d239257b265)


## 📹 Video Tutorial

https://github.com/gauravmazumdar97/createPollApplication/assets/83352265/d5ca1d16-3bb1-4b6d-a3ee-b4003428653e



## 🚀 Getting Started

### 📋 Prerequisites

- Node.js

### 📦 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/voting-bar-chart.git
    cd voting-bar-chart
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    # For backend
    cd backend
    npm install
    
    # For frontend
    cd ../frontend
    npm install
    ```

### ▶️ Running the Application

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

    The backend server will run on `http://localhost:3001`.

2. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

### 🗂️ Project Structure

```markdown
voting-bar-chart/
├── backend/
│   ├── index.js
│   ├── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── README.md
