import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />

     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu"  component={Menu} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
     </Switch>

     <Footer />
     
     </Router>
    </div>
  );
}

export default App;
