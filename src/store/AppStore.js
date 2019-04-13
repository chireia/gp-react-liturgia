import { observable, action, decorate } from 'mobx'
// import { users } from './usuarios'

export default class AppStore {
  count = 0

  incCount = () => {
    this.count += 1
    console.log(this.count)
  }

  decCount = () => {
    this.count -= 1
  }
}

decorate(AppStore, {
  userList: observable,
  count: observable,
  incCount: action,
  decCount: action
})
