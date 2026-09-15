import { web } from './application/web.js'
import { logger } from './application/logging.js'
export default web

if (process.env.NODE_ENV !== 'production') {
  web.listen(3000, () => {
    logger.info('App start on port 3000')
  })
}
