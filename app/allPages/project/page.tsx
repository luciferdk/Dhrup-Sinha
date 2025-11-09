"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../../component/ui/card";
import { Badge } from "../../../component/ui/badge";

const projects = [
  {
    name: "Connect",
    url: "https://connect.x-dev.site",
    logoUrl: "https://connect.x-dev.site/favicon.ico",
  },
  {
    name: "UNDER DEVELOPMENT",
    url: "https://thumbs.dreamstime.com/b/website-under-construction-sign-white-background-d-mesh-vector-illustration-49640768.jpg?w=768",
    logoUrl: "https://img.icons8.com/?size=48&id=88204&format=png",
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-[#edeef1] p-4 sm:p-6 lg:p-10 flex flex-col items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 relative z-10">
        <div className="inline-block mb-4">
          <div className="h-1 w-16 sm:w-20 bg-[#6A5ACD] rounded-full mx-auto mb-4"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#6A5ACD] mb-3 sm:mb-4">
          Projects
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl px-4">
          Deployed websites and applications
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto w-full relative z-10 px-2 sm:px-0">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              console.log("Clicking:", project.url);
              window.open(project.url, "_blank", "noopener,noreferrer");
            }}
            className="cursor-pointer"
          >
            <Card className="bg-white border-2 border-gray-200 flex flex-col items-center p-4 sm:p-6 lg:p-8 shadow-lg rounded-2xl hover:scale-105 hover:border-[#6A5ACD] hover:shadow-xl hover:shadow-[#6A5ACD]/20 transition-all duration-300 ease-in-out group h-full">
              <CardContent className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 p-0 w-full">
                {/* Logo Container */}
                <div className="transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3 bg-[#edeef1] p-3 sm:p-4 rounded-xl">
                  <Image
                    src={project.logoUrl}
                    alt={`${project.name} logo`}
                    height={48}
                    width={48}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                
                {/* Project Name Badge */}
                <Badge className="text-xs sm:text-sm lg:text-base font-semibold px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 bg-[#6A5ACD] text-white hover:bg-[#5a4abd] rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  {project.name}
                </Badge>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Element */}
      <div className="mt-10 sm:mt-12 lg:mt-16 flex justify-center relative z-10">
        <div className="flex gap-2">
          <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce"></div>
          <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce delay-100"></div>
          <div className="h-2 w-2 bg-[#6A5ACD] rounded-full animate-bounce delay-200"></div>
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

/*

import NavbarLayout from "@/component/navlayout/navlayout";

export default function Project() {
  return (
    <NavbarLayout>
      <div>
        
        <p>Currently i&apos;m working on project</p>
      </div>
    </NavbarLayout>
  );
}

*/
