import { message } from 'antd'
import { action, decorate, observable } from 'mobx'
import { getUsers } from '../shared/ServerApi'

export default class AuthStore {
  // Status
  userList = {}
  isLoged = localStorage.getItem('isLoged')
  userName = localStorage.getItem('userName')
  isLoading = false

  constructor() {
    getUsers().then(res => {
      this.userList = res
    })
  }

  // Actions
  login = formValues => {
    this.isLoading = true
    const logedUser = Object.values(this.userList).find(user => {
      return user.user === formValues.user && user.pin === formValues.pin
    })
    if (!logedUser) {
      message.error('Usuário ou PIN incorretos')
      this.isLoged = false
      this.isLoading = false
      return
    }

    setTimeout(() => {
      message.success('Logado com sucesso')
      localStorage.setItem('userName', logedUser.userName)
      localStorage.setItem('isLoged', true)
      this.userName = logedUser.userName
      this.isLoged = true
      this.isLoading = false
    }, 2000)
  }

  logoff = () => {
    this.isLoged = false
    localStorage.removeItem('isLoged')
    localStorage.removeItem('userName')
  }
}

decorate(AuthStore, {
  userList: observable,
  isLoged: observable,
  userName: observable,
  isLoading: observable,
  login: action,
  logoff: action
})
