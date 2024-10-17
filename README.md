# Fullstack Authentication System

## 🚀 Overview

This project is a **fullstack authentication system** built with modern web technologies. The frontend is powered by **React**, while the backend utilizes **Express**. **SQL Server** is the database of choice, managed using the **Sequelize ORM**. The system includes essential features like user registration, login, role-based access control, and secure authentication with **JWT**.

---

## ✨ Features

- **Fullstack**: React (frontend) and Express (backend) implementation.
- **Role-based access control**: Admin and user roles.
- **Secure authentication**: JWT for token-based authorization.
- **Database**: SQL Server managed through Sequelize ORM.
- **User-friendly**: Clean React-based frontend.

---

## 🛠️ Tech Stack

**Frontend**:

- React (hooks and context)

**Backend**:

- Node.js (Express)

**Database**:

- SQL Server
- Sequelize ORM

**Authentication**:

- JWT (JSON Web Token)

**Validation**:

- Joi

---

## ⚙️ Installation

### Backend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/auth-system.git
   cd auth-system/backend
   ```
2. **Install backend dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   ```bash
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```
4. **Run database migrations**:
   ```bash
   npm run migration:db
   ```
5. **Start the backend server**:
   ```bash
   npm run dev
   ```

### Frontend

1. **Navigate to the frontend directory**:
   ```bash
   cd .../frontend
   ```
2. **Install backend dependencies**:
   ```bash
   npm install
   ```
3. **Start the frontend development serve**:
   ```bash
   npm run dev
   ```

## 💻 Usage

1. Access the application via the frontend at http://localhost:3000.
2. Sign up or log in to access protected routes.
3. Admins can access admin-only features via the admin dashboard.

## 📋 API Endpoints

1. **Authentication**:

```bash
  POST /auth/register
  Register a new user.
```

```bash
  POST /auth/login
  Log in as an existing user.
```

2. **User**:

```bash
  POST /auth/register
  Register a new user.
```

```bash
  POST /auth/login
  Log in as an existing user.
```

3. **Role**:

```bash
  POST /auth/register
  Register a new user.
```

```bash
  POST /auth/login
  Log in as an existing user.
```

## ⚛️ Frontend Structure

- **Framework:** React
- **Routing:** React Router
- **State management:** React hooks and context API
- **Authentication:** JWT tokens stored in localStorage or sessionStorage to maintain user sessions.

## 🏗️ Backend Structure

- **Framework:** Express (Node.js)
- **ORM:** Sequelize
- **Database:** SQL Server (configured through Sequelize)
- **Authentication:** JWT (handled in Express middleware)

## 🤝 Contributing

Want to contribute? Great! Here's how:

- **Fork:** The repository
- **Create a feature branch:** git checkout -b my-feature.
- **Commit :** git commit -m 'Add some feature'.
- **Push:** git push origin my-feature
- **Submit a pull request**
