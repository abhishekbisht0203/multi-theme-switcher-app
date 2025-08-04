"use client"

import { Users, Target, Award, Heart } from "lucide-react"

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Products Sold", value: "50,000+", icon: Target },
    { label: "Awards Won", value: "25+", icon: Award },
    { label: "Years of Service", value: "5+", icon: Heart },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate about creating amazing shopping experiences.",
    },
    {
      name: "Mike Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Tech enthusiast building the future of e-commerce.",
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creating beautiful and intuitive user experiences.",
    },
  ]

  return (
    <>
      {/* Theme 1: Minimalist About */}
      <div className="theme1:block theme2:hidden theme3:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing you the best products from around the world. Our mission is to make online
              shopping simple, enjoyable, and trustworthy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To revolutionize the online shopping experience by providing high-quality products, exceptional customer
                service, and innovative technology that makes shopping a joy, not a chore.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The amazing people behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme 2: Professional Dark About */}
      <div className="theme1:hidden theme2:block theme3:hidden bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 serif">Our Legacy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built on excellence, driven by innovation. We've been setting the standard for premium e-commerce
              experiences since day one.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6 serif">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the world's most trusted premium marketplace, where quality meets innovation and every
                customer experience exceeds expectations through cutting-edge technology and unparalleled service.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 serif">Leadership Team</h2>
            <p className="text-lg text-gray-400">The visionaries driving our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-amber-400"
                />
                <h3 className="text-xl font-bold text-white mb-1 serif">{member.name}</h3>
                <p className="text-amber-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme 3: Playful About */}
      <div className="theme1:hidden theme2:hidden theme3:block bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Our Fun Story! 🎉
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're all about making shopping super fun and exciting! Join our colorful journey of bringing joy to every
              purchase! ✨
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:scale-105 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-4 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-1"
                  style={{ fontFamily: "Pacifico, cursive" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 mb-16 border-2 border-pink-200 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: "Pacifico, cursive" }}>
                Our Super Mission! 🚀
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To spread happiness through amazing products and create the most joyful shopping experience ever! We
                believe shopping should be fun, colorful, and full of surprises! 🌈
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Pacifico, cursive" }}>
              Our Amazing Team! 👥
            </h2>
            <p className="text-lg text-gray-600">The fantastic people making magic happen!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-6 text-center shadow-xl border-2 border-pink-200 hover:scale-105 hover:rotate-1 transition-all"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-pink-400 to-purple-500 shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1" style={{ fontFamily: "Pacifico, cursive" }}>
                  {member.name}
                </h3>
                <p className="text-purple-600 font-bold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
