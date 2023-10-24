import '@/styles/index.less'

import '@logseq/libs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalEnv } from '#/global'

const isDevelopment = import.meta.env.DEV

if (isDevelopment) {
  renderApp('browser')
} else {
  console.log('=== logseq-plugin-mind-map loaded ===')
  logseq.ready(() => {
    logseq.provideModel({
      show() {
        renderApp('logseq')
        logseq.showMainUI()
      },
    })

    logseq.App.registerUIItem('toolbar', {
      key: 'logseq-plugin-mind-map',
      template:
        '<a data-on-click="show" class="button"><i class="ti ti-window"></i></a>',
    })
  })
}

function renderApp(env: GlobalEnv) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App env={env} />
    </React.StrictMode>
  )
}
