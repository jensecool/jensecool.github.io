import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "../constants";
import ImageModal from "../components/ImageModal";

const ProjectsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageSrc, setModalImageSrc] = useState(null);

  const toggleOpen = () => setIsOpen(!isOpen);

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
      <h2 className="text-white font-semibold text-5xl md:text-6xl lg:text-6xl leading-tight mb-16 text-center">
        My Projects
      </h2>

      <div className="max-w-4xl w-full card-border pt-8 px-8 pb-14 rounded-xl relative z-10 mt-16 mb-10">
        <h3 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          {projectData.title}
        </h3>
        <p className="text-white-50 text-lg leading-relaxed mb-6">
          {projectData.shortDescription}
        </p>
        <button
          onClick={toggleOpen}
          className={`
          absolute bottom-4 left-1/2 -translate-x-1/2 z-20 
            text-white-50 text-4xl 
            transition-colors duration-300 transform 
            ${isOpen ? "rotate-180" : ""} 
            hover:text-[#D9ECFF] hover:scale-110 
            `}
          aria-label={isOpen ? "Hide project details" : "View project details"}
        >
          &#x2193;
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-8 overflow-hidden"
            >
              <div className="max-h-96 overflow-y-auto text-white-50 text-base leading-relaxed pr-4 custom-scrollbar">
                {projectData.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {projectData.images.length > 0 && (
                <div className="mt-8 mb-10 relative w-full h-80 bg-black-100 rounded-lg flex items-center justify-center overflow-hidden">
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
                      <button
                        onClick={prevImage}
                        className="absolute left-4 bg-black-200 p-3 rounded-full text-white text-lg z-20 hover:bg-black-50 transition-colors"
                      >
                        &#8249;
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 bg-black-200 p-3 rounded-full text-white text-lg z-20 hover:bg-black-50 transition-colors"
                      >
                        &#8250;
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-4 flex gap-2">
                    {projectData.images.map((_, index) => (
                      <span
                        key={index}
                        className={`block size-2 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-gray-500"
                        } cursor-pointer`}
                        onClick={() => setCurrentImageIndex(index)}
                      ></span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ImageModal
        src={modalImageSrc}
        alt="Project picture enlarged"
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectsSection;
