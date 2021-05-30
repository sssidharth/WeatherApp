import React, {Component} from 'react';
import Dashboard from './Dashboard';

class MainComponent extends Component{
    render(){
        return(
<div className ="row"> 
    <div className="col-sm-md-8">
    <Dashboard/>
    </div>   
</div>    
        );        
    }
}

export default MainComponent;