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
  login = async formValues => {
    this.isLoading = true
    const logedUser = await Object.values(this.userList).find(user => {
      return user.user === formValues.user && user.pin === formValues.pin
    })
    if (!logedUser) {
      message.error('Usuário ou PIN incorretos')
      localStorage.removeItem('isLoged')
      localStorage.removeItem('userName')
      this.isLoged = false
      this.isLoading = false
      return
    }

    await setTimeout(() => {
      message.success('Logado com sucesso')
      localStorage.setItem('isLoged', true)
      localStorage.setItem('userName', logedUser.userName)
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
  userName: observable,
  isLoading: observable,
  login: action,
  logoff: action
})
