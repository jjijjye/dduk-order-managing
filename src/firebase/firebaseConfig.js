// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


// import firebase from 'firebase/app'

// // Initialize Firebase
// const config = {
//   apiKey: 'AIzaSyDZ_AXQ25gG2VTNXg6XCqT2u2Kl_yBLu90',
//   authDomain: 'dduck24-order.firebaseapp.com',
//   projectId: 'dduck24-order',
//   storageBucket: 'dduck24-order.appspot.com',
//   messagingSenderId: '554924470487',
//   appId: '1:554924470487:web:b09db1d2fccbac67908092',
//   measurementId: 'G-MMKSFN0JYD'
// }

// firebase.initializeApp(config)

// import firebase from 'firebase/app'
// import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyDZ_AXQ25gG2VTNXg6XCqT2u2Kl_yBLu90',
  authDomain: 'dduck24-order.firebaseapp.com',
  projectId: 'dduck24-order',
  storageBucket: 'dduck24-order.appspot.com',
  messagingSenderId: '554924470487',
  appId: '1:554924470487:web:b09db1d2fccbac67908092',
  measurementId: 'G-MMKSFN0JYD'
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()