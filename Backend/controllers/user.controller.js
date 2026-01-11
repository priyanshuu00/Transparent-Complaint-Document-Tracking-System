const store = require("../data/store");

exports.getRequests = (req, res) => {
  res.json(store.requests);
};

exports.createRequest = (req, res) => {
  const newRequest = {
    id: "REQ-" + Date.now(),
    ...req.body,
    status: "Submitted"
  };

  store.requests.push(newRequest);
  res.json({ message: "Request created", newRequest });
};
