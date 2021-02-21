import React from 'react';
import '../Styles/Navbar.scss';

import {routes}  from "../routes";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className={'navbar'}>
            <h1 className={'navbar__title'}>
                Rick and Morty
            </h1>
            <div className={'navbar__link'}>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}
                       to={routes.main.path}>{routes.main.title}</Link>
            </div>
            
        </div>
    );
}

export default Navbar;