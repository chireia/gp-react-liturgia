import { decorate, observable, action } from 'mobx'
import {
  getColabs,
  getColab,
  putColab,
  postColab,
  deleteColab
} from '../shared/ServerApi'
import { message } from 'antd'

export default class ColabStore {
  // Status
  colaboradores = {}
  isLoading = false

  colaborador = {}
  isLoadingSingle = false

  constructor() {
    this.fetchColaboradores()
  }

  // Actions
  async fetchColaboradores() {
    this.isLoading = true
    await getColabs().then(res => {
      if (res) this.colaboradores = res
      else this.colaboradores = {}
    })
    this.isLoading = false
  }

  async fetchColaborador(id) {
    this.isLoadingSingle = true
    await getColab(id).then(res => {
      if (res) this.colaborador = res
      else this.colaborador = {}
    })
    this.isLoadingSingle = false
  }

  async saveColaborador(id, values) {
    this.isLoadingSingle = true
    if (id === 'novo') {
      const res = await postColab(values)
      if (res) {
        message.success(values.nome + ' adicionado com sucesso!')
        this.fetchColaboradores()
      } else {
        message.error('Algo deu errado por aqui.')
      }
    } else {
      const res = await putColab(id, values)
      if (res) {
        message.success(values.nome + ' editado com sucesso!')
        this.fetchColaboradores()
      } else {
        message.error('Algo deu errado por aqui.')
      }
    }
    this.isLoadingSingle = false
  }

  async deleteColaborador(id, nome) {
    this.isLoading = true
    const res = await deleteColab(id)
    if (res) {
      message.success(nome + ' removido com sucesso!')
      this.fetchColaboradores()
    } else {
      message.error('Algo deu errado por aqui.')
    }
    this.isLoading = false
  }
}

decorate(ColabStore, {
  colaboradores: observable,
  isLoading: observable,
  colaborador: observable,
  isLoadingSingle: observable,
  fetchColaborador: action.bound,
  saveColaborador: action.bound,
  deleteColaborador: action.bound
})
