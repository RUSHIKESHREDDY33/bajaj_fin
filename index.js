const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const userId = "john_doe_17091999";  
        const email = "john@xyz.com";  
        const rollNumber = "ABCD123";  

        const numbers = data.filter(val => !isNaN(val));
        const alphabets = data.filter(val => /^[a-zA-Z]$/.test(val));
        const highestLowercaseAlphabet = alphabets.filter(val => /^[a-z]$/.test(val)).sort().pop() || "";

        const response = {
            is_success: true,
            user_id: userId,
            email: email,
            roll_number: rollNumber,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: "Error encountered"
        });
    }
});

app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
