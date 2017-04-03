import React ,{ Component,PropTypes } from 'react'
import * as MUI from 'material-ui'
import {browserHistory , Link} from 'react-router'
import {signOut} from './../../store/actions'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import './AppBar.css'



class AppBar extends Component{

  static contextTypes = {
      router: PropTypes.object.isRequired
  }

  constructor(){
      super()
      this.state = {
          drawerOpen : false         
         }
         this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
         this.handleLogOut = this.handleLogOut.bind(this)
     }
 
  handleLogOut(e){
      this.props.logOut();
  }

  handleDrawerToggle(){
       this.setState({drawerOpen: !this.state.drawerOpen});
  }

  
//avater menu
drawerMenu(){
    return (
      <div>
          <div className="navigation-div">
            
            <span >{this.props.userAuth.firstName +" "+ this.props.userAuth.lastName}</span>
          </div>
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText="View All Donor"
             
              containerElement={<Link to="/viewDonors"/>}
            />
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText={this.props.userAuth.isDoner ? "Update Info": "Register As Doner"}
              
              containerElement={<Link to="/donorRegister"/>}
            />
          
      </div>
    );
  }
    render(){
        return(
           
            <div>
               
              <MUI.MuiThemeProvider>
                  <div>
                      <div>
                          <MUI.AppBar
                               title="Blood Bank System"
                               onLeftIconButtonTouchTap={this.handleDrawerToggle}
                               iconElementRight={
                                   <div>
                                       {(this.props.isAuth) ?
                                       <div>
                                            <Link to="/"  className='buttons'><MUI.RaisedButton  primary={true} onTouchTap={this.handleLogOut}>LogOut</MUI.RaisedButton></Link>                                             
                                       </div>  
                                       :
                                         <div>
                                            <Link to="/login"  className='buttons'><MUI.RaisedButton primary={true} >LogIn</MUI.RaisedButton></Link>
                                            <Link to="/signup"  className='buttons'><MUI.RaisedButton  primary={true} >Sign Up</MUI.RaisedButton></Link> 
                                         </div>
                                       }
                                  </div>
                               }

                           />
                           <MUI.Drawer open={this.state.drawerOpen} docked={false}
                                onRequestChange={this.handleDrawerToggle}>
                               {this.drawerMenu()}
                            </MUI.Drawer>
                       {this.props.children} 
                      </div>   
                  </div>    
               </MUI.MuiThemeProvider>   
                   
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isAuth: state.authReducer.isAuthenticated,
        userAuth: state.authReducer.userAuth
    }
}

function mapDispatchToProps(dispatch){
    return{
        logOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
