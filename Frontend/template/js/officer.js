const API = "http://localhost:5000/api/officer";

fetch(`${API}/requests`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("officerList");
    list.innerHTML = "";

    data.forEach(r => {
      list.innerHTML += `
        <div class="list-item">
          <h4>${r.type} (${r.status})</h4>
          <button onclick="markCompleted('${r.id}')">Mark Completed</button>
        </div>
      `;
    });
  });

function markCompleted(id) {
  fetch(`${API}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status: "Completed" })
  })
  .then(res => res.json())
  .then(() => location.reload());
}
