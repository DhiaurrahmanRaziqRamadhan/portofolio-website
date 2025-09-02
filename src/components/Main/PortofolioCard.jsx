function PortofolioCard({title, body, image, link}) {
  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mb-12 p-4 md:w-1/2"
        >
          {image ? (
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={image} alt={title} className="w-full" />
            </div>
          ) : (
            <div className="rounded-md shadow-md overflow-hidden bg-gray-300 flex items-center justify-center aspect-video">
              <span className="text-gray-600 text-sm">Private Project</span>
            </div>
          )}

          <h5 className="text-xl text-dark dark:text-white font-semibold mt-5 mb-3">
            {title}
          </h5>
          <p className="text-secondary text-base font-medium">{body}</p>
        </a>
      ) : (
        <div className="mb-12 p-4 md:w-1/2">
          {image ? (
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={image} alt={title} className="w-full" />
            </div>
          ) : (
            <div className="rounded-md shadow-md overflow-hidden bg-gray-300 flex items-center justify-center aspect-video">
              <span className="text-gray-600 text-sm">Private Project</span>
            </div>
          )}

          <h5 className="text-xl text-dark dark:text-white font-semibold mt-5 mb-3">
            {title}
          </h5>
          <p className="text-secondary text-base font-medium">{body}</p>
        </div>
      )}
    </>
  )
}

export default PortofolioCard
