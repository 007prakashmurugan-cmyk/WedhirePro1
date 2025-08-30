const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/submit', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Contact submission failed' });
  }
});

module.exports = router;
