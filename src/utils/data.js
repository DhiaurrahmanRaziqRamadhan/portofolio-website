import img1 from '../assets/portofolio/1.png'
import img2 from '../assets/portofolio/2.png'
import img3 from '../assets/portofolio/3.png'
import img4 from '../assets/portofolio/4.png'

const getData = () => ([
  {
    id: 1,
    title: "RentalSepeda",
    body: "Website CRUD Sederhana menggunakan PHP dan Bootstrap",
    image: img1,
  },
  {
    id: 2,
    title: "Landing Page Raja Ampat",
    body: "Landing Page yang menampilkan Profil Raja Ampat",
    image: img2,
  },
  {
    id: 3,
    title: "Aplikasi Catatan Pribadi",
    body: "Aplikasi untuk menuliskan catatan pribadi dan bisa diarsipkan menggunakan ReactJS",
    image: img3,
  },
  {
    id: 4,
    title: "Cinema Hunt",
    body: "Website untuk mencari judul film favorit menggunakan ReactJS dan Tailwindcss",
    image: img4,
  },
])

export {getData}