import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./app/components/navBar";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";
import NotFound from "./app/layouts/notFound";
import Users from "./app/layouts/users";
import UserPage from "./app/components/userPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={UserPage} />
                <Route path="/users" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
