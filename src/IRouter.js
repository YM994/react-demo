import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Home from './pages/Home/index'
import PersonalCenter from './pages/personalCenter/index'
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
                                <Route exact path="/home"><Home/></Route>
                                <Route exact path="/home/tenant-center"> <PersonalCenter/></Route>
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