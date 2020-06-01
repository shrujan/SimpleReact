import React, { useEffect } from 'react';
import './Cockpit.css';
import '../../context/auth-context';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    console.log("**[cockpit.js]Cockpit props ",props);

    useEffect(() => {
        // this React hook covers the functionality of all the lifecycle hooks a class based component has \
        // this takes a function as a param and we execute code here
        console.log('Cockpit Use Effect');

        // http request can be made
        //componentDidMount and componentDidUpdate in one 
    }) 

    return (
        <div>
            <h1 >{props.title}</h1>
            <button className="btn-toggle" onClick={ props.toggleBtn } > Toggle Person View</button>
            <AuthContext.Consumer > 
                { (context) => {
                    return (
                        <button className="btn-login"  onClick={ context.login } > Login</button>
                    )
                }}
            </AuthContext.Consumer>
            
                { props.peopleList }
            
        </div>
          
    );

}

export default Cockpit