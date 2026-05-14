export async function createSupportTicket(message: string) {
  const response = await fetch("/api/support/tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer mock-token"
    },
    body: JSON.stringify({ message })
  });

  return response.json();
}
