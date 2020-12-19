/*
*  Name_file :routesStudent.js
*  Description: contiene rutas asociadas a componentes del Student
*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StudentBoard from '../components/pages/student/StudentBoard';
import GroupStudent from '../components/pages/student/GroupStudent';
import Writing from '../components/pages/student/Writing';

/*defino las rutas de los componentes
Rutas o urls del Student asociado a la componente pages/student*/
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/student" component={StudentBoard} />
                <Route exact path="/groupStudent" component={GroupStudent} />
                <Route exact path="/writing" component={Writing} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;