import * as platform from '../platform'
import {publicPath, img} from '../url'

describe('Helpers', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('publicPath', () => {
    it('returns private path on Electron environment', () => {
      jest.spyOn(platform, 'isElectron').mockReturnValue(true)
      expect(publicPath()).toBe('./public/images/')
    })

    it('returns public path on web environment', () => {
      jest.spyOn(platform, 'isElectron').mockReturnValue(false)
      expect(publicPath()).toBe('/assets/images/')
    })
  })

  describe('img', () => {
    it('returns private path on Electron environment', () => {
      jest.spyOn(platform, 'isElectron').mockReturnValue(true)
      expect(img('logo.png')).toBe('./public/images/logo.png')
    })

    it('returns public path on web environment', () => {
      jest.spyOn(platform, 'isElectron').mockReturnValue(false)
      expect(img('logo.png')).toBe('/assets/images/logo.png')
    })
  })
})
