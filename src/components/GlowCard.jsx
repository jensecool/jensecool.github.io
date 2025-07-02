// src/components/GlowCard.jsx (Aangepast)
import { useRef } from "react";

const GlowCard = ({ children, className }) => {
  // className toegevoegd om makkelijker te stylen
  const cardRef = useRef(null); // useRef voor deze specifieke kaart

  // Wanneer de muis over de kaart beweegt, roteer het glow-effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Haal de muispositie op relatief aan de kaart
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Bereken de hoek vanaf het midden van de kaart naar de muis
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // Pas de hoek aan zodat deze tussen 0 en 360 ligt
    angle = (angle + 360) % 360;

    // Stel de hoek in als een CSS-variabele
    card.style.setProperty("--start", angle + 60);
  };

  // We zullen een 'card' klasse toevoegen aan de children via className.
  // De 'glow' div blijft hier, maar de children worden direct gerenderd.
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      // De 'card' klasse en 'glow' div zijn essentieel voor het glow-effect uit index.css
      className={`card ${className || ""}`} // Voeg hier de basis 'card' klasse toe
    >
      <div className="glow"></div>
      {children} {/* Render de inhoud van de projectkaart hier */}
    </div>
  );
};

export default GlowCard;
