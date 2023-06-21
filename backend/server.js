const express = require('express');
const Spellchecker = require('spellchecker');
const app = express();
const os = require('os');
const port = 3000;

app.use(express.json());

app.post('/spellcheck', (req, res) => {
  const { text } = req.body;
  const words = text.split(' ');

  const misspelled = words.filter((word) => Spellchecker.isMisspelled(word));
  const answer = `${misspelled.join(' ')}${os.EOL}`;

  res.send(answer);
});


app.listen(port, () => {
  console.log(`Spell Checker backend listening at http://localhost:${port}`);
});
