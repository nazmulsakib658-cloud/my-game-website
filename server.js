const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB URI Vercel থেকে নেওয়া হবে
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log("MongoDB সফলভাবে কানেক্ট হয়েছে!"))
  .catch(err => console.error("কানেকশন এরর:", err));

app.get('/', (req, res) => {
    res.send('সার্ভার চলছে এবং ডাটাবেস কানেক্ট হয়েছে!');
});

app.listen(3000, () => console.log('পোর্ট ৩০০০ এ সার্ভার চালু হয়েছে'));
