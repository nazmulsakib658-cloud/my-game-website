const express = require('express');
const app = express();

// স্ট্যাটিক ফাইল সার্ভ করা
app.use(express.static(__dirname));

// API রুট
app.get('/save-score', (req, res) => {
    res.send("অভিনন্দন! স্কোর ডাটাবেসে সেভ হয়েছে।");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server is running'));
