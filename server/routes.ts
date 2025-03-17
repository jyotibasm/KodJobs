import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, loginSchema } from "@shared/schema";
import { ZodError } from "zod";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "users.json");

// Initialize users.json if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/signup", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Read existing users
      const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
      
      // Check if username already exists
      if (users.some((u: any) => u.username === userData.username)) {
        return res.status(400).json({ message: "Username already taken" });
      }

      // Add new user
      users.push(userData);
      fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const loginData = loginSchema.parse(req.body);
      
      // Read users
      const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
      
      // Find user
      const user = users.find((u: any) => 
        u.username === loginData.username && u.password === loginData.password
      );

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // In a real app, you'd set up a session here
      res.json({ message: "Logged in successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
