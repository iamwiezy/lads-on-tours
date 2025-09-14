// src/components/TeamSection.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Kyrkhulang Mawthoh",
    role: "Guide + Driver",
    image: "/kyrkhu.jpg", // replace with real image
    description:
      "Kyrkhu started his career as a driver with over 11 years of experience before becoming a tour guide, sharing the beauty of Meghalaya with travelers worldwide. He has guided guests from countries like Australia, Italy, and the U.S., with a highlight being his time guiding the legendary musician A.R. Rahman. Passionate about adventure, he enjoys trekking, camping, and cycling in his free time.",
  },
  {
    name: "Eleazer Diengdoh",
    role: "Guide",
    image: "/eleazer.JPG", // replace with real image
    description:
      "Since 2010, Mr. Eleazer has been guiding travelers in Meghalaya, combining his hospitality training with expertise in adventure sports and safety certifications. Recognized in 2016 for promoting sustainable tourism, he also supports researchers and helps uncover new destinations. Today, he works as a trusted trip captain for multiple tour agencies, ensuring every journey is safe, responsible, and unforgettable.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600">Meet The Team</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden text-center p-6 border border-gray-200 hover:shadow-xl transition">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-green-600 font-medium mb-2">
              {member.role}
            </p>
            <p className="text-gray-500 text-sm mb-4 text-justify">
              {member.description}
            </p>
            <div className="flex justify-center gap-4 text-green-600">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
