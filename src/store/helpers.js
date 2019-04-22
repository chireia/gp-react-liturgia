import AuthStore from './AuthStore'
import ColabStore from './ColabStore'

function createStores() {
  return {
    authStore: new AuthStore(),
    colabStore: new ColabStore()
  }
}

const appStore = createStores()

export function useStore(storeName) {
  return appStore[storeName]
}
