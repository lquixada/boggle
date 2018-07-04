const isProd = process.env.NODE_ENV === 'production'

export default {
  static: isProd ? 'https://static.lquixada.com/' : '/assets/',
  sentry: 'https://f42a178848284bf4ab21149d98b3768b@sentry.io/104332',
  wiktionary: 'https://en.wiktionary.org/w/api.php?action=query&format=json&origin=*'
}
