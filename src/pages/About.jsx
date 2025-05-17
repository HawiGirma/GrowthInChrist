function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h3 className="text-green-900 font-medium mb-3">Our Beginning</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            A Vision to Build a Christ-Centered Community
          </h2>

          <p className="text-gray-600 mb-8">
            Our church began with a small group of believers gathering in homes,
            united by a shared desire to grow spiritually and serve their
            community. What started as a humble prayer meeting has now become a
            thriving church family. With God’s guidance and the dedication of
            passionate leaders, we’ve seen lives transformed through worship,
            discipleship, and outreach.
          </p>
        </div>

        {/* Stats for desktop - will be hidden on mobile */}
        <div className=" lg:grid grid-cols-4 my-16 gap-6 mt-12 md:grid-cols-2 sm:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">6</h3>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">20+</h3>
            <p className="text-gray-500 text-sm">Bible Topics</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">400+</h3>
            <p className="text-gray-500 text-sm">Members</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-gray-900">10+</h3>
            <p className="text-gray-500 text-sm">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
