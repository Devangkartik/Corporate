import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Apphero from './components/hero';
import About from './components/About';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/team';
import AppTestimonials from './components/testimonials';
import AppPricing from './components/pricing';
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
        <AppTeams/>
        <AppTestimonials/>
        <AppPricing/>
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
