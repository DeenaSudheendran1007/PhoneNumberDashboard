const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to fetch phone numbers
app.get('/api/numbers', async (req, res) => {
    try {
        const response = await axios.get('https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a');
        res.json(response.data);
    } catch (error) {
        console.log("Error: ", errror)
        res.status(500).json({ error: 'Failed to fetch numbers' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
