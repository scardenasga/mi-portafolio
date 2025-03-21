
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://scardenasga.github.io/mi-portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi-portafolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 539, hash: '8f63a2f116a8e3e1bdee0987dd6a5e186881bd9d1817af304f97ad79ffd7b6c4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '97512a2869c599ae5c1ea46b9e84caed0e267f081a2b47b85f6d681a0d659ad0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20884, hash: '40825434b7a8f06a7f9d8164aab6375b7587c9f2d9c3c5fb8d23e5e1aee397de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
