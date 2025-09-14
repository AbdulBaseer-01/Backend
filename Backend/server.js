import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const jokes = [
  {
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
    id:1
  },
  {
    "joke": "Why did the developer go broke? Because he used up all his cache.",
    id:2
  },
  {
    "joke": "How do you comfort a JavaScript bug? You console it.",
    id:3
  },
  {
    "joke": "Why did the CSS selector break up with the HTML element? Because it found someone more specific.",
    id:4
  },
  {
    "joke": "Why do web developers hate nature? It has too many bugs.",
    id:5
  }
];

app.get('/api/jokes', (req, res) => {
res.send(jokes)
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})