import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Orders from "./Orders";

function Routes () {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route path="/orders">
                        <Orders />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Routes;