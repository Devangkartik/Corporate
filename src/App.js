import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Apphero from './components/hero';
import About from './components/About';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';


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
        <AppWorks/>
        <AppBlog/>
        <AppContact/>
       </main>
       <footer>
          <AppFooter id="footer" />
       </footer>
    </div>
  );
}

export default App;
