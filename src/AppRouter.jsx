import { Route, Router, Switch } from "wouter";
import About from "./pages/About";

function AppRouter(){
    <Router> 
        <Switch>
            <Route path = "/about"> 
            <About/> 
            </Route>

        </Switch>
    </Router>
}

export default AppRouter;