import React ,{Component, PropTypes} from 'react'
import * as MUI from 'material-ui'
import {connect } from 'react-redux'
import {signUp} from './../../store/actions'
import {browserHistory} from 'react-router'
import * as firebase from 'firebase';
import './SignUp.css'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvFsLFrDIzQiC3Fkd8u-VyIHB-5TkJRBE",
    authDomain: "blood-bank-1c490.firebaseapp.com",
    databaseURL: "https://blood-bank-1c490.firebaseio.com",
    storageBucket: "blood-bank-1c490.appspot.com",
    messagingSenderId: "863780767346"
  };
 firebase.initializeApp(config);




export class SignUp extends Component{


   static contextTypes = {
       router: PropTypes.object.isRequired
   }
   
    constructor(props){
      super(props)
      this.handleSignUp = this.handleSignUp.bind(this)
  }



  handleSignUp(e){
         
        e.preventDefault();
        
         const user ={
             firstName: this.refs.firstName.getValue(),
             lastName: this.refs.lastName.getValue(),
             email: this.refs.email.getValue(),
             pass:  this.refs.pass.getValue(),
             isDoner: false
         }
        console.log(user)
       this.props.SignUp(user);
  }
 
    render(){
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div className="signup-container">
                    <MUI.Paper className="signup-paper" >
                        <h1>Sign Up</h1>
                        <MUI.Divider />
                        <form onSubmit={this.handleSignUp}>
                            <MUI.TextField  
                                ref="firstName"
                                floatingLabelText="First Name"
                                 
                                hintText="First Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="lastName"
                                floatingLabelText="Last Name" 
                                hintText="Last Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="email"
                                type='email'
                                floatingLabelText="Email" 
                                hintText="Email"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="pass"
                                floatingLabelText="Password" 
                                hintText="Password"
                                fullWidth={true}
                                required
                                type="password"
                                />
                        <MUI.RaisedButton 
                                    type="submit"
                                    label="Signup"
                                    className="signup-btn"
                                    primary={true}
                                    />


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
        
    }
}

function mapDispatchToProps(dispatch){
    return{
       SignUp: (data) => dispatch(signUp(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
