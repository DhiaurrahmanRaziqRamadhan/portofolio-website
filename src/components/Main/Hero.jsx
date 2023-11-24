import hero from "../../assets/hero-image.png"

function Hero() {
  return (
    // HERO SECTION START
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          {/* INTRODUCTION START */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">Halo Semua 🚀, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Dhiaurrahman Raziq Ramadhan</span></h1>
            <h2 className="font-medium text-slate-600 text-lg mb-5 md:text-xl lg:text-2xl">Web Developer</h2>
            <p className="font-medium text-slate-500 mb-10 leading-relaxed">Merupakan seorang mahasiswa semester 5 yang saat ini sedang tertarik mempelajari <span className="text-dark font-semibold">TailwindCSS</span> dan <span className="text-dark font-semibold">React Js</span></p>

            <a href="#" className="text-based font-semibold text-white bg-primary px-8 py-3 rounded-full hover:shadow-lg hover:bg-opacity-90 transition duration-300 ease-in-out">Hubungi Saya</a>
          </div>
          {/* INTRODUCTION END */}

          {/* IMAGE START */}
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 lg:mt-0 right-0">
              <img src={hero} alt="hero-image" className="max-w-full mx-auto"/>
            </div>
          </div>
          {/* IMAGE END */}
        </div>
      </div>
    </section>
    // HERO SECTION END
  )
}

export default Hero