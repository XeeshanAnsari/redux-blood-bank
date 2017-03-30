

const INITIAL_STATE = {
    userAuth:{},
    isRegister: false,
    isAuthenticated : false

}

export default function authReducer(state = INITIAL_STATE , action){

    switch(action.type){
        case 'SIGN_UP':
           return (state , { userAuth:action.user , isRegister: true})
        case 'SIGN_IN':
           return (state , { userAuth:action.user , isAuthenticated: true})
           
        default:
           return state
    }

}
