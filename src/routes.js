import React from "react";
import { BrowserRouter, Routes, Switch, Redirect} from "react-dom";

import { isAuthenticated } from "./servicesAuth";
const PrivateRoute = ({ component: Component, ...rest}) => (
    <Routes
    {...rest}
    render={props => isAuthenticated() ? (
        <Component {...props} />
    ): }//: (
       // <Redirect to = {{ pathname: "/", state: {from: props.location}}} />
    //)
    
 />
);
    const Route = () => (
        <BrowserRouter>
        <Switch>
            <Routes exact patch="/" component={() => <h1>Login</h1>} />
            <Routes patch="/signup" component={() => <h1>SingUp</h1>} />
            <PrivateRoute patch="/app" component={() => <h1>App</h1>} />
            <Routes patch="*" component={() => <h1>Page not found</h1>} />
        </Switch>
        
        </BrowserRouter>
    );

    export default Routes;