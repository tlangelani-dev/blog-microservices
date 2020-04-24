const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
const PORT = 4001;

app.use(bodyParser.json());

const posts = {};

const data = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(data[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = data[req.params.id] || [];

    comments.push({id: commentId, content});

    data[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(PORT, () => {
    console.log(`Comments service running on http://localhost:${PORT}`);
});
