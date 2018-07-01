import path from 'path'
import winston from 'winston'

const {format} = winston
const logPath = path.join(__dirname, '..', '..', 'logs', 'all.log')

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: logPath,
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    new winston.transports.Console({
      level: 'debug',
      silent: false,
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ],
  exitOnError: false
})

export default logger
