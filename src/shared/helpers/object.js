import {fromJS} from 'immutable'

// Abstraction to handle pre-composed state received from server
// (ie, leave top level keys untouched)
export const immutifyState = (obj) => {
  const root = {}
  const immutable = fromJS(obj)

  immutable.forEach((value, key) => {
    root[key] = value
  })

  return root
}
