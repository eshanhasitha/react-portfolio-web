import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html', level: 60 },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css', level: 55 },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', level: 30 },
    { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', level: 55 },
    { name: 'C', icon: 'https://skillicons.dev/icons?i=c', level: 50 },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java', level: 50 },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python', level: 20 },
  ];

  const achievements = [
    { value: '1+', label: 'YEARS OF EXPERIENCE' },
    { value: '0+', label: 'PROJECTS COMPLETED' },
    { value: '0+', label: 'INTERNSHIPS' },
  ];

  return (
    <div className="mx-5 my-20 md:mx-28 lg:mx-44 p-8 md:p-12 bg-[#161513] rounded-2xl relative" style={{
      boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
    }} id="about">
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 bg-white rounded-2xl -z-10 blur-xl opacity-20"></div>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
          About Me
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mt-16">
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/181459091?s=400&u=6ba444a46d0ac4751acd8c50ada2155a3fb7149d&v=4"
            alt="Eshan Hasitha"
            className="rounded-2xl w-full max-w-xs lg:max-w-sm shadow-2xl"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Description */}
          <div className="text-gray-300">
            <p className="text-lg lg:text-xl font-medium leading-relaxed">
              I am an undergraduate student at Sabaragamuwa University of Sri Lanka, currently pursuing a BSc (Hons) in Information Systems. I am passionate about technology and software development, and I aspire to become a skilled Software Engineer in the future. I'm always eager to learn new concepts, improve my coding skills, and contribute to meaningful tech projects.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white text-center mb-8">
              My Skills
            </h3>
            <div className="flex flex-col gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-6 lg:gap-12">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 flex-shrink-0"
                  />
                  <div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 mt-16 pt-12 border-t border-gray-800">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {achievement.value}
              </h2>
              <p className="text-gray-400 text-sm lg:text-base font-medium tracking-wider">
                {achievement.label}
              </p>
            </div>
            {index < achievements.length - 1 && (
              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-orange-500 to-purple-600"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default About;