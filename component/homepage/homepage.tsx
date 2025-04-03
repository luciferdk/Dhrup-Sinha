import Image from "next/image";

export default function HomePages() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-teal-700 to-green-600 flex flex-col md:flex-row md:items-center md:justify-between p-6 text-white">
      {/* Image Section */}
      <div className="bg-teal-800 w-full md:w-1/2 md:h-full flex justify-center items-center order-first md:order-last p-6 rounded-lg shadow-lg">
        <Image
          className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-2xl shadow-xl"
          src="/downloadeblfile/dk.jpeg"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
          Hi, I&apos;m Dhrup Sinha
        </h1>
        <p className="text-lg md:text-xl text-gray-300 pb-6">
          A Full Stack and DevOps Developer
        </p>

        {/* Download Button */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/downloadeblfile/DHRUP_KUMAR_SINHA.pdf"
            download="DHRUP_KUMAR_SINHA.pdf"
            className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
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
    </div>
  );
}
