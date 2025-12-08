import React from "react";
import TitleHeader from "../components/TitleHeader";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="relative overflow-hidden section-padding">
      <div className="aboutme-layout gap-x-20">
        <header className="flex flex-col justify-center md:w-[45%] lg:w-1/2 md:px-20 px-5 w-full">
          <div className="flex flex-col">
            <h2 className="text-white font-semibold text-5xl md:text-6xl lg:text-6xl leading-tight mb-10">
              About Me
            </h2>

            <p className="text-white-50 text-xl leading-relaxed text-left mb-4">
              Hey there! I'm Jense Cool, a software developer who enjoys
              building digital things. I'm currently studying Applied Computer
              Science and really looking forward to finishing my degree.
            </p>
            <p className="text-white-50 text-xl leading-relaxed text-left mb-4">
              I like working with different languages and tools like JavaScript,
              Java and C#. I enjoy using modern frameworks like React and
              Next.js, and I'm also comfortable with backend development and
              databases. That variety keeps it fun and helps me adapt to all
              kinds of challenges.
            </p>
            <p className="text-white-50 text-xl leading-relaxed text-left mb-4">
              Outside of coding, I recharge by being active. I love sports,
              nature, Scouting, playing guitar, cooking, spending time with
              friends and exploring new cultures. These moments give me energy,
              boost my creativity and remind me that rest and hanging out with
              others are just as important as work.
            </p>
            <p className="text-white-50 text-xl leading-relaxed text-left">
              I'm always open to new challenges where I can apply what I know,
              and I'm curious and eager to learn new things. Got an idea or a
              project you want to build? Feel free to reach out. I'd love to
              hear what you're working on and maybe build something cool
              together.
            </p>
          </div>
        </header>

        <figure className="hidden md:flex md:w-[55%] lg:w-1/3 justify-center items-center">
          <div className="w-full h-full flex justify-center items-center p-4">
            <img
              src="/images/jense.jpg"
              alt="Jense Cool Profile Photo"
              className="rounded-xl object-cover w-full h-auto max-h-[70vh] shadow-lg"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default AboutMeSection;
