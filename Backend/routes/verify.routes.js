const express = require("express");
const router = express.Router();
const store = require("../data/store");

router.get("/:id", (req, res) => {
  const reqItem = store.requests.find(r => r.id === req.params.id);

  if (!reqItem) {
    return res.status(404).json({ verified: false });
  }

  res.json({
    verified: true,
    request: reqItem
  });
});

module.exports = router;
