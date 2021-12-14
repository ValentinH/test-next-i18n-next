const resourcesToBackend = require('i18next-resources-to-backend')

module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  ns: ['main.common', 'main.footer', 'main.second-page'],
  use: [
    resourcesToBackend((language, namespace, callback) => {
      // here we would be fetching from an API
      if (namespace === 'main.common') {
        callback(null, {
          h1: 'A simple example',
          'change-locale': 'Change locale',
          'to-second-page': 'To second page',
          'error-with-status': 'A {{statusCode}} error occurred on server',
          'error-without-status': 'An error occurred on the server',
          title: 'Home | next-i18next',
        })
      } else if (namespace === 'main.footer') {
        callback(null, {
          description:
            'Voici un composant non-page qui nécessite son namespace',
        })
      } else {
        callback(null, {
          h1: 'Une deuxième page pour montrer le routage',
          'back-to-home': "Retour à l'accueil",
          title: 'Deuxième page | next-i18next',
        })
      }
    }),
  ],
}
