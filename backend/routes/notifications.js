// const express = require('express');
// const router = express.Router();
// const { getAllNotifications } = require('../storage/store');

// // GET /notifications
// router.get('/', (req, res) => {
//   const notifications = getAllNotifications();
//   res.json(notifications);
// });

// module.exports = router;


// ❌ This part is backend code — remove from frontend!
const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const path = require('path');

const notificationsPath = path.join(__dirname, '../storage/notifications.json');

router.get('/get', async (req, res) => {
  try {
    const data = await fs.readJson(notificationsPath);
    res.json(data);
  } catch (err) {
    console.error('Error reading notifications:', err);
    res.status(500).json({ error: 'Failed to load notifications' });
  }
});

module.exports = router;
