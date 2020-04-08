import React from 'react';

// this is similar to reacts inbuilt HOC called fragment
// this accepta a component and just returns it.
// This simple component is used to wrap elements to if there are adjecent JSX
// example used in fruit

const Aux = (props) => {
    return (
        props.children
    )
}

export default Aux;