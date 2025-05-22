import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const produceSpans = (text, animationClass) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      // Combineer de basis letter-styling klasse met de specifieke animatieklasse
      className={`text-rotate-span ${animationClass}`}
      style={{
        animationDelay: `${index * 0.05}s`,
        // De kleur is nu gedefinieerd in .text-rotate-item in index.css
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Jense Cool</h1>
              <h1>Student Applied</h1>
              <h1>
                <span className="text-rotate-container">
                  {/* Eerste roterende tekstregel */}
                  <span className="text-rotate-item" aria-label={words[0].text}>
                    {produceSpans(words[0].text, "animation-1")}{" "}
                    {/* Gebruik de custom animatieklasse */}
                  </span>
                  {/* Tweede roterende tekstregel - absoluut gepositioneerd over de eerste */}
                  <span className="text-rotate-item" aria-label={words[1].text}>
                    {produceSpans(words[1].text, "animation-2")}{" "}
                    {/* Gebruik de custom animatieklasse */}
                  </span>
                </span>
                <br />
              </h1>
            </div>

            <Button
              text="Learn to know me"
              className="md:w-80 md:h-60 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
