"use client";

import { Users, Target, Award, Heart } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const About = () => {
  const { currentTheme } = useTheme();

  const stats = [
    { label: "Happy Customers", value: "10,000+", icon: Users },
    { label: "Products Sold", value: "50,000+", icon: Target },
    { label: "Awards Won", value: "25+", icon: Award },
    { label: "Years of Service", value: "5+", icon: Heart },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Passionate about creating amazing shopping experiences.",
    },
    {
      name: "Mike Chen",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "Tech enthusiast building the future of e-commerce.",
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Creating beautiful and intuitive user experiences.",
    },
  ];

  if (currentTheme === "theme1") {
    return (
      <div className="bg-white text-gray-800 min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            We're passionate about bringing you the best products from around the world. Our mission is to make online
            shopping simple, enjoyable, and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <stat.icon className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm mt-1 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentTheme === "theme2") {
    return (
      <div className="bg-gray-900 text-white min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300">
            We're passionate about bringing you the best products from around the world. Our mission is to make online
            shopping simple, enjoyable, and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <stat.icon className="w-10 h-10 text-yellow-400" />
              <div>
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
              <p className="text-sm mt-1 text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (currentTheme === "theme3") {
    return (
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen px-4 py-12 text-center">
        <h1 className="text-5xl font-pacifico text-purple-600 mb-4">Welcome to Our Story</h1>
        <p className="text-lg text-purple-800 max-w-2xl mx-auto mb-12">
          Making e-commerce fun, easy, and delightful! 💖 We curate unique products for curious minds.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-4 w-40 hover:scale-105 transition transform duration-300"
            >
              <stat.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-pacifico text-indigo-600 mb-8">Our Awesome Team 🌟</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold text-purple-700">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="text-center py-20">
      <p className="text-xl text-gray-500">No valid theme selected.</p>
    </div>
  );
};

export default About;
