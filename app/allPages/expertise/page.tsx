import React from "react";
import { Card, CardContent } from "../../../component/ui/card";
import { Badge } from "../../../component/ui/badge";
import NavLayout from "../../../component/navlayout/navlayout";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-black" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS EC2", icon: <FaAws className="text-orange-500" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
];

export default function ExpertisePage() {
  return (
    <NavLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 text-white flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12 drop-shadow-lg">
          My Expertise
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-xl text-white flex flex-col items-center p-6 shadow-2xl rounded-3xl border border-gray-600 hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <CardContent className="flex flex-col items-center gap-4">
                <div className="text-6xl transition-transform duration-300 ease-in-out transform hover:rotate-12">
                  {skill.icon}
                </div>
                <Badge className="text-lg font-semibold px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-lg">
                  {skill.name}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </NavLayout>
  );
}
