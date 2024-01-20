import TechStack from "./TechStack";
import TechCards from "./TechCards";
import styles from "@styles/tech.module.scss";


const TechSection = () => {
  return (
    <article>
      <TechStack />
      <TechCards />
    </article>
  );
};

export default TechSection;
