import { HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import './App.css';





function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="myname_container">
            <h1 className="myname">Drew Wilson</h1>
          </div>
          <div>
            <Link to="/" className="links">About</Link>
            <Link to="/projects" className="links">Projects</Link>
            <Link to="/contact" className="links">Contact</Link>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/drew-e-wilson/" target="_blank"><h1 className="icon-logos"><AiFillLinkedin/></h1></a>
            <a href="https://github.com/Drew-E-Wilson" target="_blank"><h1 className="icon-logos"><AiFillGithub/></h1></a>
          </div>
        </nav>
        <main>
          <Switch>AiFillGithub
            <div>
              <Route path='/' exact component={About}></Route>
              <Route path='/projects' component={Projects}></Route>
              <Route path='/contact' component={Contact}></Route>
            </div>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
