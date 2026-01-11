const API = "http://localhost:5000/api/verify";

// Example ID (QR would point to this page with ?id=REQ-1001)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`${API}/${id}`)
  .then(res => res.json())
  .then(data => {
    const box = document.getElementById("verifyBox");

    if (!data.verified) {
      box.innerHTML = "❌ Invalid Request";
      return;
    }

    const r = data.request;
    box.innerHTML = `
      <h3>${r.type}</h3>
      <p>Status: ${r.status}</p>
      <p>Department: ${r.department}</p>
      <p>Officer: ${r.officer}</p>
      <p>Cost: ${r.cost}</p>
      <p>Time: ${r.timeTaken}</p>
    `;
  });
