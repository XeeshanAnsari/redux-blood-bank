import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {signIn} from './../../store/actions'
import * as firebase from 'firebase'
import FirebaseService from './../../firebase/firebaseService'
// import {signIn , currentUserInfo} from './../../store/actions'
import './LogIn.css'



class LogIn extends Component{


  constructor(){
      super()
      this.state = {
          uid:'',
          email:'',
          pass:'',
         }
         this.handleSignIn = this.handleSignIn.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
     
  }
 

 handleSignIn(e){
     e.preventDefault();
     
     firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.pass)
     .then((user) => {
         this.setState({uid: user.uid})
         console.log(this.state)
         localStorage.setItem("currentUser" , user.uid)
         this.props.logIn(this.state)
         browserHistory.push('/')

        // firebase.database().ref('users/' + user.uid).on('value', (snapshot) =>{
        //     const currentUser = snapshot.val()  
        //     console.log(currentUser)
        //     this.props.currentUser(currentUser)
        //  })
         
     }).catch(e => alert(e.message))

 }
 
   handleOnChange(e){
       this.setState({[e.target.name]: [e.terget.value]})
   }
    
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div className="signin-container">
                      <MUI.Paper className="signin-paper" >
                          <h1>Log In</h1>
                          <MUI.Divider />
                      <form onSubmit={this.handleSignIn}>
                        <MUI.TextField  
                            value={this.state.email}
                            floatingLabelText="Email" 
                            hintText="Email"
                            fullWidth={true}
                            onChange={e => this.setState({email: e.target.value})}
                             />
                        <MUI.TextField  
                            value={this.state.pass}
                            floatingLabelText="Password" 
                            hintText="Password"
                            fullWidth={true}
                            type="password"
                            onChange={e => this.setState({pass: e.target.value})}
                            />
                       
                       <MUI.RaisedButton 
                                type="submit"
                                label="Sign In"
                                className="signin-btn"
                                primary={true}/>


                     </form>
                     </MUI.Paper >
                  </div>
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
       isAuth : state.authReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch){
    return{
      logIn: (data) => dispatch(signIn(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
