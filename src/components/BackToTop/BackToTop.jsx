function BackToTop(){
  return (
    <a href="#home" className="hidden z-[999] justify-center items-center p-4 h-14 w-14 rounded-full bg-primary fixed bottom-4 right-4 shadow-xl" id="toTop">
      <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2 hover:animate-pulse"></span>
    </a>
  )
}

export default BackToTop