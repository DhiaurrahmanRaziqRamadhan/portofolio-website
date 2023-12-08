function PortofolioCard({title, body, image, link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="mb-12 p-4 md:w-1/2">
      <div className="rounded-md shadow-md overflow-hidden">
        <img src={image} alt="RentalSepeda" width="w-full"/>
      </div>
      <h5 className="text-xl text-dark dark:text-white font-semibold mt-5 mb-3">{title}</h5>
      <p className="text-secondary text-base font-medium">{body}</p>
    </a>
  )
}

export default PortofolioCard