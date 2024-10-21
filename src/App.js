import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Apphero from './components/hero';
import About from './components/About';
import AppServices from './components/services';


function App() {
  return (
    <div className="App">
       <header id="header"> 
            <Header/> 
       </header>
       <main>
        <Apphero/>
        <About/>
        <AppServices/>
       </main>
    </div>
  );
}

export default App;
