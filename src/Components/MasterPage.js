import React from 'react';
import Navbar from "./Navbar";
import Items from "./Items";
import {ItemDetailsWithRouter} from "./ItemDetails";

import {createBrowserHistory} from 'history';

import {Router,Switch,Route} from 'react-router-dom';
import {routes} from '../routes';

function MasterPage(props) {
    const {characters,handlePageChange,history} = props;

    return (
        <div>
            <Router history={history}>
                <Navbar/>
                <Switch>
                    <Route exact path={routes.main.path}>
                        <Items handlePageChange={handlePageChange} characters={characters}/>
                    </Route>
                    <Route exact path={routes.detail.path} >
                        <ItemDetailsWithRouter characters={characters}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default MasterPage;