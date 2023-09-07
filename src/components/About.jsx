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
      </motion.div>
      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my page! I&apos;m not your average Software Engineer - I
        bring a unique blend of experience, expertise, and a passion for solving
        complex issues. With 4 years in the industry, I have honed my skills in
        designing and implementing innovative software solutions that take user
        experience to the next level.
      </motion.p>
      <br />
      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Picture this: clean code that&apos;s as sleek as a stealthy ninja,
        thanks to the brilliant minds behind books like &quot;Clean Code,&quot;
        &quot;Robust Python,&quot; &quot;Fluent Python,&quot; &quot;Python
        Cookbook,&quot; and &quot;Clean Architecture.&quot; These gems have
        truly shaped my coding philosophy!
      </motion.p>
      <br />
      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        But I don&apos;t stop at clean code - I optimize it to be as efficient
        as possible, asynchronous programming is almost like a second nature to
        me. While some may obsess over flashy frameworks, I prefer to focus on
        the technology itself, although I do have more experience with FastAPI,
        second one on the list is Django, then Tornado and Flask. Third-party
        services? Consider them conquered! I&apos;ve embarked on thrilling side
        quests to seamlessly integrate external services into my projects.
        Whether it&apos;s tackling monolithic or microservice architectures,
        I&apos;m well-versed in both. While microservices are often overused,
        I&apos;ve encountered some underappreciated issues like ensuring
        exactly-once delivery, preserving ordering, managing distributed
        transactions, and optimizing distributed cache.
      </motion.p>
      <br />
      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Python may be my main squeeze, but I&apos;m no one-trick pony. I&apos;ve
        also delved into blockchain technologies, mastered ETLs, and navigated
        the vast landscape of cloud services, including AWS and GCP. In my
        personal projects, I&apos;ve even experimented with React and Golang,
        pushing the boundaries of my skills and exploring new horizons.
      </motion.p>
      <br />
      <motion.p
        variants={textVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Passion drives me in everything I do. Feel free to connect and embark on
        a thrilling journey together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
