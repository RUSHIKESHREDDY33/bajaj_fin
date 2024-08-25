const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data || [];
        const userId = "reddyvari_rushikesh_reddy_15082003";  
        const email = "vari.rushikeshreddy2021@vitstudent.ac.in";  
        const rollNumber = "21BIT0541";  

        const numbers = data.filter(val => !isNaN(val));
        const alphabets = data.filter(val => /^[a-zA-Z]$/.test(val));
        const highestLowercaseAlphabet = alphabets.filter(val => /^[a-z]$/.test(val)).sort().pop() || "";

        const response = {
            is_success: true,
            user_id: userId,
            college_email_id: email,
            college_roll_number: rollNumber,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
