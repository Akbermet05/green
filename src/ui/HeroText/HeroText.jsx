import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <h1 style={{ fontSize: "50px", color: "#333" }}>
      <Typewriter
        words={["Let’s Make a Better Planet "]}
        loop={0}
        cursor
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
  );
};

export default HeroText;
