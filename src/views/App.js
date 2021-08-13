import Home from "./Home"
import "./app.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
        </Switch>
    </Router>
  );
}

export default App;
