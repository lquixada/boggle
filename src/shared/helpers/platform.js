export const isElectron = () => {
  if (typeof navigator === 'undefined') {
    return false
  }
  return navigator.userAgent.toLowerCase().indexOf(' electron/') > -1
}
