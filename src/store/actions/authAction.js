



export  function signUp(user) {
    return {
        type: 'SIGN_UP',
        user: user
    }
}

export  function signIn(user) {
    return {
        type: 'SIGN_IN',
        user: user
    }
}