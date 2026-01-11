const express = require("express");
const router = express.Router();
const { getAllRequests, updateStatus } = require("../controllers/officer.controller");

router.get("/requests", getAllRequests);
router.put("/update", updateStatus);

module.exports = router;
