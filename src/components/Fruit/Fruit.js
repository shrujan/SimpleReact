import React from 'react'



const Fruit = (props) => {

    
    
    return (
        <div> 
            <div className="fruit">
                { fruitList( props.list, props.whenClicked ) }
            </div>
        </div>
    )
    

}


const fruitList = (list, whenClicked) => {
    let fruit = null;
    if (list.length > 0) {
        fruit = list.map((fruitData, index) => {
            return (
                    <div className="fruit-list"
                        key={index}>
                        { fruitData }
                        <span className="delete-icon" onClick={ () => { return whenClicked(fruitData) } }>X</span>

                    </div>
                )
        })
    }

    return fruit
}

export default Fruit;