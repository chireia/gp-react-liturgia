/* eslint-disable no-template-curly-in-string */

import * as Yup from 'yup'

let mixed = {
  default: 'Inválido',
  required: 'Obrigatório',
  oneOf: 'Deve ser um dos valores: ${values}',
  notOneOf: 'Não deve ser um dos valores: ${values}'
}

let string = {
  length: 'Deve ter ${length} caracteres',
  min: 'Deve ter ao menos ${min} caracteres',
  max: 'Deve ter no máximo ${max} caracteres',
  matches: 'Formato inválido',
  email: 'Email inválido',
  url: 'URL de formato inválido',
  trim: 'Não deve conter espaços no inicio e fim',
  lowercase: 'Deve ser minúscula',
  uppercase: 'Deve ser maiúsculo'
}

let number = {
  min: 'Deve ser maior ou igual a ${min}',
  max: 'Deve ser menor ou igual ${max}',
  lessThan: 'Deve ser menos que ${less}',
  moreThan: 'Deve ser mais que ${more}',
  notEqual: 'Deve ser diferente de ${notEqual}',
  positive: 'Deve ser um número positivo',
  negative: 'Deve ser um número negativo',
  integer: 'Deve ser um inteiro'
}

let date = {
  min: 'Deve ser depois de ${min}',
  max: 'Deve ser antes de ${max}'
}

let object = {
  noUnknown: '${path} field cannot have keys not specified in the object shape'
}

let array = {
  min: 'Deve ter pelo menos ${min} itens',
  max: 'Deve ter no máximo ou igual ${max} itens'
}

const translate = { mixed, string, number, date, object, array }

Yup.setLocale(translate)

export default Yup
