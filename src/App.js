import Navbar from './components/navbar/navbar';
import Buttons from './components/buttons/buttons.js';
import Hero from './components/hero/hero.js';
import './App.css';
import Footer from './components/footer/footer.js';
import Appoint from './components/appoint/appoint.js';
import Services from './components/services/services.js';

function App() {
  return (
    <div className="App poppins-regular">
      <Navbar />
      <Hero />
     <Buttons />
     <Appoint />
     <Services />
     <Footer />
    </div>
  );
}

export default App;
