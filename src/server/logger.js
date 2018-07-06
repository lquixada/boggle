import path from 'path'
import winston from 'winston'

import {isLambdaEnv} from './helpers'

const {combine, colorize, simple} = winston.format
const format = isLambdaEnv ? simple() : combine(colorize(), simple())

const transports = [
  new winston.transports.Console({
    level: 'debug',
    silent: false,
    format
  })
]

if (!isLambdaEnv) {
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
