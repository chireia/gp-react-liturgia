
import { action, observable, decorate } from 'mobx'
import { users } from './users'
import { message } from 'antd'

export default class AuthStore {
  // Status
  userList = users
  isLoged = localStorage.getItem('isLoged')
  logedUser = ''

  // Actions
  login = formValues => {
    Object.entries(this.userList).forEach(([key, value]) => {
      if (formValues.user === value.user && formValues.pin === value.pin) {
        message.success('Usuário Logado')
        this.isLoged = true
        localStorage.setItem('isLoged', true)
        this.logedUser = value.userName
      }
    })
    if(!this.isLoged) {
      message.error('Usuário ou PIN errados')
    }
  }

  logoff = () => {
    localStorage.removeItem('isLoged')
    this.isLoged = localStorage.getItem('isLoged')
    console.log(this.isLoged);
    
  }
}
decorate(AuthStore, {
  userList: observable,
  isLoged: observable,
  logedUser: observable,
  login: action,
  logoff: action
})
