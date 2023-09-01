import './App.css';
import About from './About/about';
import Blog from './Blog/blog';
import Header from './Header/header';
import Services from './Serv/service';
import Tariff from './Tariff/tariff';
import Opinion from './Opinion/opinion';
import Contact from './Contact/contact';
import Footer from './Footer/footer';

function App() {
  return (
   <div>
    <Header/>
    <About/>
    <Services/>
    <Tariff/>
    <Blog/>
    <Opinion/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
