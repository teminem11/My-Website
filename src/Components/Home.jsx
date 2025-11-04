import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "/src/assets/portrait1.png"; // твое фото

    const SYMBOLS =
      "アァカサタナハマヤャラワガザダバパABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

    img.onload = () => {
      const w = 200;
      const h = (img.height / img.width) * w;
      canvas.width = w * 4;
      canvas.height = h * 4;

      const off = document.createElement("canvas");
      const offCtx = off.getContext("2d");
      off.width = w;
      off.height = h;
      offCtx.drawImage(img, 0, 0, w, h);
      const imgData = offCtx.getImageData(0, 0, w, h).data;

      const columns = w;
      const drops = Array(columns).fill(0);

      let reveal = 0; // степень "проявления" портрета

      const draw = () => {
        ctx.fillStyle = "rgba(0,0,0,0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "14px monospace";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(153,155,255,0.6)";
        ctx.shadowBlur = 10;

        for (let i = 0; i < columns; i++) {
          const x = i * 4;
          const y = drops[i] * 14;
          const char = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

          const px = Math.floor((y / canvas.height) * h);
          const py = Math.floor((x / canvas.width) * w);
          const idx = (px * w + py) * 4;
          const brightness =
            (imgData[idx] + imgData[idx + 1] + imgData[idx + 2]) / 3;

          // степень проявления лица
          const visibility = Math.max(0, (brightness / 255) * reveal - 0.4);

          // яркие пиксели загораются быстрее
          const alpha = Math.pow(visibility, 2.5);

          ctx.fillStyle = `rgba(153,155,255,${alpha})`;
          ctx.fillText(char, x, y);

          // падение
          if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
          else drops[i]++;
        }

        // постепенно увеличиваем reveal (0 → 1)
        if (reveal < 1) reveal += 0.004;

        requestAnimationFrame(draw);
      };
      draw();
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(at 30% 40%, #0c0c1d, transparent 60%), radial-gradient(at 70% 70%, #1a1a40, transparent 70%), linear-gradient(135deg, #050510, #181826)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "500px",
          height: "500px",
          filter: "drop-shadow(0 0 30px rgba(153,155,255,0.5))",
        }}
      />
    </section>
  );
}
