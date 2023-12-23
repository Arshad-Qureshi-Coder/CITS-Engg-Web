
import './App.css';
import Departments from './components/Dipartments';
import Footer from './components/Footer';
import Home from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Departments/>
      <Footer/>
    </div>
  );
}

export default App;
