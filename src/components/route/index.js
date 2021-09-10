import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../../pages/home'
import Users from '../../pages/users';
import EditUser from '../../pages/editUser';
import useStyles from './styles';

const index = [
    {
        path: '/',
        menu: 'Home',
    },
    {
        path: '/users',
        menu: 'Users',
    },
];

function RouteApp() {
    const { root, menu, nav, switchContainer,link } = useStyles();

    return (
        <Router>
            <div className={root}>
                <nav className={nav}>
                    <ul className={menu}>
                        {index.map((r) => (
                            <li key={r.menu}>
                                <Link className={link} to={r.path}>{r.menu}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={switchContainer}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/users" component={Users} />
                        <Route path="/EditUser" component={EditUser} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default RouteApp;
