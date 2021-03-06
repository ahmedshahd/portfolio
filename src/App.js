import Home from "./components/Home";
import "./App.css";
import Bio from "./components/Bio";
import Code from "./components/Code";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Podcasts from "./components/Podcasts";
import Graveyard from "./components/Graveyard";

function App() {
  return (
    <div className="App">
      <Home />
      <Bio />
      <Code />
      <Projects />
      <Writing />
      <Podcasts />
      <Graveyard />
    </div>
  );
}

export default App;
