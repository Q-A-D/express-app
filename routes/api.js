const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Petr' }
  ]);
});

router.get('/posts', (req, res) => {
  res.json([
    { id: 1, title: 'First post' },
    { id: 2, title: 'Second post' }
  ]);
});

module.exports = router;