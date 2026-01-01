import React from 'react';

const About = React.memo(() => {
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
    { value: '2+', label: 'YEARS EXPERIENCE' },
    { value: '2+', label: 'PROJECTS COMPLETED' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  // Glassmorphism Navbar-style background
  const getNavbarGlassBg = () => {
    return 'bg-[#1E293B]/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl';
  };

  return (
    <div className={`flex flex-col items-center justify-center mx-4 mt-24 sm:mt-28 mb-20 sm:mb-24 md:mx-8 lg:mx-32 xl:mx-44 p-6 sm:p-8 md:p-12 ${getNavbarGlassBg()} hover:border-white/20 transition-colors duration-300`} id="about">

      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#10B981] mx-auto rounded-full"></div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
       
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-2xl blur-xl opacity-30"></div>
            <img
              src="https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4"
              alt="Eshan Hasitha"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
              className="relative rounded-2xl w-64 sm:w-72 md:w-80 lg:max-w-sm shadow-2xl border-2 border-[#3B82F6]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 flex-1">
         
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1F5F9]">
              Hello! I'm Eshan Hasitha
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed">
              I am an undergraduate student at <span className="text-[#3B82F6] font-semibold">Sabaragamuwa University of Sri Lanka</span>, 
              pursuing a BSc (Hons) in Information Systems. I'm passionate about creating innovative web solutions 
              and constantly expanding my technical expertise.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] leading-relaxed">
              My journey in software development is driven by curiosity and a commitment to excellence. 
              I believe in writing clean, efficient code and building user-centric applications that make a difference.
            </p>
          </div>

          
          <div className="mt-4 sm:mt-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F1F5F9] mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-[#3B82F6] to-[#10B981] rounded-full"></span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        loading="lazy"
                        decoding="async"
                        width="32"
                        height="32"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-sm sm:text-base text-[#F1F5F9] font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm sm:text-base text-[#3B82F6] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#334155]/40 backdrop-blur-sm rounded-full h-2 overflow-hidden border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full transition-all duration-700 ease-out"
                      style={{ 
                        width: `${skill.level}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-[#475569]/30">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center p-4 sm:p-5 md:p-6 bg-[#334155]/60 rounded-xl border border-white/10 hover:border-white/20 hover:bg-[#475569]/40 transition-colors duration-300">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent mb-2">
              {achievement.value}
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm lg:text-base font-medium tracking-wider uppercase">
              {achievement.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default About;