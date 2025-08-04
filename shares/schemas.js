const { z } = require("zod");

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
});

const linkSchema = z.object({
  url: z.string().url("Invalid URL"),
  title: z.string().min(1, "Title is required"),
  
});

module.exports = {
  signupSchema,
  signinSchema,
    linkSchema,
};
