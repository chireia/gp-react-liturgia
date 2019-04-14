import { message } from 'antd'
import { action, decorate, observable } from 'mobx'
import { getUsers } from '../shared/ServerApi'

export default class AuthStore {
  // Status
  userList = {}
  isLoged = localStorage.getItem('isLoged')
  logedUser = localStorage.getItem('usarName')
  isLoading = false

  constructor() {
    getUsers().then(res => {
      this.userList = res
    })
  }

  // Actions
  login = async formValues => {
    this.isLoading = true
    this.logedUser = Object.values(this.userList).find(user => {
      return user.user === formValues.user && user.pin === formValues.pin
    })
    if (!this.logedUser) {
      message.error('Usuário ou PIN incorretos')
      localStorage.removeItem('isLoged')
      this.isLoged = false
      return
    }

    await setTimeout(() => {
      message.success('Logado com sucesso')
      localStorage.setItem('isLoged', true)
      this.isLoged = true
      this.isLoading = false
    }, 2000)
  }

  logoff = () => {
    localStorage.removeItem('isLoged')
    this.isLoged = localStorage.getItem('isLoged')
    console.log(this.isLoged)
  }
}

decorate(AuthStore, {
  userList: observable,
  isLoged: observable,
  logedUser: observable,
  isLoading: observable,
  login: action,
  logoff: action
})
