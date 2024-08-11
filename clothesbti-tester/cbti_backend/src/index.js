// index.js

const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

const mbtis = [
  { mbti: "NQ", name: '환경우주비행사', image: 'NQImage' },
  { mbti: "NS", name: '그린스타일리스트', image: 'NSImage' },
  { mbti: "FQ", name: '모던스타일리스트', image: 'FQImage' },
  { mbti: "FS", name: '트랜드패션리더', image: 'FSImage' }
];

router.get('/cbti-ratios', async (req, res) => {
  try {
    const participants = await Participant.find();
    const total = participants.length;
    const counts = participants.reduce((acc, participant) => {
      acc[participant.cbti] = (acc[participant.cbti] || 0) + 1;
      return acc;
    }, {});

    const ratios = Object.keys(counts).map(cbti => {
      const mbtiInfo = mbtis.find(mbti => mbti.mbti === cbti);
      return {
        cbti,
        name: mbtiInfo ? mbtiInfo.name : '',
        ratio: (counts[cbti] / total) * 100
      };
    });

    res.json(ratios);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch CBTI ratios' });
  }
});

router.get('/participant-count', async (req, res) => {
  try {
    const count = await Participant.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch participant count' });
  }
});

router.post('/submit-response', async (req, res) => {
  const { answers, cbti } = req.body;
  try {
    const newParticipant = new Participant({ answers, cbti });
    await newParticipant.save();
    res.status(201).json(newParticipant);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit response' });
  }
});

module.exports = router;
