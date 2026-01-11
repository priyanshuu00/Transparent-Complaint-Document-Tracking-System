const API = "http://localhost:5000/api/auth";

function sendOTP() {
  const contact = document.getElementById("contact").value;

  fetch(`${API}/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contact })
  })
  .then(res => res.json())
  .then(() => alert("OTP sent (check backend console)"));
}

function verifyOTP(role) {
  const contact = document.getElementById("contact").value;
  const otp = document.getElementById("otp").value;

  fetch(`${API}/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contact, otp, role })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      if (role === "user") {
        window.location.href = "user-dashboard.html";
      } else {
        window.location.href = "officer-dashboard.html";
      }
    } else {
      alert("Invalid OTP");
    }
  });
}
