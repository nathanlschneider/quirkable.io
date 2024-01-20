"use client";
import { useRef, useState } from "react";
import { Constraint } from "./Constraint";
import { motion } from "framer-motion";
import TechCard from "./TechCard";
import styles from "@styles/tech.module.scss";
const TechCards = () => {
  const cardsArray = [
    <TechCard
      h3="CSS3"
      p="CSS3, or Cascading Style Sheets Level 3, is the latest version of the CSS language, which is used to style and format the visual presentation of web pages. CSS3 introduces several new features and enhancements compared to its predecessor, CSS2."
    />,
    <TechCard
      h3="HTML5"
      p={
        "HTML5, or Hypertext Markup Language version 5, is the latest iteration of the HTML standard used for structuring and presenting content on the World Wide Web. HTML5 introduces several new features and enhancements compared to its predecessor, HTML4."
      }
    />,
    <TechCard h3="JavaScript" p={"JavaScript is a high-level, versatile programming language primarily known for its role in web development. It is commonly used to add interactivity, dynamic content, and behavior to websites"} />,
    <TechCard h3="Node/Express" p={"Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to execute JavaScript code server-side, outside of the browser."} />,
    <TechCard
      h3="NextJS"
      p={
        "Next.js is a popular open-source React framework for building web applications. It is designed to make web development with React easier and more efficient by providing a set of conventions and features. "
      }
    />,
    <TechCard
      h3="React"
      p={
        "React is a JavaScript library for building user interfaces, particularly for creating single-page applications where user interactions and updates occur without the need for full page reloads. Developed and maintained by Facebook, React has gained widespread adoption in the web development community"
      }
    />,
    <TechCard
      h3="PHP"
      p={
        "PHP is primarily designed for server-side scripting, meaning it runs on a web server, processes the script, and sends the result to the client's browser. This allows dynamic content generation on the server before it reaches the user."
      }
    />,
    <TechCard
      h3="Python"
      p={"Python is a cross-platform language, running on various operating systems (Windows, macOS, Linux). It supports multiple programming paradigms, including procedural, object-oriented, and functional programming."}
    />,
    <TechCard
      h3="C#.NET"
      p={
        "C# (pronounced C sharp) is a modern, object-oriented programming language developed by Microsoft. It is part of the .NET (pronounced dot NET) framework, and together they provide a powerful platform for building Windows applications, web applications, and various other types of software. "
      }
    />,
  ];
  const constraintsRef = useRef(null);
  const [key, setKey] = useState(1);
  const [cards, setCards] = useState(cardsArray);
  const handleKey = () => {
    setCards(shuffleArray(cards));
    setKey(key + 1);
  };

  const shuffleArray = (array) => {
    // Create a copy of the array to avoid modifying the original
    const shuffledArray = [...array];

    // Start from the end of the array and swap elements randomly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  };

  return (
    <>
      <div className="btn" style={{ margin: "20px 0px 60px" }} onClick={handleKey}>
        Reset Boxes
      </div>
      <motion.section ref={constraintsRef} className={styles.techcardwrapper}>
        <Constraint.Provider key={key} value={constraintsRef}>
          {cards}
        </Constraint.Provider>
      </motion.section>
    </>
  );
};

export default TechCards;
