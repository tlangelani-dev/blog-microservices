const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {id, title};

    res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
