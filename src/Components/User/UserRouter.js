import React from 'react'
import {Route, Switch , BrowserRouter as Router} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import DashBoard from './Dashboard'



function UserRouter(props) {
 return(
<div>
  <Router>
     <Route  component={SignIn} path='/SignIn' exact strict history={props.history} /> 
     <Route  component={DashBoard} path='/Dashboard' exact strict history={props.history} /> 
     <Route  component={SignUp} path='/SignUp' exact strict history={props.history} />
    
  </Router>
</div>


 )

}
export default UserRouter;