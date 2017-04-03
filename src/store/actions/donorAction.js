import * as firebase from 'firebase'

// donor register

export function donorRegister(donor){
    return (dispatch) =>{
         let uid = localStorage.getItem('currentUser');
          console.log(uid)

         firebase.database().ref().child('users/' + uid).set(donor)
         .then(() =>{
             
               dispatch(donorRegisterWithSuccess(donor));
         })
         .catch(e => console.log(e.message))
    }

}
export  function donorRegisterWithSuccess(donor) {
    return {
        type: 'DONER_REGISTER',
        donor: donor
    }
}


// get all donors 

export function getDonorsList(donor){
    return (dispatch)=>{
     const dbRef = firebase.database().ref().child('users')
                                      .orderByChild("isDoner").equalTo(true)
            dbRef.on('value', (snapshot) =>{
                const donorList = [];
                const obj = snapshot.val(); 
                for (var data in obj){
                    donorList.push(obj[data])
                }
                dispatch(getDonorsListWillSuccess(donorList));

            })
            
    }
}
export  function getDonorsListWillSuccess(donors) {
    return {
        type: 'GET_ALL_DONORS',
        donors: donors
    }
}

// get all donors 


export function searchDonorsList(bloodGroup){
    return (dispatch) =>{
        var matchDonors = [];
        var donors = [];
        switch (bloodGroup) {
            case "A+":
                matchDonors.push(['A+', 'O+', 'A-', 'O-']);
                 break;
            case "B+": {
                matchDonors.push(['B+', 'O+', 'B-', 'O-']);
                break;
            }
            case "AB+": {
                matchDonors.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
                break;
            }
            case "O+": {
                matchDonors.push(['O+', 'O-']);
                break;
            }
            case "A-": {
                matchDonors.push(['A-', 'O-']);
                break;
            }
            case "B-": {
                matchDonors.push(['B-', 'O-']);
                break;
            }
            case "AB-": {
                matchDonors.push(['AB-', 'O-', 'A-', 'B-']);
                break;
            }
            case "O-": {
                matchDonors.push(['O-']);
                break;
            }


        }

        
                                         
        matchDonors.map((v,i) => {
            // console.log(v)
            return v.map((value,i) =>{
                // console.log(value)
               const dbRef = firebase.database().ref().child('users').orderByChild('bloodGroup').equalTo(value);
                 dbRef.on('value', (snapshot) =>{
                    let obj = snapshot.val();
                    // console.log(obj)
                    for(var data in obj){
                        donors.push(obj[data])
                    }
                    // console.log(donors)
                 })

            })
        })
        dispatch(searchDonorsListWillSuccess(donors))
        

    }
}
export  function searchDonorsListWillSuccess(donors) {
    return {
        type: 'GET_SEARCH_DONORS',
        donors: donors
    }
}