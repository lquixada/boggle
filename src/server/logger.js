import path from 'path'
import winston from 'winston'

const {combine, colorize, simple} = winston.format
const isProd = process.env.NODE_ENV === 'production'
const format = isProd ? simple() : combine(colorize(), simple())

const transports = [
  new winston.transports.Console({
    level: 'debug',
    silent: false,
    format
  })
]

if (!isProd) {
  transports.push(
    new winston.transports.File({
      level: 'info',
      filename: path.join(__dirname, '..', '..', 'logs', 'all.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5
    })
  )
}

const logger = winston.createLogger({
  transports,
  exitOnError: false
})

export default logger
