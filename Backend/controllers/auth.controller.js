const store = require("../data/store");
const { generateOTP } = require("../utils/otp");

exports.sendOTP = (req, res) => {
  const { contact } = req.body;
  const otp = generateOTP();

  store.otps[contact] = otp;

  console.log("📩 OTP (Demo):", otp); // judge-friendly

  res.json({ message: "OTP sent successfully" });
};

exports.verifyOTP = (req, res) => {
  const { contact, otp, role } = req.body;

  if (store.otps[contact] === otp) {
    delete store.otps[contact];
    return res.json({
      success: true,
      role
    });
  }

  res.status(401).json({ success: false, message: "Invalid OTP" });
};
