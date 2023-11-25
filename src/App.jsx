import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import {getData} from "./utils/data"
import { useEffect, useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);

  const initialDarkMode = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = useState(initialDarkMode)

  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const data = getData();
    setPortfolio(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleThemeSwitch = () => {
    setDarkMode(darkMode === 'dark' ? '' : 'dark')
  }

  return (
    <>
      <Header isActive={isActive} setActive={setActive} darkMode={darkMode} handleThemeSwitch={handleThemeSwitch}/>
      <Main portfolio={portfolio}/>
      <Footer/>
      <BackToTop/>
    </>
  )
}

export default App
