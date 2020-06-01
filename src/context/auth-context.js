import React from 'react';


// we created a new context with passes 2 params 

const AuthContext = React.createContext({
    authenticated: false,
    login: () => {}
})


export default AuthContext;