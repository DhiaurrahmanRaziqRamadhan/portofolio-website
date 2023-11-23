function Contact() {
  return (
    // CONTACT SECTION START
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-2 text-lg font-semibold text-primary">Contact</h2>
            <h3 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Hubungi Saya</h3>
          </div>
        </div>
        <form>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="w-full px-4 mb-8">
              <label htmlFor="nama" className="text-based text-primary font-bold">Nama</label>
              <input type="text" id="nama" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1" required/>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-based text-primary font-bold">Email</label>
              <input type="text" name="email" id="email" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1" required/>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className="text-based text-primary font-bold">Pesan</label>
              <textarea name="pesan" id="pesan" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 mb-8"></textarea>
              <div className="w-full">
                <input type="submit" value="Kirim" className="w-full bg-primary rounded-full text-white font-bold py-3 px-8 hover:cursor-pointer focus:outline-none focus:ring-primary focus:ring-1 hover:bg-opacity-90 transition duration-300 ease-in-out"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    // CONTACT SECTION END
  )
}

export default Contact