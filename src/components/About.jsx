import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
        min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px] font-bold
          text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          As a Python Backend Wizard, I conjure up efficient and scalable
          solutions like spells from a magical grimoire. Enchanted by the allure
          of clean code, the art of crafting robust APIs, and the mystical dance
          of performance optimization, I&apos;m on an endless quest for
          knowledge, unafraid of tackling the trickiest challenges. Just like a
          master sorcerer perfecting their incantation, I invest that extra
          spellbinding touch into my creations, ensuring they manifest the
          creative vision in the most enchanting way possible. Feel free to
          contact and embark on a thrilling journey together!
        </p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
