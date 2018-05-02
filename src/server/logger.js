import winston from 'winston';

winston.emitErrs = true;

const isBenchmark = () => process.env.NODE_ENV === 'benchmark';

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/all.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      silent: isBenchmark()
    })
  ],
  exitOnError: false,
});

export default logger;
