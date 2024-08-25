const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { user_id, college_email_id, college_roll_number, numbers, alphabets } = req.body;

  // Validate the request body
  if (!user_id || !college_email_id || !college_roll_number || !Array.isArray(numbers) || !Array.isArray(alphabets)) {
    return res.status(400).json({ is_success: false });
  }

  // Find the highest lowercase alphabet
  const highestLowercase = alphabets
    .filter(char => /^[a-z]$/.test(char))
    .sort()
    .pop();

  return res.status(200).json({
    is_success: true,
    user_id,
    college_email_id,
    college_roll_number,
    numbers,
    alphabets,
    highest_lowercase: highestLowercase || null
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
