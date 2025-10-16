# ERPGenie 🧞‍♂️

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A modern, full-stack, and open-source ERP (Enterprise Resource Planning) application built from the ground up. ERPGenie is designed to be a smart business companion, helping manage core business processes in one integrated system.

**[Live Demo (Soon!)](https://erp.bizgenie.com)**

---

## ✨ Key Features

ERPGenie is packed with essential modules to run a small to medium-sized business operation:

* 🔐 **Authentication:** Secure user registration and login system using JWT.
* 📊 **Dashboard & Analytics:** A central hub with real-time business statistics, including total revenue, top products, and top customers.
* 📦 **Product Management:** Full CRUD (Create, Read, Update, Delete) functionality for products.
* 📈 **Inventory Management:** Automatic stock tracking based on sales and purchases, with manual adjustment capabilities.
* 👥 **Contact Management:** Manage both Customers and Suppliers in a unified module.
* 💰 **Sales Order Cycle:** Create sales orders, which automatically validate and decrement product stock. View order lists and detailed summaries.
* 🚚 **Purchase Order Cycle:** Create purchase orders for suppliers and manage the goods receipt process, which automatically increments product stock.
* 👤 **User Profile Settings:** Users can update their personal information and change their password.

---

## 🛠️ Tech Stack

This project is a monorepo built with a modern, scalable, and type-safe stack.

* **Frontend (Web):**
    * [**Next.js**](https://nextjs.org/) - React Framework
    * [**TypeScript**](https://www.typescriptlang.org/) - Type-safe JavaScript
    * [**Tailwind CSS**](https://tailwindcss.com/) - Utility-First CSS Framework

* **Backend (API):**
    * [**Node.js**](https://nodejs.org/) - JavaScript Runtime
    * [**Express.js**](https://expressjs.com/) - Web Framework
    * [**Prisma**](https://www.prisma.io/) - Next-generation ORM
    * [**PostgreSQL**](https://www.postgresql.org/) - Relational Database

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js (v20 or later recommended)
* npm (or yarn/pnpm)
* PostgreSQL installed and running
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/lenidita120/erpgenie.git](https://github.com/lenidita120/erpgenie.git)
    cd erpgenie
    ```

2.  **Install dependencies:**
    This will install dependencies for both the `api` and `web` workspaces.
    ```bash
    npm install
    ```

3.  **Set up the database:**
    Log in to PostgreSQL and create the database and user.
    ```sql
    CREATE DATABASE erpgenie;
    CREATE USER erpgenie_user WITH PASSWORD 'yourpassword';
    GRANT ALL PRIVILEGES ON DATABASE erpgenie TO erpgenie_user;
    ```

4.  **Configure Environment Variables:**
    * **Backend:** Create a `.env` file in `packages/api/`. Use `.env.example` as a template.
        ```env
        DATABASE_URL="postgresql://erpgenie_user:yourpassword@localhost:5432/erpgenie"
        JWT_SECRET="your_super_secret_jwt_key"
        ```
    * **Frontend:** The frontend uses a default API URL (`http://localhost:5000/api`) which is suitable for local development.

5.  **Run Database Migration:**
    This command will create all the necessary tables in your database based on the Prisma schema.
    ```bash
    npx prisma migrate dev --schema=./packages/api/prisma/schema.prisma
    ```

6.  **Run the development servers:**
    This command will start both the frontend (on port 3000) and backend (on port 5000) concurrently.
    ```bash
    npm run dev
    ```

    You can now access the application at `http://localhost:3000`.

---

## 📁 Project Structure

This project is a monorepo managed by npm workspaces.

