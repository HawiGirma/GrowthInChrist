import image from "../assets/image-3.jpg";

const Service = () => {
  return (
    <div id="service" className="bg-[#C4DAD2] px-4 py-32 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Service Card */}
          <div className="lg:col-span-5 bg-[#1a2e35] text-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold font-sora mb-3">
              Church Ministries
            </h2>
            <p className="text-gray-300 font-sora mb-6">
              We are devoted to serving the Body of Christ through spirit-led
              worship, prayer, discipleship, and community outreach.
            </p>
            <button className="bg-[#16423C] hover:bg-[#6A9C89] text-white font-sora font-medium py-2 px-6 rounded-full transition-colors">
              Join Us
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Worship Service Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c1.657 0 3 1.343 3 3v4h3l-4 4-4-4h3v-4a1 1 0 00-1-1H8V8h4z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-sora">Worship</h3>
              </div>
              <p className="text-gray-600 font-sora text-sm">
                Join us for heartfelt worship services that draw us closer to
                God through praise, prayer, and the Word.
              </p>
            </div>

            {/* Bible Study Card */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20h9"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20H3V4h6m6 0h6v16h-6"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-sora">Bible Study</h3>
              </div>
              <p className="text-gray-600 font-sora text-sm">
                Grow in the knowledge of God’s Word through regular study groups
                and discipleship sessions.
              </p>
            </div>

            {/* Community Outreach Card */}
            <div className="bg-white p-6 rounded-xl font-sora shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold font-sora">Outreach</h3>
              </div>
              <p className="text-gray-600 font-sora text-sm">
                We extend love and support to those in need through missions,
                charitable acts, and community service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-4 my-16 gap-6 mt-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">Sunday Service</h3>
          <p className="text-gray-500 text-sm">8:00 AM – 12:00 PM</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">Worship</h3>
          <p className="text-gray-500 text-sm">Wednesday, 6:30 PM</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">Youth Ministry</h3>
          <p className="text-gray-500 text-sm">Saturday, 2:00 PM - 5:00 PM</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900">Prayer Morning</h3>
          <p className="text-gray-500 text-sm">Always, 5:30 AM</p>
        </div>
      </div>
      {/* Image + Info Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Church gathering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-sora font-bold mb-4">
              Experience God's Presence With Us
            </h2>
            <p className="text-gray-700 font-sora mb-6">
              Whether you're seeking spiritual growth, healing, or community,
              our church is here for you. Come as you are and encounter the love
              of Jesus Christ through vibrant fellowship, teaching, and worship.
            </p>
            <button className="bg-[#16423C] hover:bg-[#6A9C89] text-white font-sora font-medium py-2 px-6 rounded-full transition-colors">
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
