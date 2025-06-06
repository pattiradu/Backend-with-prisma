// Import Prisma and Express
const { PrismaClient } = require("./generated/hypertension_system");
const express = require("express");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// -------- tbl_roles --------

// Create new role
app.post("/roles", async(req, res) => {

    const { role_name } = req.body;

    try {
        const role = await prisma.tbl_roles.create({ data: { role_name } });

        res.send(role);

    } catch (error) {

        res.status(500).send({ message: error.message });

    }
});

// Retrieve all roles
app.get("/roles", async(req, res) => {
    try {
        const roles = await prisma.tbl_roles.findMany();
        res.send(roles);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update role
app.put("/roles/:id", async(req, res) => {
    const { role_name } = req.body;
    try {
        const updated = await prisma.tbl_roles.update({
            where: { role_id: parseInt(req.params.id) },
            data: { role_name },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete role
app.delete("/roles/:id", async(req, res) => {
    try {
        await prisma.tbl_roles.delete({ where: { role_id: parseInt(req.params.id) } });
        res.send({ message: "Role deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_users (General Users) --------

// Create new user
app.post("/users", async(req, res) => {
    const { names, email, password, role_id } = req.body;
    try {
        const user = await prisma.tbl_users.create({ data: { names, email, password, role_id } });
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all users
app.get("/users", async(req, res) => {
    try {
        const users = await prisma.tbl_users.findMany({ include: { role: true } });
        res.send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update user
app.put("/users/:id", async(req, res) => {
    const { names, email, password, role_id } = req.body;
    try {
        const updated = await prisma.tbl_users.update({
            where: { user_id: parseInt(req.params.id) },
            data: { names, email, password, role_id },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete user
app.delete("/users/:id", async(req, res) => {
    try {
        await prisma.tbl_users.delete({ where: { user_id: parseInt(req.params.id) } });
        res.send({ message: "User deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_user (System/Admin Users) --------

// Create system user
app.post("/system-users", async(req, res) => {
    const { u_names, u_phone, u_usersname, u_email, u_password, u_role_id } = req.body;
    try {
        const admin = await prisma.tbl_user.create({
            data: { u_names, u_phone, u_usersname, u_email, u_password, u_role_id },
        });
        res.send(admin);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all system users
app.get("/system-users", async(req, res) => {
    try {
        const admins = await prisma.tbl_user.findMany({ include: { role: true } });
        res.send(admins);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update system user
app.put("/system-users/:id", async(req, res) => {
    const { u_names, u_phone, u_usersname, u_email, u_password, u_role_id } = req.body;
    try {
        const updated = await prisma.tbl_user.update({
            where: { u_id: parseInt(req.params.id) },
            data: { u_names, u_phone, u_usersname, u_email, u_password, u_role_id },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete system user
app.delete("/system-users/:id", async(req, res) => {
    try {
        await prisma.tbl_user.delete({ where: { u_id: parseInt(req.params.id) } });
        res.send({ message: "System user deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_doctors --------

// Create doctor
app.post("/doctors", async(req, res) => {
    const { name, specialization } = req.body;
    try {
        const doctor = await prisma.tbl_doctors.create({ data: { name, specialization } });
        res.send(doctor);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all doctors
app.get("/doctors", async(req, res) => {
    try {
        const doctors = await prisma.tbl_doctors.findMany();
        res.send(doctors);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update doctor
app.put("/doctors/:id", async(req, res) => {
    const { name, specialization } = req.body;
    try {
        const updated = await prisma.tbl_doctors.update({
            where: { doctor_id: parseInt(req.params.id) },
            data: { name, specialization },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete doctor
app.delete("/doctors/:id", async(req, res) => {
    try {
        await prisma.tbl_doctors.delete({ where: { doctor_id: parseInt(req.params.id) } });
        res.send({ message: "Doctor deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_appointments --------

// Create appointment
app.post("/appointments", async(req, res) => {
    const { doctor_id, patient_name, appointment_date, status } = req.body;
    try {
        const appointment = await prisma.tbl_appointments.create({
            data: { doctor_id, patient_name, appointment_date: new Date(appointment_date), status },
        });
        res.send(appointment);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all appointments
app.get("/appointments", async(req, res) => {
    try {
        const appointments = await prisma.tbl_appointments.findMany({
            include: { doctor: true, solved_appointments: true },
        });
        res.send(appointments);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update appointment
app.put("/appointments/:id", async(req, res) => {
    const { doctor_id, patient_name, appointment_date, status } = req.body;
    try {
        const updated = await prisma.tbl_appointments.update({
            where: { appointment_id: parseInt(req.params.id) },
            data: { doctor_id, patient_name, appointment_date: new Date(appointment_date), status },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete appointment
app.delete("/appointments/:id", async(req, res) => {
    try {
        await prisma.tbl_appointments.delete({ where: { appointment_id: parseInt(req.params.id) } });
        res.send({ message: "Appointment deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_solved_appointments --------

// Create solved appointment
app.post("/solved-appointments", async(req, res) => {
    const { appointment_id, doctor_id, patient_name, appointment_date, status } = req.body;
    try {
        const solved = await prisma.tbl_solved_appointments.create({
            data: { appointment_id, doctor_id, patient_name, appointment_date: new Date(appointment_date), status },
        });
        res.send(solved);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Retrieve all solved appointments
app.get("/solved-appointments", async(req, res) => {
    try {
        const solved = await prisma.tbl_solved_appointments.findMany({
            include: { appointment: true, doctor: true },
        });
        res.send(solved);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update solved appointment
app.put("/solved-appointments/:id", async(req, res) => {
    const { appointment_id, doctor_id, patient_name, appointment_date, status } = req.body;
    try {
        const updated = await prisma.tbl_solved_appointments.update({
            where: { solved_id: parseInt(req.params.id) },
            data: { appointment_id, doctor_id, patient_name, appointment_date: new Date(appointment_date), status },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete solved appointment
app.delete("/solved-appointments/:id", async(req, res) => {
    try {
        await prisma.tbl_solved_appointments.delete({ where: { solved_id: parseInt(req.params.id) } });
        res.send({ message: "Solved appointment deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// -------- tbl_heart_data --------

// Insert heart data
app.post("/heart-data", async(req, res) => {
    const { patient_name, heartbeat, status } = req.body;
    try {
        const data = await prisma.tbl_heart_data.create({
            data: { patient_name, heartbeat, status },
        });
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Get all heart data
app.get("/heart-data", async(req, res) => {
    try {
        const data = await prisma.tbl_heart_data.findMany();
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Update heart data
app.put("/heart-data/:id", async(req, res) => {
    const { patient_name, heartbeat, status } = req.body;
    try {
        const updated = await prisma.tbl_heart_data.update({
            where: { id: parseInt(req.params.id) },
            data: { patient_name, heartbeat, status },
        });
        res.send(updated);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Delete heart data
app.delete("/heart-data/:id", async(req, res) => {
    try {
        await prisma.tbl_heart_data.delete({ where: { id: parseInt(req.params.id) } });
        res.send({ message: "Heart data deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Start server
app.listen(5000, () => console.log("Server started on http://localhost:5000"));