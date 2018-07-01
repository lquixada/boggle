import './enzyme'
import './helmet'
import './logger'

// Nasty hack in order to fix a bug that styled-component throws exception
// when in node environment with window global.
// See issue: https://github.com/styled-components/styled-components/issues/1692
delete window.HTMLElement
