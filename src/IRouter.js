import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
class IRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    {/*<Route exact path="/">*/}
                    {/*    <Login/>*/}
                    {/*</Route>*/}
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                            {/*    <Route path="/admin/home">*/}
                            {/*        <Home/>*/}
                            {/*    </Route>*/}
                            </Switch>
                        </Admin>
                    }>
                    </Route>
                </App>
            </BrowserRouter>
        );
    }
}

export default IRouter;