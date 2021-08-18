import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyARYJPcrHGe_9c_3J7JmHPqHq-YnPDjQeM",
    authDomain: "todo-list-vue-89019.firebaseapp.com",
    projectId: "todo-list-vue-89019",
    storageBucket: "todo-list-vue-89019.appspot.com",
    messagingSenderId: "817034787557",
    appId: "1:817034787557:web:e2578701cf785be0f2b20c"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}