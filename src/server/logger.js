import path from 'path'
import winston from 'winston'

import {isLambdaEnv} from './helpers'

const {format} = winston
const logPath = path.join(__dirname, '..', '..', 'logs', 'all.log')
const transports = [
  new winston.transports.Console({
    level: 'debug',
    silent: false,
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  })
]

if (!isLambdaEnv) {
  transports.push(
    new winston.transports.File({
      level: 'info',
      filename: logPath,
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
