// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>
      
      
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route exact path="/services">
          <Services></Services>

        </Route>
        <Route exact path="/about">
          <About></About>

        </Route>

        <Route exact path="/pricing">
          <Pricing></Pricing>

        </Route>
        <Route exact path="/contact">
          <Contact></Contact>

        </Route>
        <Route path="*">
            <NotFound></NotFound>

          </Route>



      </Switch>
      <Footer></Footer>
      </Router>
      

    </div>
  );
}

export default App;
