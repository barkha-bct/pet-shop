import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Dog from './Components/Dog';
import Cat from './Components/Cat';
import Header from './Components/Header';
import Offers from './Components/Offers';
import Error from './Components/ErrorComponent';
import Body from './Components/Body';

function App() {
  return (
    <Router>
      <Header />
      {/* <Body /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dog-food" render={(props) => <Body section="Dog" />} />
        <Route path="/cat-food" render={(props) => <Body section="Dog" />} />
        <Route path="/dog-toys"  render={(props) => <Body section="Dog" />} />
        <Route path="/offers"  render={(props) => <Body section="Offers" />} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
