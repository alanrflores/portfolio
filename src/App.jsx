import  {useState, useEffect } from 'react';
import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  };
  //cada vez que hagamos scroll se actualize, mediante useEffect
  useEffect(()=> {
    window.addEventListener("scroll", handleScroll)
  //cada vez que cambie el scroollH.. se va a ejecutar el useEffect y se actualiza 
  //nuestro estado con la posicion de el scroll.
  },[scrollHeight])
  
  //modificamos los estilos del navbar mediante la posicion del scroll
  return (
    <div className="App">
    <Navbar isScrolling = {scrollHeight}/>
     <Cover />
     <About />
     <Slider />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
