
// https://www.youtube.com/watch?v=QaQHeF9KYtA (Immutability & Freeze Objects in JavaScript - YouTube)

function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        deepFreeze(obj[key]);
      }
    });
    return Object.freeze(obj);
  }
  
  const config = { settings: { darkMode: true } };
  deepFreeze(config);
  config.settings.darkMode = false; // No effect
  