import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => (
    <div className="Navigation">
        <ul>
          <li>
            <Link className="option" to="/">Home</Link>
          </li>

          <li>
            <Link className="option" to="/leaf">Leaf</Link>        
          </li>

          <li>
            <Link className="option" to="/">Watch</Link>        
          </li>

          <li>
            <Link className="option" to="/">Book</Link>
          </li>

        </ul>
    </div>
)

export default Navigation;