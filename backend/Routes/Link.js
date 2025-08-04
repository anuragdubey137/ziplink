const { PrismaClient } = require('@prisma/client');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const prisma = new PrismaClient();

const LinkRouter = express.Router();

LinkRouter.use((req,res,next)=>{
  try {
    const authHeader = req.header("authorization")
    
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }
    
    const token = authHeader.replace("Bearer ", "");
    
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }
    
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = user.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
})

LinkRouter.post('/', async(req, res) => {
    const body = req.body;
    const userId = req.userId;
    
    if (!userId) {
        return res.status(401).json({ error: "User ID not found" });
    }
    
    const link = await prisma.link.create({
        data:{
            title: body.title,
            url: body.url,
            userId: parseInt(userId)
        }
    })
    return res.json({
        id: link.id,
    })
})

LinkRouter.put('/', async(req, res) => {
  const body = await req.body;
  const link = await prisma.link.update({
    where: { id: body.id },
    data: {
      title: body.title,
      url: body.url,
    }
  });
return res.json({id: link.id})
})


LinkRouter.get('/:username', async(req, res) => {
    const username = req.params.username;
    const user = await prisma.user.findUnique({
        where: { username },
    });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const links = await prisma.link.findMany({
        where: { userId: user.id },
        select: {
            title: true,
            url: true,}
    });
    return res.json({
        links
    });
})


module.exports = {LinkRouter};
