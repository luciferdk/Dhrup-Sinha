"use client";

import React from "react";
import Image from 'next/image';
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
    <div className="min-h-screen bg-[#0f0f10] p-10 text-white flex flex-col items-center relative">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.3),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.3),_transparent_70%)]"></div>

      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-4 drop-shadow-lg">
        Projects
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        Deployed websites and applications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              console.log("Clicking:", project.url);
              window.open(project.url, "_blank", "noopener,noreferrer");
            }}
            className="cursor-pointer"
          >
            <Card className="bg-white/10 backdrop-blur-xl text-white flex flex-col items-center p-6 shadow-2xl rounded-3xl border border-gray-600 hover:scale-105 hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] transition-all duration-300 ease-in-out group">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src={project.logoUrl}
                    alt={`${project.name} logo`}
                    height={48}
                    width={48}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <Badge className="text-lg font-semibold px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-lg">
                  {project.name}
                </Badge>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
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
