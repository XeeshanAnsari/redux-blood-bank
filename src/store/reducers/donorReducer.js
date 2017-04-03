

const INITIAL_STATE = {
    donorList:{},
    donorUpdate:false
   

}

export default function authReducer(state = INITIAL_STATE , action){

    switch(action.type){
        case 'DONER_REGISTER':
           return (state , { donorUpdate: true})
        case 'GET_ALL_DONORS':
           return (state , { donorList: action.donors})
        case 'GET_SEARCH_DONORS':
           return (state , { donorList: action.donors})
           
        
           
        default:
           return state
    }

}
