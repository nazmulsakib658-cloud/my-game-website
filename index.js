const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const uri = process.env.MONGODB_URI;

app.use(express.static(__dirname)); // আপনার HTML ফাইলটি দেখানোর জন্য

app.get('/save-score', async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('game_db'); // আপনার ডাটাবেস নাম
        await db.collection('scores').insertOne({ score: 100, date: new Date() });
        res.send("স্কোর সফলভাবে ডাটাবেসে সেভ হয়েছে!");
    } catch (e) {
        res.send("এরর: " + e.message);
    }
});

app.listen(3000, () => console.log('সার্ভার চালু হয়েছে'));
