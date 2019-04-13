import AppStore from './AppStore'
import AuthStore from './AuthStore'

function createStores() {
  return {
    appStore: new AppStore(),
    authStore: new AuthStore()
  }
}

const appStore = createStores()

export function useStore(storeName) {
  return appStore[storeName]
}
