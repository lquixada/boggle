import middleware from 'morgan'

import logger from '../logger'

export default middleware('combined', {
  stream: {
    write: (message, encoding) => logger.info(message)
  }
})
