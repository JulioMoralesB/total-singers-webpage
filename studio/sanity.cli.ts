import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'v6jkoz1x',
    dataset: 'production'
  },
  deployment: {
    appId: 'tg086jwsvpwah8yaxqrr1lx2',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
