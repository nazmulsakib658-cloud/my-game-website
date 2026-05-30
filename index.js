const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const uri = process.env.MONGODB_URI;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/test-db', async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        res.send("ডাটাবেসের সাথে কানেক্ট হয়েছে!");
    } catch (e) {
        res.send("কানেকশন এরর: " + e.message);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));