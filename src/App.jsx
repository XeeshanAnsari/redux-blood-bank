import React ,{Component}  from 'react'

import {Router , Route , IndexRoute , browserHistory} from 'react-router'
import {SignUp, LogIn, AppBar } from './containers'
import { }    from './components'

import injectTapEventPlugin from 'react-tap-event-plugin'; //react-tap-event-plugin provides onTouchTap() to all React Components.
injectTapEventPlugin();


class App extends Component{
    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path='/' component={AppBar}>    
                        <Route  path ="/signup" component={SignUp}/>
                        <Route  path ="/login" component={LogIn}/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App