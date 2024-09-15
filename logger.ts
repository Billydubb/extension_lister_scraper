import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create the logger
export const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug', // Different log level for prod and dev
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    customFormat
  ),
  transports: [
    // Console output
    new transports.Console(),
        // Rotating file transport
    new transports.DailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxFiles: '14d' // Keep logs for the last 14 days
        }),
    // File output for important logs
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

