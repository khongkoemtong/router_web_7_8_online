import React from 'react'

function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Build modern and responsive websites using latest technologies.",
      icon: "🌐",
    },
    {
      title: "Mobile App",
      description: "Create Android & iOS apps with smooth performance.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Design beautiful and user-friendly interfaces.",
      icon: "🎨",
    },
    {
      title: "Cyber Security",
      description: "Protect systems and data from cyber threats.",
      icon: "🔐",
    },
  ];
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="text-gray-500 mt-2">
            We provide high quality services for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h2>
              <p className="text-gray-500 mt-2">
                {service.description}
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Service
