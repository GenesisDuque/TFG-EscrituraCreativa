/*
*  Name_file :routesAdmin.js
*  Description: contiene rutas asociadas a componentes del Admin
*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeAdmin from '../components/pages/admin/HomeAdmin';

/*defino las rutas de los componentes
Rutas o urls del Admin asociado a la componente pages/admin*/
function Routes() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/homeAdmin" component={HomeAdmin} />
        </Switch>
      </BrowserRouter>
    );
  }

export default Routes;