import firebase from 'firebase/app'
import config from '../firebaseConfig'
import 'firebase/database'

firebase.initializeApp(config)
const db = firebase.database().ref('/users')

export async function getUsers() {
  const result = await db.once('value')

  return result.val()
}
