import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portofolio from "./Portofolio";

function Main({ portfolio }) {
  return (
    <main>
      <Hero/>
      <About/>
      <Portofolio portfolio={portfolio}/>
      <Contact/>
    </main>
  )
}

export default Main