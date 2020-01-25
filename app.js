const template = require('./template');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(template.replace('NUMBER_TO_REPLACE', (new Date()).getHours()%2?1:2)))

app.listen(port, () => console.log(`Happy hacking... localhost:${port}!`))