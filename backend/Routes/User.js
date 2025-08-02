const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sign } = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client'); // Adjust path if needed

const prisma = new PrismaClient();

const UserRouter = express.Router();

UserRouter.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
          username,
          email,
          password: hashedPassword }
    });
   const jwt = await sign({
    id:user.id
  },process.env.JWT_SECRET);
      return res.json(jwt)}
    catch(e){
      console.log(e);
         res.status(411);
         return res.json({ error: 'invalid' });
      }
});

UserRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = { UserRouter };

