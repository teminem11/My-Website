export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh", // занимает всю высоту экрана
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          color: "#e2e8f0",
          marginBottom: "30px",
          textShadow: "0 0 20px rgba(153,155,255,0.4)", // лёгкое свечение
        }}
      >
        About me
      </h2>
      <p
        style={{
          maxWidth: "700px",
          color: "#aab4c0",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </section>
  );
}
