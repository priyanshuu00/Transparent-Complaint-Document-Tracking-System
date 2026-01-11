const store = require("../data/store");

exports.getAllRequests = (req, res) => {
  res.json(store.requests);
};

exports.updateStatus = (req, res) => {
  const { id, status } = req.body;

  const reqItem = store.requests.find(r => r.id === id);
  if (!reqItem) return res.status(404).json({ message: "Request not found" });

  reqItem.status = status;
  res.json({ message: "Status updated", reqItem });
};
