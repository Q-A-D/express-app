const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Express server is working!' });
});

router.get('/about', (req, res) => {
  res.json({ page: 'about', title: 'About us' });
});

router.get('/contact', (req, res) => {
  res.json({ page: 'contact', title: 'Contacts' });
});

module.exports = router;