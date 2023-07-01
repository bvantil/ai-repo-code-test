const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/ai-coach', (req, res) => {
  const userMessage = req.body.userMessage;
  const python = spawn('python', ['./ai_coach_logic.py', userMessage]);

  python.stdout.on('data', (data) => {
    const aiMessage = data.toString();
    res.send({ aiMessage });
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  python.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});