// Import Prisma and Express
const { PrismaClient } = require("./generated/hypertension_system");
const express = require("express");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Utility for error handling
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: error.message || "Internal Server Error" });
};

// -------- tbl_roles --------

app.post("/roles", async (req, res) => {
  try {
    const { role_name } = req.body;
    if (!role_name)
      return res.status(400).json({ error: "Role name is required" });

    const existRole = await prisma.tbl_roles.findFirst({
      where: { role_name },
    });
    if (existRole) return res.status(409).json("Role already exists");

    await prisma.tbl_roles.create({ data: { role_name } });
    res.status(201).json({ message: "Role created successfully" });
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/roles", async (_, res) => {
  try {
    const roles = await prisma.tbl_roles.findMany();
    res.json(roles);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/roles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const role = await prisma.tbl_roles.findUnique({ where: { id } });
    if (!role) return res.status(404).json({ error: "Role not found" });
    res.json(role);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/roles/:id", async (req, res) => {
  try {
    const { role_name } = req.body;
    const { id } = req.params;
    const updated = await prisma.tbl_roles.update({
      where: { id },
      data: { role_name },
    });
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
});

app.delete("/roles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.tbl_roles.delete({ where: { id } });
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
});

// -------- tbl_users --------

app.post("/users", async (req, res) => {
  try {
    const { names, email, password, role_id } = req.body;
    if (!names || !email || !password || !role_id)
      return res.status(400).json({ error: "All fields are required" });

    const user = await prisma.tbl_users.create({
      data: { names, email, password, role_id },
    });
    res.status(201).json(user);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/users", async (_, res) => {
  try {
    const users = await prisma.tbl_users.findMany({ include: { role: true } });
    res.json(users);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { names, email, password, role_id } = req.body;
    const updated = await prisma.tbl_users.update({
      where: { id },
      data: { names, email, password, role_id },
    });
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.tbl_users.delete({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
});

// -------- Heart Data --------

app.post("/heart-data", async (req, res) => {
  try {
    const { patient_name, heartbeat, status } = req.body;
    if (!patient_name || !heartbeat || !status)
      return res.status(400).json({ error: "All fields are required" });

    const data = await prisma.tbl_heart_data.create({
      data: { patient_name, heartbeat, status },
    });
    res.status(201).json(data);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/heart-data", async (_, res) => {
  try {
    const data = await prisma.tbl_heart_data.findMany();
    res.json(data);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/heart-data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { patient_name, heartbeat, status } = req.body;
    const updated = await prisma.tbl_heart_data.update({
      where: { id },
      data: { patient_name, heartbeat, status },
    });
    res.json(updated);
  } catch (error) {
    handleError(res, error);
  }
});

app.delete("/heart-data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.tbl_heart_data.delete({ where: { id } });
    res.json({ message: "Heart data deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
});

// -------- Server --------

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
