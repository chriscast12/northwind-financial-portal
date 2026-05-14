const express = require("express");
const { requireAuth } = require("./auth");
const { createTicket } = require("./tickets");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/support/tickets", requireAuth, (req, res) => {
  const ticket = createTicket(req.body.message);
  res.status(201).json(ticket);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
