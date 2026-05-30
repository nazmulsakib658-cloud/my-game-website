import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// ভেরসেল পোর্ট নিজে সেট করে, তাই ৩০০০ ফিক্সড না রেখে process.env.PORT ব্যবহার করুন
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default server; // ভেরসেলের জন্য এটি জরুরি
