import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
      <div className="bg-gray-200 m-2 md:m-2 h-100% ">
        <div className="  p-3 m-0 md:mx-10 flex flex-col md:flex-row md:items-center md:flex-wrap  flex-nowrap md:items-around  h-screen ">
          {/* Image section */}
          <div className="flex justify-center">
            <Image
              className=" w-70 h-70 md:w-full md:h-full object-cover "
              src="/downloadeblfile/dhrupsi.jpeg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>

          {/* About section  */}
          <div className="ml-0 md:ml-10 md:mt-0 mt-4 ">
            <div className="text-wrap  w-98 md:w-319 h-100 md:h-80">
              <h1 className=" text-2xl md:text-5xl font-bold pb-2">About Me</h1>
              <p className=" text-base md:text-2xl font-serif text-left ">
                Hi, I&apos;m Dhrup Sinha a software developer a Full Stack and
                DevOps Developer Enthusiast With a strong foundation in
                development and hands-on experience through impactful projects,
                I&apos;m eager to bring my skills to challenging roles in the
                tech industry. I&apos;m always open to learning new technologies
                and adapting to emerging trends, ensuring I stay at the
                forefront of innovation. Ready to take the next step in my
                professional journey, I&apos;m excited to contribute to dynamic
                teams and make a meaningful impact. Feel free to explore the
                Projects and Experience sections to know more about my work!
              </p>
            </div>

            {/* Contact */}
            <div className="text-wrap  ">
              <h1 className="text-center font-bold">Follow Me</h1>
              <div className=" mt-4  mb-2 flex flex-wrap justify-center gap-6">
                {/* GitHub Button */}
                <a
                  href="https://github.com/luciferdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-700 border-2  border-red-500 p-3 rounded-lg flex items-center justify-center"
                >
                  <FaGithub className="w-6 h-6" />
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://linkedin.com/in/dhrup-kumar-sinha-69a219310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-700 bg-blue-400 border-2 border-red-500 p-3 rounded-lg flex items-center justify-center"
                >
                  <FaLinkedin className="w-6 h-6 text-white" />
                </a>

                {/* X (Twitter) Button */}
                <a
                  href="https://x.com/Dksinha467530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-gray-700 bg-black border-2 border-red-500 p-3 rounded-lg flex items-center justify-center"
                >
                  <FaXTwitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
