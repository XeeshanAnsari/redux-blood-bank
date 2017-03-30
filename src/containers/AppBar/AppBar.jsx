import React ,{ Component } from 'react'
import * as MUI from 'material-ui'
import {browserHistory , Link} from 'react-router'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import './AppBar.css'



class AppBar extends Component{


  constructor(){
      super()
      this.state = {
          drawerOpen : false         
         }
         this.handleDrawerToggle = this.handleDrawerToggle.bind(); 
     }
 
  handleDrawerToggle(){
       this.setState({drawerOpen: !this.state.drawerOpen});
  }



drawerMenu(){
    return (
      <div>
          <div className="navigation-avatar-div">
            <MUI.Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                    size={50}
                    className="navigation-icon"/>
            <span className="navigation-span">Hello World</span>
          </div>
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText="Dashboard"
             
              containerElement={<Link to="/dashboard"/>}
            />
          <MUI.MenuItem
              className="navigation-menuItem"
              primaryText="Register as Doner"
              
              containerElement={<Link to="/dashboard/registerDonor"/>}
            />
          <MUI.MenuItem
            className="navigation-menuItem"
            primaryText="Doners"
            
            containerElement={<Link to="/dashboard/donorlist"/>}
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
                                       <div>
                                            <Link to="/login"  className='buttons'><MUI.RaisedButton primary={true} >LogIn</MUI.RaisedButton></Link>
                                            <Link to="/signup"  className='buttons'><MUI.RaisedButton  primary={true} >Sign Up</MUI.RaisedButton></Link> 
                                  
                                       </div>  
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
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
