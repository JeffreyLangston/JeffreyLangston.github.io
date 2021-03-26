import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Test from "./Pages/Test";
import PhotoManipuation from "./Pages/PixelEffects/PhotoManipulation";

function App() {
  return (
    <HashRouter basename="/">
      <div className="wrapper">
        <Route exact path="/" component={About} />
        <Route path="/test" component={Test} />
        <Route path="/Canvas-Photo-Manipulation" component={PhotoManipuation} />
      </div>
    </HashRouter>
  );
}
const About = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/test">About</Link>
    <Link to="/Canvas-Photo-Manipulation">Pixel Effects</Link>

    <hr />
  </div>
);

export default App;
