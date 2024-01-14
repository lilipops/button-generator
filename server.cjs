// server.cjs
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/icons/search', async (req, res) => {
  try {
    const apiUrl = `https://api.iconfinder.com/v4${req.url}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl, {
      headers: { 
        'accept': 'application/json',
        'Authorization': 'Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1'
      }
    });
    res.json(response.data);
    console.log(JSON.stringify(response.data) + " data");
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

app.listen(3001, () => {
  console.log('Proxy server is running on port 3001');
});