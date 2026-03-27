const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });
app.get('/', (req, res) => {
  res.send("Backend is running ✅");
});
app.use(cors());
app.use(express.json());

app.post('/verify', upload.fields([
  { name: 'id' },
  { name: 'selfie' }
]), (req, res) => {

  console.log("VERIFY API HIT");

  if (!req.files || !req.files.id || !req.files.selfie) {
    return res.json({
      success: false,
      message: "Files missing"
    });
  }

  res.json({
    success: true,
    message: "Backend working perfectly ✅"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});