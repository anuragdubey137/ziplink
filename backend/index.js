const express = require('express');
const { UserRouter } = require('./Routes/User.js'); // Adjust path if needed
//const { LinkRouter } = require('./Routes/Link.js'); // Assuming you have a Link router

// Initialize Prisma Client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const app = express();

app.use(express.json());

app.use("/api/v1/user", UserRouter);
//app.use("/api/v1/link", LinkRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});