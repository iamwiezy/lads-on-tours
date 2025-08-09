"use client";

import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-6 relative w-[340px] rounded-[24px] bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 text-white overflow-hidden">
      {/* Background Effects (optional) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <div className="text-[120px] font-black text-white/10">⋈</div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <h2 className="text-xl font-bold uppercase">Banjop Iawphniaw</h2>
        <p className="text-sm text-gray-300">Founder</p>

        {/* Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mt-4">
          <Image
            src="/profilepic.jpg" // replace with actual image path
            alt="Javi A. Torres"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Footer Info */}
        <div className="w-full mt-6 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            {/* <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/profile.png" // again, use actual image
                alt="@javicodes"
                width={40}
                height={40}
                className="object-cover"
              />
            </div> */}
            <div className="text-left">
              <p className="text-sm font-medium text-white">@banjop</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/banjop_iawphniaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-green-600 hover:bg-green-700 transition text-sm px-4 py-2 rounded-xl font-medium text-white">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
