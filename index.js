const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// এনভায়রনমেন্ট ভেরিয়েবল থেকে ডাটাবেস ইউআরআই নেবেন
const uri = process.env.MONGODB_URI; 

app.use(express.static(__dirname));

// স্কোর সেভ করার জন্য নতুন রুট
app.get('/save-score', async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('game_db'); // আপনার ডাটাবেস নাম
        await db.collection('scores').insertOne({ score: 100, date: new Date() });
        res.send("স্কোর সেভ হয়েছে!");
    } catch (e) {
        res.send("এরর: " + e.message);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('সার্ভার চলছে')); express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running'));
