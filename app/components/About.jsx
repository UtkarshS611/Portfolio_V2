import React from "react";

export function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="text-[1.1rem] opacity-50">
              Hello! My name is Utkarsh Singh and I enjoy creating things that
              live on the internet. My interest in web development started back
              in mid 2023 when I decided to try editing awesome animated
              websites — turns out learning about web taught me a lot more than
              just HTML & CSS!
            </p>
            <p className="text-[1.1rem] opacity-50">
              Fast-forward to today, my main focus these days is building
              accessible, inclusive products and digital experiences for a variety of domains.
            </p>
          </div>

          <div className="rounded-lg relative group">
            <div className="h-full group-hover:right-[-5%] group-hover:top-[6%] transition-all duration-200 w-full border-2 dark:border-blue-600/60 border-[#00bfb3] absolute top-[5%] right-[-4%] z-[-1]"/>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
