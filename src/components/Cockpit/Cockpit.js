import React, { useEffect } from 'react';

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
            <button onClick={ props.toggleBtn } > Toggle Person View</button>
            
                { props.peopleList }
            
        </div>
          
    );

}

export default Cockpit