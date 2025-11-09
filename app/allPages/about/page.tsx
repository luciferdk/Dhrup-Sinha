"use client"

import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className="bg-[#edeef1] min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image section */}
            <div className="lg:w-2/5 flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="relative">
                <Image
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
                  src="/downloadeblfile/dhrupsi.jpeg"
                  width={384}
                  height={384}
                  alt="Picture of Dhrup Sinha"
                  priority
                />
              </div>
            </div>

            {/* Content section */}
            <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 border-b-4 border-red-500 inline-block pb-2">
                  About Me
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Hi, I&apos;m <span className="font-bold text-gray-900">Dhrup Sinha</span>, 
                  a software developer and Full Stack and DevOps Developer Enthusiast. 
                  With a strong foundation in development and hands-on experience through 
                  impactful projects, I&apos;m eager to bring my skills to challenging 
                  roles in the tech industry.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  I&apos;m always open to learning new technologies and adapting to 
                  emerging trends, ensuring I stay at the forefront of innovation. 
                  Ready to take the next step in my professional journey, I&apos;m 
                  excited to contribute to dynamic teams and make a meaningful impact.
                </p>

                <p className="text-base sm:text-lg text-gray-600 italic">
                  Feel free to explore the Projects and Experience sections to know more about my work!
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Let&apos;s Connect
                </h2>
                <div className="flex flex-wrap gap-4">
                  {/* GitHub Button */}
                  <a
                    href="https://github.com/luciferdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white hover:bg-gray-900 border-2 border-gray-900 px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-6 h-6 group-hover:text-white transition-colors" />
                    <span className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://linkedin.com/in/dhrup-kumar-sinha-69a219310"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-6 h-6 text-white" />
                    <span className="font-semibold text-white">
                      LinkedIn
                    </span>
                  </a>

                  {/* X (Twitter) Button */}
                  <a
                    href="https://x.com/Dksinha467530"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-black hover:bg-gray-800 border-2 border-black hover:border-gray-800 px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl"
                    aria-label="X (Twitter) Profile"
                  >
                    <FaXTwitter className="w-6 h-6 text-white" />
                    <span className="font-semibold text-white">
                      Twitter
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
