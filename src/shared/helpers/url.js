import {isElectron} from './platform'
import config from '../config'

export const publicPath = () => {
  return isElectron() ? './public/images/' : `${config.url.cloudfront}/images/`
}

export const img = (filename) => {
  return `${publicPath()}${filename}`
}
