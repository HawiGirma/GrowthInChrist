function Contact() {
  return (
    <section id="contact" className="w-full py-32">
      {/* Dark header with solar panel background */}

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase mb-2">Contact Us</h2>
      </div>

      {/* Light green content area */}
      <div className="bg-[#f0f5f1] font-sora py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              We’d love to hear from you—whether you have a question, prayer
              request, or want to grow together in Christ, feel free to reach
              out
            </p>

            {/* Phone */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2c5c4c] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">+251-914-411-415</span>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2c5c4c] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 9c-4.418 0-8-4.03-8-8 0-3.313 3.582-6 8-6s8 2.687 8 6c0 3.97-3.582 8-8 8z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                Addis Ababa, Ethiopia
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2c5c4c] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                bsobboloota@gmail.com
              </span>
            </div>

            {/* Telegram */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#2c5c4c] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.998 15.265l-.44 4.143c.63 0 .902-.27 1.237-.593l2.965-2.821 6.144 4.483c1.13.624 1.938.295 2.246-.958L23.98 3.708c.39-1.652-.602-2.29-1.703-1.89L1.643 9.502C.033 10.149.045 11.023 1.402 11.424l5.78 1.802L19.375 6.36c.65-.401 1.24-.18.755.221L9.998 15.265z" />
                </svg>
              </div>
              <a href="" className="text-lg font-semibold">
                @bsobboloota
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form>
              {/* Name field */}
              <div className="mb-4">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Phone field */}
              <div className="mb-4">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="mb-4">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>

              {/* Subject field */}
              {/* <div className="mb-4">
                <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div> */}

              {/* Message field */}
              <div className="mb-6">
                <div className="flex items-start border border-gray-300 rounded px-3 py-2">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <textarea
                    placeholder="How can we help you? Feel free to get in touch"
                    className="w-full outline-none text-gray-700 min-h-[100px]"
                  ></textarea>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#2c5c4c] hover:bg-[#234a3d] text-white font-medium py-2 px-8 rounded-full transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
