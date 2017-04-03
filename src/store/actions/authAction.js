import * as firebase from 'firebase'
import {browserHistory} from 'react-router'


//sign Up actions

export function signUp(user){
    return (dispatch) =>{
    firebase.auth().createUserWithEmailAndPassword(user.email,user.pass)
      .then((data) => {
         
          user.uid = data.uid;
         dispatch(signUpWithSuccess(user));//action Fire

          firebase.database().ref().child(`users/${user.uid}`).set(user)
          .then(() =>{
              browserHistory.push("/login")
          })
         
      })
      .catch(e => console.log(e.message))
    }

}

export  function signUpWithSuccess(user) {
    return {
        type: 'SIGN_UP',
        user: user
    }
}

//sign In actions

export function signIn(user){
     return (dispatch) =>{
      firebase.auth().signInWithEmailAndPassword(user.email,user.pass)
        .then((currentUser) => {
            
            localStorage.setItem("currentUser" , currentUser.uid)
             user.uid = currentUser.uid
        firebase.database().ref().child(`users/${user.uid}`).on('value', (snapshot) =>{
                const userInfo = snapshot.val()  
                dispatch(signInWithSuccess(userInfo))
                browserHistory.push('/')
            })
            
        }).catch(e => alert(e.message))
     }

}
export  function signInWithSuccess(user) {
    return {
        type: 'SIGN_IN',
        user: user
    }
}


//sign Out actions

export function signOut(){
    return (dispatch) =>{
        firebase.auth().signOut()
        .then(()=>{
          console.log("LogOut SuccessFully");
          dispatch(signOutWithSuccess());
          browserHistory.push("/");
      })
      .catch(e => console.log(e.message))
    }
}

export  function signOutWithSuccess() {
    return {
        type: 'SIGN_OUT',
       
    }
}