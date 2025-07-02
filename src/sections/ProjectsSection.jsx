import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../constants"; // Zorg dat projectData geëxporteerd wordt in constants/index.js
import ImageModal from "../components/ImageModal"; // Zorg dat dit pad klopt
import GlowCard from "../components/GlowCard"; // Importeer de GlowCard component

const ProjectsSection = () => {
  // State voor de afbeeldingsmodaal (lightbox)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  // Functies voor de afbeeldingscarrousel
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projectData.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectData.images.length) % projectData.images.length
    );
  };

  // Functies voor de modaal (lightbox)
  const openModal = (src) => {
    setModalImageSrc(src);
  };

  const closeModal = () => {
    setModalImageSrc(null);
  };

  return (
    <section
      id="projects"
      className="section-padding flex flex-col items-center justify-center"
    >
      <h2 className="text-white font-semibold text-5xl md:text-6xl lg:text-6xl leading-tight mb-10 text-center">
        My Projects
      </h2>

      {/* Hoofdcontainer voor de projectkaart, nu breder en met flexbox voor inhoud op desktop */}
      <GlowCard className="max-w-full xl:max-w-[90vw] w-full card-border pt-8 px-8 pb-14 rounded-xl relative z-10 mt-16 mb-40">
        {/* Project Titel */}
        <h3 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          {projectData.title}
        </h3>
        {/* Korte Beschrijving */}
        <p className="text-white-50 text-lg leading-relaxed mb-6">
          {projectData.shortDescription}
        </p>
        {/* Nieuwe flex container voor de longDescription en foto's */}
        {/* Flex-col op mobiel, flex-row op desktop */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {/* LEFT: Volledige uitleg (longDescription) */}
          {/* Op mobiel neemt het de volledige breedte, op desktop de helft */}
          <div className="w-full md:w-1/2">
            {/* Scrollfunctie (max-h en overflow) verwijderd - tekst zal volledig uitklappen */}
            <div className="text-white-50 text-base leading-relaxed pr-4">
              {projectData.longDescription.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: Fotocarrousel (groter) */}
          {/* Op mobiel neemt het de volledige breedte, op desktop de helft */}
          {/* Alleen tonen als er afbeeldingen zijn */}
          {projectData.images.length > 0 && (
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px] bg-black-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={projectData.images[currentImageIndex]}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg cursor-pointer"
                  onClick={() =>
                    openModal(projectData.images[currentImageIndex])
                  }
                />
                {projectData.images.length > 1 && (
                  <>
                    {/* Vorige knop */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 bg-black-200 p-3 rounded-full text-white text-lg z-20 hover:bg-black-50 transition-colors"
                    >
                      &#8249;
                    </button>
                    {/* Volgende knop */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 bg-black-200 p-3 rounded-full text-white text-lg z-20 hover:bg-black-50 transition-colors"
                    >
                      &#8250;
                    </button>
                  </>
                )}
                {/* Paginatie bolletjes */}
                <div className="absolute bottom-4 flex gap-2">
                  {projectData.images.map((_, index) => (
                    <span
                      key={index}
                      className={`block size-2 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-500"
                      } cursor-pointer`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>{" "}
        {/* Einde van de flex container voor longDescription en foto's */}
      </GlowCard>

      {/* Modaal (lightbox) component */}
      <ImageModal
        src={modalImageSrc}
        alt="Project picture enlarged"
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
