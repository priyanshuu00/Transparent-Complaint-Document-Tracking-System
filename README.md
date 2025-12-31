# Transparent Complaint & Document Tracking System

## Overview
This project aims to bring transparency and accountability to government services by allowing citizens to track complaints and document applications in real time. Similar to tracking an online order, users can see where their file is, who is handling it, how long it should take, and whether it is delayed.

The system is designed to reduce uncertainty, prevent unnecessary delays, and make public service processes more open and trustworthy.

---

## Problem Statement
In many government offices, once a complaint is filed or a document is applied for, citizens lose visibility of their file. There is no clear information about processing stages, timelines, or responsibility. This lack of transparency leads to delays, repeated office visits, and misuse of authority.

---

## Solution
The Transparent Complaint & Document Tracking System tracks every request from submission to completion. Each file moves through defined stages that are time-bound and visible to the user. If a file is delayed, it is automatically marked as overdue. Once completed, the system generates a QR-based verification record to confirm authenticity.

---

## Key Features
- Complaint and document submission
- Real-time tracking of file status
- Display of responsible department or authority
- Official cost and expected timelines
- Automatic overdue detection for delays
- QR-based verification of final outcome
- Simple and user-friendly interface

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Python (Flask)  
- **Database:** SQLite  
- **QR Code Generation:** Python qrcode library  

---

## How It Works
1. A user submits a complaint or document request.
2. The system generates a unique tracking ID.
3. The file moves through predefined stages.
4. Each stage has a fixed time limit.
5. Delays are automatically flagged.
6. On completion, a QR-verified result is issued.

---

## How to Run the Project
1. Clone the repository  
2. Install required dependencies
3. Run the Flask application  #pip install -r requirements.txt
4. 4. Open the browser and visit http://127.0.0.1:5000  #python app.py
  

---

## Demo Workflow
- Submit a complaint or document request
- Note the tracking ID
- Track the file using the tracking page
- Observe status updates and delay flags
- Scan the QR code to verify the final result

---

## Future Scope
- Role-based login for officials
- Email and SMS notifications
- Integration with digital signature services
- Analytics dashboard for authorities
- Mobile application support

---

## Conclusion
This project demonstrates how transparency and time-bound processes can improve accountability in public services. By making every file visible and verifiable, the system helps reduce delays and builds trust between citizens and authorities.






