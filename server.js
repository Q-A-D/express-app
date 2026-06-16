const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages');

app.use('/api', apiRouter);
app.use('/', pagesRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});