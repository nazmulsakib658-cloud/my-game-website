const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

// ডাটাবেসের লিঙ্ক (এটি আপনার Vercel Environment Variable থেকে আসবে)
const uri = process.env.MONGODB_URI;

app.use(express.static(__dirname));

// স্কোর সেভ করার জন্য API রুট
app.get('/save-score', async (req, res) => {
    if (!uri) {
        return res.send("এরর: ডাটাবেস কানেকশন লিঙ্ক নেই!");
    }
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db('game_db');
        await db.collection('scores').insertOne({ score: 100, date: new Date() });
        res.send("অভিনন্দন! স্কোর ডাটাবেসে সেভ হয়েছে।");
    } catch (e) {
        res.send("এরর: " + e.message);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('সার্ভার চলছে...'));
