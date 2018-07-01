import {isElectron} from './platform'

export const publicPath = () => {
  return isElectron() ? './public/images/' : '/images/'
}

export const img = (filename) => {
  return `${publicPath()}${filename}`
}
