import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import {getData} from "./utils/data"

import { useEffect, useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  const toggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const data = getData();
    setPortfolio(data);
  }, []);

  return (
    <>
      <Header isActive={!isActive} toggle={toggle}/>
      <Main portfolio={portfolio}/>
      <Footer/>
    </>
  )
}

export default App
