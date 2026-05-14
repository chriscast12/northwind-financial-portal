# Incident 4821

## Summary
Customers experienced failed payment transfers.

## Symptoms
- API latency above 12 seconds
- Database connection exhaustion
- Elevated 500 errors
- 18% failed transfers

## Recent Change
New transaction search endpoint deployed.

## Suspected Cause
Potential inefficient database queries.

## Missing Monitoring
- no slow query dashboard
- no DB pool alerts
- no latency runbook
