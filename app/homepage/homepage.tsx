"use client";
import Image from "next/image";

export default function HomePages() {
  return (
    <div className="min-h-screen bg-[#edeef1] flex flex-col md:flex-row md:items-center md:justify-between p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left p-4 sm:p-6 lg:p-10 z-10 order-last md:order-first">
        <div className="mb-6 inline-block">
          <div className="h-1 w-16 sm:w-20 bg-[#6A5ACD] rounded-full"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold pb-4 sm:pb-6 text-[#6A5ACD] leading-tight">
          Hi, I&apos;m Dhrup Sinha
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 pb-6 sm:pb-8 font-medium">
          A Full Stack and DevOps Developer
        </p>

        {/* Download Button */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/downloadeblfile/DHRUP_KUMAR_SINHA.pdf"
            download="DHRUP_KUMAR_SINHA.pdf"
            className="flex items-center gap-3 bg-[#6A5ACD] hover:bg-[#5a4abd] text-white transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#6A5ACD]/30 hover:scale-105 transform"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center order-first md:order-last p-4 sm:p-6 lg:p-10 z-10">
        <div className="relative group">
          {/* Decorative border */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#6A5ACD] to-[#8A7AED] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>

          {/* Image container */}
          <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white group-hover:scale-105 transform">
            <Image
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-xl"
              src="/downloadeblfile/dk.jpeg"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
