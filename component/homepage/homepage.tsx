import Image from "next/image";

export default function HomePages() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-between p-6">
      {/* Left Section (Text) */}
      <div className="md:w-1/2 text-center md:text-left md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold pb-4">
          Hi, I'm Dhrup Sinha
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          A Full Stack and DevOps Developer
        </p>
        {/* Download Button */}
        <div className="mt-6 border-2 p-4 hover:bg-blue-500 rounded-xl shadow-xl md:w-1/2">
          <a
            className="flex justify-center md:justify-start items-center text-lg md:text-xl"
            href="downloadeblfile/DHRUP_KUMAR_SINHA.pdf"
            download="DHRUP_KUMAR_SINHA.pdf"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2"
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

      {/* Right Section (Image) */}
      <div className="mt-3 md:w-1/2 h-full flex justify-center items-center">
        <Image
          src="/downloadeblfile/altumcode-oZ61KFUQsus-unsplash.jpg"
          width={800}
          height={800}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
