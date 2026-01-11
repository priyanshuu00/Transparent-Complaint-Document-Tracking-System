const API = "http://localhost:5000/api/user";

fetch(`${API}/requests`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("requestList");
    list.innerHTML = "";

    data.forEach(r => {
      list.innerHTML += `
        <div class="list-item">
          <h4>${r.type} <span>${r.status}</span></h4>
          <p>${r.department} | ${r.id}</p>
        </div>
      `;
    });
  });
