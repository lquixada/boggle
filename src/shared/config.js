const isProd = process.env.NODE_ENV === 'production'

export default {
  staticUrl: isProd ? 'https://static.lquixada.com/boggle/' : '/assets/',
  sentryUrl: 'https://f42a178848284bf4ab21149d98b3768b@sentry.io/104332',
  wiktionaryUrl: 'https://en.wiktionary.org/w/api.php?action=query&format=json&origin=*'
}
