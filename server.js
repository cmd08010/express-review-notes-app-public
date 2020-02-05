const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

