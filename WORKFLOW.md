# End-to-End Workflow

## High-Level Workflow

> 📌 Insert high-level workflow diagram here

![Workflow Diagram](../assets/workflow.png)

```

Citizen
→ Submit Request
→ Cost & SLA Assigned
→ Officer Processing
→ SLA Tracking
→ Delay Escalation
→ Completion
→ QR Generation
→ Public Verification

```

---

## Detailed Workflow Steps

### 1. Citizen Authentication
- OTP-based login
- Secure session created

### 2. Service Selection
- Complaint or document type selected
- Cost, SLA, and stages shown upfront

### 3. Request Submission
- Request ID generated
- Status set to SUBMITTED
- Audit log created

### 4. Workflow Processing
```

SUBMITTED
→ UNDER_VERIFICATION
→ IN_PROCESS
→ APPROVED / REJECTED
→ COMPLETED

```

### 5. SLA Tracking
- Timers start automatically
- Cost and SLA locked

### 6. Delay Handling
- System flags overdue requests
- Supervisor notified

### 7. Completion & Verification
- Digital signature generated
- QR code issued


