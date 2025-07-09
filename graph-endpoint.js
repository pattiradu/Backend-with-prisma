const app = require("express").Router();
const { PrismaClient } = require("./generated/hypertension_system");


const prisma = new PrismaClient();


// ADMIN DASHBOARD ENDPOINTS

// 1. Pie Chart: Patient Disease Distribution
app.get("/stats/patient-disease-distribution", async(req, res) => {
    try {
        const data = await prisma.tbl_heart_data.groupBy({
            by: ["status"],
            _count: { status: true },
        });

        const result = data.map((item) => ({
            name: item.status || "Unknown",
            value: item._count.status,
        }));

        res.send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 2. Line Chart: User Count Per Role
app.get("/stats/users-per-role", async(req, res) => {
    try {
        const roleCounts = await prisma.tbl_users.groupBy({
            by: ["role_id"],
            _count: { role_id: true },
        });

        const roles = await prisma.tbl_roles.findMany();

        const result = roleCounts.map((item) => {
            const role = roles.find((r) => r.role_id === item.role_id);
            return {
                role: role ? role.role_name : "Unknown",
                count: item._count.role_id,
            };
        });

        res.send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


// DOCTOR DASHBOARD ENDPOINTS

// 3. Bar Chart: Patient Count Per Condition
app.get("/stats/doctor-patient-conditions", async(req, res) => {
    try {
        const data = await prisma.tbl_heart_data.groupBy({
            by: ["status"],
            _count: { status: true },
        });

        const result = data.filter(item => item.status !== null).map((item) => ({
            condition: item.status || "Unknown",
            total: item._count.status,
        }));

        res.send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// 4. Line Chart: Appointment Summary (Daily / Weekly / Monthly)
app.get("/stats/appointments-summary", async(req, res) => {
    try {
        const all = await prisma.tbl_appointments.findMany();

        const today = new Date().toISOString().slice(0, 10);
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - 7);

        const monthStart = new Date();
        monthStart.setDate(1);

        const daily = all.filter(
            (a) => new Date(a.appointment_date).toISOString().slice(0, 10) === today
        );

        const weekly = all.filter((a) => new Date(a.appointment_date) >= weekStart);

        const monthly = all.filter((a) => new Date(a.appointment_date) >= monthStart);

        res.send({
            daily: daily.length,
            weekly: weekly.length,
            monthly: monthly.length,
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


// PATIENT DASHBOARD ENDPOINT

// 5. Line Chart: Heartbeat History of a Patient
app.get("/stats/heartbeat-history/:code", async(req, res) => {
    try {
        const { code } = req.params;

        const history = await prisma.tbl_heart_data.findMany({
            where: { patient_code: code },
            orderBy: { id: "asc" },
            select: {
                heartbeat: true,
                status: true,
                patient_name: true,
                created_at: true,
            },
        });

        res.send(history);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports.chartsRoutes = app