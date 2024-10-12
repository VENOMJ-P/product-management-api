# Product Management API

## Introduction

The **Product Management API** is a backend application designed to manage product data efficiently. It provides endpoints for creating, reading, updating, and deleting product information (CRUD operations) and integrates seamlessly with a MySQL database for storing product details. This project uses Node.js, Express, Sequelize (as ORM), and MySQL for database management.

## Features

- **Product CRUD Operations**: Create, Read, Update, and Delete product details.
- **Database Integration**: Uses MySQL for data storage and Sequelize for ORM.
- **RESTful API**: Designed with RESTful principles in mind.
- **Scalable Architecture**: Modular structure with routes, controllers, and services.
- **Environment Configuration**: Easy setup for development, staging, and production using environment variables.
- **Database Migrations**: Easily manage database schema with Sequelize migrations.

## Project Setup

Follow the steps below to get the project up and running on your local machine:

1. **Clone the project**  
   Open your terminal and run:

   ```bash
   git clone https://github.com/VENOMJ-P/product-management-api.git
   ```

2. **Install dependencies**  
   Navigate to the project directory and install the necessary npm packages:

   ```bash
   cd product-management-api
   npm install
   ```

3. **Create environment file (.env)**  
   In the root directory of the project, create a `.env` file and add the following environment variables:

   ```
   PORT=3000
   ```

4. **Initialize Sequelize**  
   To set up Sequelize, run the following command to initialize the configuration:

   ```bash
   npx sequelize init
   ```

5. **Database configuration**  
   Inside the `src/config` folder, create a new file named `config.json` and add the following configuration:

   ```json
   {
     "development": {
       "username": "<YOUR_DB_LOGIN>",
       "password": "<YOUR_DB_PASSWORD>",
       "database": "product_management_db",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

   Replace `<YOUR_DB_LOGIN>` and `<YOUR_DB_PASSWORD>` with your MySQL credentials.

6. **Create and migrate the database**  
   Run the following commands to create and migrate the database schema:

   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   ```

7. **Start the application**  
   Once everything is set up, you can start the application by running:

   ```bash
   npm start
   ```

   The API should now be running on `http://localhost:3000`.

## API Endpoints

Here are the available API endpoints:

- **GET /products**: Fetch all products.
- **POST /products**: Add a new product.
- **GET /products/:id**: Fetch a specific product by ID.
- **PUT /products/:id**: Update a specific product by ID.
- **DELETE /products/:id**: Delete a product by ID.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MySQL**: Relational database system.
- **Sequelize**: Promise-based Node.js ORM for MySQL.
- **dotenv**: For managing environment variables.

## Additional Notes

- Ensure you have MySQL installed on your machine and running before setting up the database.
- You can add more environment-specific configurations (for testing or production) in the `config.json` file under the respective environment keys.
