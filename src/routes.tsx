import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateOrphanage from './Pages/CreateOrphanage';
import Landing from './Pages/Landing';
import Orphanage from './Pages/Orphanage';
import OrphonagesMap from './Pages/OrphonagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/app" component={OrphonagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 