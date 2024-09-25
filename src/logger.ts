import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import util from 'util';

const { combine, timestamp, printf, colorize } = format;

// Modify the consoleLogLikeFormat
const consoleLogLikeFormat = printf(({ level, message, timestamp, ...rest }) => {
  const args = rest.additionalInfo || [];
  const formattedMessage = util.format(message, ...args);
  return `${timestamp} [${level}]: ${formattedMessage}`;
});

// Create the logger
export const _logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    consoleLogLikeFormat
  ),
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d'
    }),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

// Modify the extended logger
const loggerExtended = {
  info: (...args: any[]) => _logger.info(args[0], { additionalInfo: args.slice(1) }),
  error: (...args: any[]) => _logger.error(args[0], { additionalInfo: args.slice(1) }),
  warn: (...args: any[]) => _logger.warn(args[0], { additionalInfo: args.slice(1) }),
  debug: (...args: any[]) => _logger.debug(args[0], { additionalInfo: args.slice(1) }),
};

export { loggerExtended as logger };

