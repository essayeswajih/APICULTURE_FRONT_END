
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/boutique"
  },
  {
    "renderMode": 2,
    "route": "/boutique/Ruches"
  },
  {
    "renderMode": 2,
    "route": "/boutique/Vêtements"
  },
  {
    "renderMode": 2,
    "route": "/boutique/Miellerie"
  },
  {
    "renderMode": 2,
    "route": "/boutique/Nourrisseurs"
  },
  {
    "renderMode": 2,
    "route": "/boutique/Produits de la ruche"
  },
  {
    "renderMode": 0,
    "route": "/boutique/*"
  },
  {
    "renderMode": 2,
    "route": "/a-propos"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2WFXEPQJ.js"
    ],
    "route": "/panier"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5272, hash: 'cc2dd033f03701de154374db1fb7ed4a76fa9e215225dab2d26c93b81f3feb71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1244, hash: 'a0d9e523dd433bff86a1f135850b5bf9aee502b91ec058ed5f27a19dbff6ed67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'boutique/Produits de la ruche/index.html': {size: 42332, hash: '28549a1c5f1119ea7f749e2d56317760b784034792df72e51de7f90b9826a358', text: () => import('./assets-chunks/boutique_Produits de la ruche_index_html.mjs').then(m => m.default)},
    'boutique/Nourrisseurs/index.html': {size: 42344, hash: 'bb74ddda3743b2a5d25ec548329dcba1bd381baaa286e26459e1cc9d645c4460', text: () => import('./assets-chunks/boutique_Nourrisseurs_index_html.mjs').then(m => m.default)},
    'boutique/Ruches/index.html': {size: 42379, hash: '4dc48ab7fadf2fcacb8c7720b9b690da8f52a1865ceefe9c2e3a1006fc5a6373', text: () => import('./assets-chunks/boutique_Ruches_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57876, hash: '7c4fe162ac793d3a621ba05409fb96e56b8ece823815b81b24de04937a0c3a93', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 43545, hash: '3f653b49a65612bc37cc69a1e6cf070250e9d3666ecff3f43f423dff769ee1d4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'boutique/Miellerie/index.html': {size: 42345, hash: 'c68ba7a0ecb3d8f5f899246b9aba73d3d1357100e58b0ee06571a8d99312f6af', text: () => import('./assets-chunks/boutique_Miellerie_index_html.mjs').then(m => m.default)},
    'boutique/index.html': {size: 45025, hash: 'a22f311716875f2efc07719ee6637f71799fa91f574defd90554866693c970c8', text: () => import('./assets-chunks/boutique_index_html.mjs').then(m => m.default)},
    'boutique/Vêtements/index.html': {size: 45025, hash: 'a22f311716875f2efc07719ee6637f71799fa91f574defd90554866693c970c8', text: () => import('./assets-chunks/boutique_Vêtements_index_html.mjs').then(m => m.default)},
    'a-propos/index.html': {size: 42550, hash: '135456b2704c328f6789e924f3fc943a891bd5809588e6036d3de07f3ad57090', text: () => import('./assets-chunks/a-propos_index_html.mjs').then(m => m.default)},
    'panier/index.html': {size: 47226, hash: 'bb9fe8258f16b21de5af90bda5217318ac4bcbd5f9b5bc44edcdd032d50f3469', text: () => import('./assets-chunks/panier_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
