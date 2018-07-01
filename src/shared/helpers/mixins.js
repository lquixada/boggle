export const flex = (values) => `
  flex: ${values};
  -ms-flex: ${values};
`

flex.display = () => `
  display: flex;
  display: -ms-flexbox;
`

flex.left = () => `
  justify-content: flex-start;
  -ms-flex-pack: start;
`

flex.center = () => `
  justify-content: center;
  -ms-flex-pack: center;
`

flex.right = () => `
  justify-content: flex-end;
  -ms-flex-pack: end;
`

flex.justify = () => `
  justify-content: space-between;
  -ms-flex-pack: justify;
`

flex.top = () => `
  align-items: flex-start;
  -ms-flex-align: start;
`

flex.middle = () => `
  align-items: center;
  -ms-flex-align: center;
`

flex.bottom = () => `
  align-items: flex-end;
  -ms-flex-align: end;
`

flex.dir = (value) => `
  flex-direction: ${value};
  -ms-flex-direction: ${value};
`

flex.order = (value) => `
  order: ${value};
  -ms-flex-order: ${value};
`

flex.wrap = (value) => `
  flex-wrap: ${value};
  -ms-flex-wrap: ${value === 'nowrap' ? '' : value};
`

flex.flow = (dir, wrap) => `
  ${flex.dir(dir)}
  ${flex.wrap(wrap)}
`

export const box = () => `
  background-color: #404040;
  border: .1rem solid;
  border-radius: .5rem;
  border-color: #303030 #505050 #505050 #303030;
`
