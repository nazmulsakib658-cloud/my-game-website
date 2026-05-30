const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI; // এখানে Vercel-এর ভেরিয়েবলটি ব্যবহার হচ্ছে

async function connectToDatabase() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("MongoDB-te successfull-i connect hoyeche!");
    } catch (e) {
        console.error(e);
    }
}
connectToDatabase();
