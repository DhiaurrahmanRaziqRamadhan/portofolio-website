import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_php1mvt', 'template_qucmx0r', form.current, 'LDZqYfaZELtbSs1Tt')
      .then(() => {
          Swal.fire({
            title: "Pesan Berhasil Terkirim",
            icon: "success",
          });
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // CONTACT SECTION START
    <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-2 text-lg font-semibold text-primary">Contact</h2>
            <h3 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Hubungi Saya</h3>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="w-full px-4 mb-8">
              <label htmlFor="nama" className="text-based text-primary font-bold">Nama</label>
              <input type="text" id="nama" name="user_name" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1" required/>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-based text-primary font-bold">Email</label>
              <input type="text" id="email" name="user_email" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1" required/>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="pesan" className="text-based text-primary font-bold">Pesan</label>
              <textarea name="message" id="pesan" className="w-full bg-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-primary focus:ring-1 mb-8"></textarea>
              <div className="w-full">
                <input type="submit" value="Send"  className="w-full bg-primary rounded-full text-white font-bold py-3 px-8 hover:cursor-pointer focus:outline-none focus:ring-primary focus:ring-1 hover:bg-opacity-90 transition duration-300 ease-in-out"/>
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