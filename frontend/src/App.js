import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage';
import NewsletterDetails from './pages/NewsletterDetails';
import Category from './pages/Category';
import SiteNav from './components/SiteNav';

function App() {
  return (
    <Router>  
    <div className="App">
    <SiteNav />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/newsletters/:id">
        <NewsletterDetails />
      </Route>
      <Route path="/category/:id">
        <Category />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
