function createTicket(message) {
  return {
    id: `TICKET-${Date.now()}`,
    message,
    status: "open",
    createdAt: new Date().toISOString()
  };
}

module.exports = { createTicket };
