function PortofolioCard({title, body, image}) {
  return (
    <div className="mb-12 p-4 md:w-1/2">
      <div className="rounded-md shadow-md overflow-hidden">
        <img src={image} alt="RentalSepeda" width="w-full"/>
      </div>
      <h5 className="text-xl text-dark font-semibold mt-5 mb-3">{title}</h5>
      <p className="text-secondary text-base font-medium">{body}</p>
    </div>
  )
}

export default PortofolioCard