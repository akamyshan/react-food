import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className="container content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/category/:name">
                            <Category />
                        </Route>
                        <Route path="/meal/:id">
                            <Recipe />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
