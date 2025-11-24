// // scheduler.js
// const schedule = require('node-schedule');
// const { addNotification } = require('../storage/store');

// // Example of generating notifications
// const generateNotifications = () => {
//   // Your logic for generating notifications
// };

// async function startScheduler() {
//   schedule.scheduleJob('0 5-23/2 * * *', async () => {  // every 2 hours between 5 AM and 11 PM
//     const newNotifs = await generateNotifications();

//     if (!newNotifs.length) {
//       // If no notifications are generated, use a fallback message
//       const fallback = {
//         type: 'General Reminder',
//         message: 'Don’t forget to take care of your health today!',
//         time: new Date(),
//       };
//       await addNotification(fallback);  // Ensure the notification is stored correctly
//       console.log('Fallback Notification:', fallback);
//     } else {
//       console.log('Generated Notifications:', newNotifs);
//     }
//   });
// }

// module.exports = startScheduler;










// scheduler.js
const schedule = require('node-schedule');
const { addNotification } = require('../storage/store');

// Example of generating notifications
const generateNotifications = () => {
  // Your logic for generating notifications
};

async function startScheduler() {
  schedule.scheduleJob('*/10 5-23 * * *', async () => {  // every 10 minutes between 5 AM and 11 PM
    const newNotifs = await generateNotifications();

    if (!newNotifs.length) {
      // If no notifications are generated, use a fallback message
      const fallback = {
        type: 'General Reminder',
        message: 'Don’t forget to take care of your health today!',
        time: new Date(),
      };
      await addNotification(fallback);  // Ensure the notification is stored correctly
      console.log('Fallback Notification:', fallback);
    } else {
      console.log('Generated Notifications:', newNotifs);
    }
  });
}

module.exports = startScheduler;
