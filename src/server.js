import express from 'express';
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
dotenv.config();

// we will use the dotenv package to load the environment variables from the .env file
const port = process.env.PORT;

// we will use the connectDB function to connect to the database
const startServer = async () => {
  // we will call the connectDB function to connect to the database
  await connectDB();
  // we will use the app.listen() method to start the server and listen for incoming requests on the specified port
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

// we will call the startServer function to start the server
startServer();