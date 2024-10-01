const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${level.toUpperCase()}] [${timestamp}] ${message}`;
});

// Create logger
const logger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),  // Adds timestamp
    logFormat                                   // Applies custom format
  ),
  transports: [
    new transports.Console(),                   // Log to console
    new transports.File({ filename: 'app.log' }) // Log to file (optional)
  ]
});

module.exports = logger;