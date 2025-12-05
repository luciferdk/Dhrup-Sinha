"use client";

import React from "react";
import { Card, CardContent } from "../../../component/ui/card";
import { Badge } from "../../../component/ui/badge";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa";
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
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-[#6A5ACD]" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    category: "Language",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-600" />,
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    category: "Database",
  },
  {
    name: "Prisma ORM",
    icon: <SiPrisma className="text-[#6A5ACD]" />,
    category: "Backend",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-400" />,
    category: "DevOps",
  },
  {
    name: "AWS EC2",
    icon: <FaAws className="text-orange-500" />,
    category: "DevOps",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub className="text-gray-800" />,
    category: "Tools",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-blue-500" />,
    category: "Language",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-orange-600" />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-blue-500" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    category: "Frontend",
  },
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-[#edeef1] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="h-1 w-20 sm:w-24 bg-[#6A5ACD] rounded-full mx-auto mb-4"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[#6A5ACD] leading-tight">
            My Expertise
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            A comprehensive collection of cutting-edge technologies and tools I
            use to craft powerful, scalable, and beautiful digital solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl hover:border-[#6A5ACD] hover:shadow-xl hover:shadow-[#6A5ACD]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 relative">
                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-center text-gray-800 group-hover:text-[#6A5ACD] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Category Badge */}
                  <Badge className="text-[9px] sm:text-[10px] md:text-xs px-2 py-0.5 sm:py-1 bg-[#6A5ACD] text-white border-0 group-hover:bg-[#5a4abd] transition-all duration-300">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {[
              { label: "Technologies", value: "17+", icon: "🚀" },
              { label: "Categories", value: "6", icon: "📦" },
              { label: "Experience", value: "Full Stack", icon: "💻" },
              { label: "Specialty", value: "Web Dev", icon: "🌐" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-center hover:border-[#6A5ACD] hover:shadow-xl hover:shadow-[#6A5ACD]/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6A5ACD] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="flex gap-2">
            <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce"></div>
            <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce delay-100"></div>
            <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}
