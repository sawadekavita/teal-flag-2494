import './App.css';
import Navbar from './Components/Navbar';
import Navbar1 from './Components/Navbar1';
import Top from './Components/Top';
import Signin from './Components/Signin';
import Mid from './Components/Mid';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
      <Top />
      <Navbar />
      <Navbar1 />
      <Signin />
      <Mid />
      {/* <Home /> */}
    </div>
  );
}

export default App;

