import PortofolioCard from "./PortofolioCard"

function Portofolio({portfolio}) {
  return (
    // PORTFOLIO SECTION START
    <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4 mb-10">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-primary uppercase font-bold text-xl lg:text-2xl mb-3">Portfolio</h2>
            <h3 className="text-dark text-3xl font-bold">Project Terbaru</h3>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {portfolio.map((item) => (
            <PortofolioCard
              {...item}
              key={item.id}
            />
          ))}
        </div>

      </div>
    </section>
    // PORTFOLIO SECTION END
  )
}

export default Portofolio