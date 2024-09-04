# Node.js Express with MongoDB Atlas

## Project Setup

This project demonstrates how to set up a Node.js server using Express and connect it to a MongoDB database hosted on MongoDB Atlas.

## Prerequisites

Ensure you have the following installed on your local machine:

Node.js (v14.x or later)
npm (Node Package Manager)
MongoDB Atlas Account

## Step 1: Initialize a New Node.js Project

Create a new directory for your project:

mkdir express-mongodb
cd express-mongodb

Initialize a new Node.js project:

npm init -y

Install Express and Mongoose:

npm install express mongoose

Step 2: Create the Express Server:

Create an index.js file in the root of your project

Step 3: Set Up MongoDB Atlas

1.Sign in to MongoDB Atlas.

2.Create a new cluster (or use an existing one).
3.In the cluster dashboard, go to the "Database Access" tab and create a new user with appropriate permissions.

4.In the "Network Access" tab, allow access from anywhere by adding 0.0.0.0/0 as an IP whitelist (or restrict to your IP if preferred).

5.Go to the "Clusters" tab, and click "Connect". Choose "Connect your application" and copy the connection string provided.

Step 4: Connect to MongoDB Atlas

1.Install the dotenv package to manage environment variables:

npm install dotenv

2.Create a .env file in the root of your project and add your MongoDB Atlas connection string:

MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/your-database-name

Replace username and password and database name with your MongoDB Atlas credentials.

Step 5: Run the Application

1.Start the server:

node index.js

2.Open your browser or Postman and navigate to http://localhost:3000/. You should see Hello, World! displayed.
