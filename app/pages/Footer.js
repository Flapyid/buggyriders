export default function Footer() {
  return (
    <footer style={{backgroundColor:"#eeeeee"}} className="relative ">
      {/* Call to Action */}
      <div className="bg-[#df6618] text-white rounded-md max-w-6xl w-full shadow-md px-6 py-6 text-center absolute -top-20 left-1/2 transform -translate-x-1/2">
        <h2 className="text-lg md:text-3xl font-bold uppercase mb-3">
          READY TO BOOK YOUR ADVENTURE TOUR WITH BUGGY RIDERS
        </h2>
        <p className="text-xl mt-1">
          Off-road Guided Dirtbike, Dune Buggy, Quad Bikes, Desert Adventure
          Tours in Dubai!
        </p>

        {/* Form */}
        <form className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 mx-5">
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="px-4 py-3 rounded-md text-black text-base bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white mb-1">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md text-black text-base bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              required
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-white mb-1">
              Phone *
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="px-4 py-3 rounded-md text-black text-base bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              required
            />
          </div>

          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="bg-[#111c3a] hover:bg-[#182957] px-4 py-3 rounded-md text-white font-semibold text-base w-full"
            >
              REQUEST CALL BACK
            </button>
          </div>
        </form>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm pt-44">
        {/* Logo */}
        <div className="flex flex-col items-star ">
          <img src="https://buggyriders.com/images/logo.svg" alt="Buggy Riders" className="w-48 mb-4" />
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold mb-3 uppercase text-gray-800">ABOUT</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="#">Who We Are</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Our Blogs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3 uppercase text-gray-800">SERVICES</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="#">Dune Buggy Tours</a>
            </li>
            <li>
              <a href="#">Quad Bike Tours</a>
            </li>
            <li>
              <a href="#">Desert Safari</a>
            </li>
          </ul>
        </div>

        {/* Social */}
<div>
  <h3 className="font-bold mb-3 uppercase text-gray-800">FOLLOW US ON</h3>
  <div className="flex space-x-3">
    {/* Facebook */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-[#3b5998] text-white 
                 hover:bg-white hover:text-[#3b5998] 
                 border-2 border-transparent hover:border-[#3b5998] 
                 transition"
    >
      <i className="fab fa-facebook-f text-lg"></i>
    </a>

    {/* Twitter */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-[#1da1f2] text-white 
                 hover:bg-white hover:text-[#1da1f2] 
                 border-2 border-transparent hover:border-[#1da1f2] 
                 transition"
    >
      <i className="fab fa-twitter text-lg"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-[#0077b5] text-white 
                 hover:bg-white hover:text-[#0077b5] 
                 border-2 border-transparent hover:border-[#0077b5] 
                 transition"
    >
      <i className="fab fa-linkedin-in text-lg"></i>
    </a>

    {/* Instagram */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-[#e1306c] text-white 
                 hover:bg-white hover:text-[#e1306c] 
                 border-2 border-transparent hover:border-[#e1306c] 
                 transition"
    >
      <i className="fab fa-instagram text-lg"></i>
    </a>

    {/* Pinterest */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-[#bd081c] text-white 
                 hover:bg-white hover:text-[#bd081c] 
                 border-2 border-transparent hover:border-[#bd081c] 
                 transition"
    >
      <i className="fab fa-pinterest-p text-lg"></i>
    </a>
  </div>
</div>


      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-xs flex justify-between items-center px-6 py-3">
        <p>© Copyright 2025.</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}