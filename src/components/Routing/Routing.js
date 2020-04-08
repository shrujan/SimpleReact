import React from 'react';
import { Link, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Counter from '../../containers/counter/counter';
import FruitList from '../../containers/FruitsList/FruitList';
import './Routing.css'



const Routing = () => {

    return (
      <BrowserRouter>
            <header className="routing-links">
                <nav>
                    <ul>
                        <li>
                            <Link to='/fruit'> Fruit </Link>
                            <Link to='/Counter'> Counter </Link> {/* to also accepts obj like query params and hash #*/}
                        </li>
                    </ul>
                </nav>
            </header>

            <Route path='/fruit' exact component={FruitList}></Route>
            <Route path='/Counter' exact component={Counter}></Route>

        </BrowserRouter>
        
    )
}

export default Routing;