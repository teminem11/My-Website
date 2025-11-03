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
      }}
    >
      {items.map((item, index) => (
        <span
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          style={{
            color: hovered === index ? "white" : "white", // меняем цвет при наведении
            cursor: "pointer",
            transform: hovered === index ? "scale(1.2)" : "scale(1)", // увеличиваем
            transition: "all 0.2s ease", // плавная анимация
            fontWeight: hovered === index ? "bold" : "normal",
          }}
        >
          {item}
        </span>
      ))}
    </header>
  );
}
