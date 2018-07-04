import {isElectron} from './platform'
import config from '../config'

export const publicPath = () => isElectron() ? './public/images/' : `${config.staticUrl}images/`

export const img = (filename) => `${publicPath()}${filename}`
