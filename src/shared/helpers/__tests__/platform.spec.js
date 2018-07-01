
import {isElectron} from '..'

describe('Helpers', () => {
  describe('isElectron', () => {
    let _navigator

    beforeEach(() => {
      _navigator = global.navigator
    })

    afterEach(() => {
      global.navigator = _navigator
    })

    it('returns false when navigator is not present', () => {
      delete global.navigator
      expect(isElectron()).toBe(false)
    })

    it('detects when it is Electron', () => {
      global.navigator = {userAgent: ' Electron/2'}
      expect(isElectron()).toBe(true)
    })

    it('detects when it is not Electron', () => {
      global.navigator = {userAgent: ' Chrome/66'}
      expect(isElectron()).toBe(false)
    })
  })
})
