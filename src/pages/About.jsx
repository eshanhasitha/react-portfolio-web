import React from 'react';

const About = () => {
  const skills = [
    {name: 'git', icon: 'https://skillicons.dev/icons?i=git', level: 70},
    {name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github', level: 70},
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html', level: 90 },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css', level: 85 },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', level: 60 },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts', level: 55 },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react', level: 60 },
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', level: 60 },
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', level: 75 },
    { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', level: 70 },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java', level: 70 },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python', level: 65 },
  ];

  const achievements = [
    { value: '1+', label: 'YEARS EXPERIENCE' },
    { value: '1+', label: 'PROJECTS COMPLETED' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  return (
    <div className="absolute flex flex-col items-center justify-center mx-4 my-25 md:mx-16 lg:mx-32 xl:mx-44 p-8 md:p-12 bg-[#1E293B] rounded-2xl shadow-2xl border border-[#475569]/30" id="about">

 
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full"></div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
       
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-2xl blur-xl opacity-30"></div>
            <img
              src="https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4"
              alt="Eshan Hasitha"
              className="relative rounded-2xl w-full max-w-xs lg:max-w-sm shadow-2xl border-2 border-[#3B82F6]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-1">
         
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F1F5F9]">
              Hello! I'm Eshan Hasitha
            </h2>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I am an undergraduate student at <span className="text-[#3B82F6] font-semibold">Sabaragamuwa University of Sri Lanka</span>, 
              pursuing a BSc (Hons) in Information Systems. I'm passionate about creating innovative web solutions 
              and constantly expanding my technical expertise.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              My journey in software development is driven by curiosity and a commitment to excellence. 
              I believe in writing clean, efficient code and building user-centric applications that make a difference.
            </p>
          </div>

          
          <div className="mt-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-[#3B82F6] to-[#10B981] rounded-full"></span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                      <span className="text-[#F1F5F9] font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-[#3B82F6] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#334155] rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#475569]/30">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center p-6 bg-[#334155] rounded-xl hover:bg-[#475569]/50 transition-all duration-300 hover:scale-105">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent mb-2">
              {achievement.value}
            </h2>
            <p className="text-[#94A3B8] text-sm lg:text-base font-medium tracking-wider uppercase">
              {achievement.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;