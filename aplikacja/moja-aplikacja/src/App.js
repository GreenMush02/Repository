import React, { Component } from 'react'
import Login from './components/Login.js';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import Players from './components/Players';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



const App = () => {



    const content = <div>


<Router>
    <Switch>
<Route exact path="/" component={Login}/>
<Route path="/players" component={Players}/>






    </Switch>
</Router>





</div>



return content;





}

export default App;