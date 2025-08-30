const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

router.post('/post', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({ message: 'Profile posted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Profile posting failed' });
  }
});

router.get('/browse', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch profiles' });
  }
});

module.exports = router;
