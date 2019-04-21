import firebase from 'firebase/app'
import 'firebase/database'
import config from '../firebaseConfig'

firebase.initializeApp(config)
const db = firebase.database()

export async function getUsers() {
  const result = await db.ref('users').once('value')

  return result.val()
}
