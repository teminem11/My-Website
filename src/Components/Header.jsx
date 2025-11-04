import { useState } from "react";

export default function Header() {
  const [hovered, setHovered] = useState(null);
  const items = ["Home", "About", "Projects", "Contact"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        padding: "15px 0",
        fontSize: "18px",
        zIndex: 1000,
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            color: hovered === index ? "#999BFF" : "#EEE",
            cursor: "pointer",
            transform: hovered === index ? "scale(1.15)" : "scale(1)",
            transition: "all 0.25s ease",
            fontWeight: hovered === index ? "bold" : "normal",
            textShadow:
              hovered === index
                ? "0 0 10px rgba(153, 155, 255, 0.7)"
                : "0 0 0 transparent",
          }}
        >
          {item}
        </span>
      ))}
    </header>
  );
}
