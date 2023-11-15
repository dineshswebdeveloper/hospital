const express = require("express");
const app = express();
const adminUserRoutes = require("./Routes/admin_user_routes");
const recPatientRoutes = require("./Routes/rec_patient_routers");
const cors = require("cors");

// express middelware
app.use(express.json());
app.use(cors());

// api routes
app.use("/api/user", adminUserRoutes);
app.use("/api/recpatient", recPatientRoutes);

// Exports Area
module.exports = app;
