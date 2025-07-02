// src/components/ImageModal.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null; // Render niets als er geen afbeelding is

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Sluit modaal bij klik buiten de afbeelding
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-80 p-4 cursor-pointer"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          src={src}
          alt={alt}
          // Voorkom dat de modaal sluit als je op de afbeelding klikt
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        {/* Sluitknop */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl md:text-4xl hover:text-gray-300 transition-colors"
        >
          &times; {/* Kruisje */}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
