import React ,{Component ,PropTypes} from 'react'
import * as MUI from 'material-ui'
import {connect } from 'react-redux'
import {browserHistory} from 'react-router'
// import {donorRegister} from './../../store/actions'
import * as firebase from 'firebase'
import './DonorRegister.css'

export class DonorRegister extends Component{
    
    static contextTypes = {
      router: PropTypes.object.isRequired
  }
    constructor(){
      super()
      this.state = {
          address: '',
          contectNo: '',
          bloodGroupValue:"",
          bloodGroup:""
         
      }
      this.handleRegister = this.handleRegister.bind(this)
    //   this.handleOnChange = this.handleOnChange.bind(this)
  }
  //handele Signup
  handleRegister(e){
      e.preventDefault()

      const donor ={
           firstName: this.refs.firstName.getValue(),
           lastName: this.refs.lastName.getValue(),
           address: this.refs.address.getValue(),
           bloodGroup: this.state.bloodGroup,
           contactNo: this.refs.contactNo.getValue(),
           email: this.props.userAuth.email,
           uid:this.props.userAuth.uid,
           isDoner: true
         }
      
      this.props.registerDoner(donor);
        //   let uid = localStorage.getItem('currentUser');
        
        //  console.log(uid)

        //  firebase.database().ref().child('users/' + uid).set(doner)
        //  .then(() =>{
             
        //        this.props.registerDoner(doner);
        //  })
         
         

   
  }
  componentWillReceiveProps(){

  }
  componentWillMount(){
     (this.props.isAuthenticated)
     ? this.setState({
          firstName:this.props.userAuth.firstName,
          lastName:this.props.userAuth.lastName,
          address:this.props.userAuth.address,
          contactNo:this.props.userAuth.contactNo,
          bloodGroupValue:this.props.userAuth.bloodGroup,
      })
      :this.context.router.push('/login')
      
  }
//   handleOnChange(e){
//        this.setState({[e.target.name]: [e.target.value]})
//    }
   
   handleBloodgroup(e , index ,value ){
       this.setState({bloodGroupValue: value})
       this.setState({bloodGroup: e.target.childNodes[0].nodeValue})
       console.log(this.state.bloodGroup)

  }

 
    render(){
        return(
            <div>
              <MUI.MuiThemeProvider>
                  <div className="container">
                    <MUI.Paper className="paper" >
                        <h1>Register</h1>
                        
                        <MUI.Divider />
                        <form onSubmit={this.handleRegister}>
                            <MUI.TextField  
                                ref="firstName"
                                value={this.state.firstName}
                                floatingLabelText="First Name"                                 
                                hintText="First Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="lastName"
                                value={this.state.lastName}
                                floatingLabelText="Last Name" 
                                hintText="Last Name"
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                ref="address"
                                floatingLabelText="Address" 
                                hintText="Address"
                                value={this.state.address}
                                onChange={e => this.setState({address: e.target.value})}
                                fullWidth={true}
                                required
                                />
                            <MUI.TextField  
                                value ={this.state.contectNo}
                                ref="contactNo"
                                floatingLabelText="Contect No" 
                                hintText="Contect No"
                                onChange={e => this.setState({contectNo: e.target.value})}
                                fullWidth={true}
                                required
                               
                                />
                             <MUI.SelectField 
                             ref="bloodGroup"
                             floatingLabelText="Blood Group"
                             value={this.state.bloodGroupValue}
                             fullWidth 
                             onChange={this.handleBloodgroup.bind(this)} >

                                    <MUI.MenuItem  value={1} primaryText="A+" />
                                    <MUI.MenuItem  value={2} primaryText="B+" />
                                    <MUI.MenuItem  value={3} primaryText="AB+" />
                                    <MUI.MenuItem  value={4} primaryText="O+" />
                                    <MUI.MenuItem  value={5} primaryText="A-" />
                                    <MUI.MenuItem  value={6} primaryText="B-" />
                                    <MUI.MenuItem  value={7} primaryText="AB-" />
                                    <MUI.MenuItem  value={8} primaryText="O-" />
                                    

                              </MUI.SelectField>   
                          
                                
                                
                    
                        <MUI.RaisedButton 
                                type="submit"
                                    label="Register"
                                    className="submit-btn"
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


// function mapStateToProps(state){
//     return {
     
//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//        registerDoner: (data) => dispatch(donorRegister(data))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DonorRegister);
 export default DonorRegister;