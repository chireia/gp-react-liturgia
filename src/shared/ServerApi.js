import firebase from 'firebase/app'
import 'firebase/database'
import config from '../firebaseConfig'

firebase.initializeApp(config)
const db = firebase.database()

// Usuários

export async function getUsers() {
  const result = await db.ref('users').once('value')

  return result.val()
}

// Colaboradores

export async function getColab(id) {
  const result = await db.ref('colaboradores/' + id).once('value')

  return result.val()
}

export async function getColabs() {
  const result = await db
    .ref('colaboradores/')
    .orderByChild('nome')
    .once('value')

  return result.val()
}

export async function putColab(id, values) {
  let res = true
  await db
    .ref('colaboradores/' + id)
    .update(values)
    .catch(e => {
      res = false
      console.log(e)
    })

  return res
}

export async function postColab(values) {
  let res = true
  await db
    .ref('colaboradores/')
    .push(values)
    .catch(e => {
      res = false
      console.log(e)
    })

  return res
}

export async function deleteColab(id) {
  let res = true
  await db
    .ref('colaboradores/' + id)
    .remove()
    .catch(e => {
      res = false
      console.log(e)
    })

  return res
}
