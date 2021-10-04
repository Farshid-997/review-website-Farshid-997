import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Features from './component/Features/Features';
import Services from './component/Services/Services';
import Blog from './component/Blog/Blog';
import About from './component/About/About';
import Footer from './component/footer/Footer';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>


        <Switch>
          <Route exact path="/">

            <Services></Services>
          </Route>

          <Route path="/services">

            <Services></Services>
          </Route>


          <Route path="/features">

            <Features></Features>
          </Route>


          <Route path="/blog">

            <Blog></Blog>
          </Route>


          <Route path="/about">

            <About></About>
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
