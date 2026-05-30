const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const path = require('path');

// MongoDB কানেকশন
const uri = process.env.MONGODB_URI;

app.use(express.static(__dirname));

// হোম পেজ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// স্কোর সেভ করার API
app.get('/save-score', async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('game_db');
        await db.collection('scores').insertOne({ score: 100, date: new Date() });
        res.send("অভিনন্দন! স্কোর ডাটাবেসে সেভ হয়েছে।");
    } catch (e) {
        res.send("এরর: " + e.message);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running'));
