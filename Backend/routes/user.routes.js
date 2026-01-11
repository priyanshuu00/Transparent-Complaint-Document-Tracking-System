const express = require("express");
const router = express.Router();
const { getRequests, createRequest } = require("../controllers/user.controller");

router.get("/requests", getRequests);
router.post("/create", createRequest);

module.exports = router;
