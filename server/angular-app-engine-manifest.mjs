
export default {
  basePath: 'https://scardenasga.github.io/mi-portafolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
