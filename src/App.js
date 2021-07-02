
import './App.css';
import Products from './Products';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import SavedItemsList from './SavedItemsList';



function App() {
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path="/" component={Products}/>
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/saved" component={SavedItemsList} />

    </Switch>
    </Router>
    </div>
  );
}

export default App;
