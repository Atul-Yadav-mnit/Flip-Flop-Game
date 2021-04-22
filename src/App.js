import './App.css';
import FlipCard from './components/FlipCard';
import Footer from './components/Footer'
import NavBar from './components/Navbar';
import CardContextProvider from './context/CardContext';


function App() {
  return (
    <div>
      <CardContextProvider>
      <NavBar/>
      <FlipCard/>
      </CardContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
