import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firabase/auth'

// Firebase config
import * as firebaseConfig from '../config/firebase.json'

// Initialize Firebase using config
firebase.initializeApp(firebaseConfig)

// Utils
const db = firebase.firestore()
const auth = firebase.auth()

// Collection references
// const exampleCollection = db.collection('example')

// Export utils/refs
export {
    db,
    auth
}