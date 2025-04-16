
// This code demonstrates the Singleton pattern in JavaScript, which ensures that 
// a class has only one instance and provides a global point of access to it.

// The Singleton pattern is often used for managing shared resources or configurations.

// https://www.youtube.com/watch?v=tv-_1er1mWI (Design Patterns in JavaScript - YouTube)

const logger = {
    log: (msg) => console.log(`[LOG]: ${msg}`),
    error: (msg) => console.error(`[ERROR]: ${msg}`),
    warn: (msg) => console.warn(`[WARN]: ${msg}`),
  };
  
  logger.log("App started.");

logger.error("An error occurred.");

logger.warn("This is a warning.");

logger.log("App finished.");

  
  