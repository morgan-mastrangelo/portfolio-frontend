import DoorEffect from "./components/DoorEffect";
import Header from "./layout/Header";
import About from "./layout/About";
import Skills from "./layout/Skills";
import Portfolio from "./layout/Portfolio";
import {useEffect, useState} from "react";
import Loader from "./components/Loader";
import Experience from "./layout/Experience";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', function () {
      setIsLoading(false);
    })
  })

  return isLoading ? <Loader/> : (
    <Provider store={store}>
      <div>
        <DoorEffect/>

        <Navbar/>
        <Header/>

        <About/>
        <Skills/>
        <Portfolio/>
        <Experience/>
        <Contact/>

        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
