
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Header/>
    <Content/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    </div>
  );
}

export default App;
