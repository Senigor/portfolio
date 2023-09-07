import {
  front,
  backend,
  tech,
  data,
  reactjs,
  mongodb,
  git,
  docker,
  python,
  fastapi,
  django,
  graphql,
  aws,
  gcp,
  postgresql,
  elasticsearch,
  redis,
  star,
  robin,
  indevlab,
  clothingstore,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Magician",
    icon: backend,
  },
  {
    title: "Data Sorcerer",
    icon: data,
  },
  {
    title: "Frontend Enthusiast",
    icon: front,
  },
  {
    title: "Tech Explorer",
    icon: tech,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Elasticsearch",
    icon: elasticsearch,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Robin8",
    icon: robin,
    iconBg: "#383E56",
    date: "Apr 2018 - Oct 2019",
    points: [
      "Developing and maintaining decentralised, blockchain based e-commerce marketplace for IP/NFT and physical goods.",
      "Participating in the evolution of the Solidity smart contract used for transferring IP/NFT. Designing new microservices with the support of GraphQL to speed up loading of trader's profiles data with comments.",
      "Learning of how crypto exchanges work and supporting its development.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "InDevLab (Innovations Development Lab)",
    icon: indevlab,
    iconBg: "#E6DEDD",
    date: "Oct 2019 - Jan 2021",
    points: [
      "Maintaining crypto betting platform based on a private blockchain with supporting high load, streaming data from Apache Kafka to different databases including ClickHouse, Elasticsearch, adding a wide variety of different WebSockets to keep UI data up-to-date, and using Cement+Supervisor for jobs management.",
      "Participating in the development of backend for mobile and web application Doctor Online using Tornado framework, communicating closely with project managers and doctors in order to improve experience using the application.",
      "Implementing Firebase topics messaging and FCM tokens for mobile application notifications, seting up ELK stack for the centralised logging, implementing FTS, integrating wide variety of third-party healthcare solutions.",
    ],
  },
  {
    title: "Regular/Senior Software Engineer",
    company_name: "Star",
    icon: star,
    iconBg: "#0a0a0a",
    date: "Jan 2021 - Present",
    points: [
      "Designing and developing new microservices with very strict business-logic using DDD (domain-driven design approach) and async FastAPI framework in order to support high traffics on the webservers as well as databases.",
      "Implementing marketing funnels using Django with the ability of A/B testing for the e-commerce store in order to improve customer experience as well as have an easy way to represent main products.",
      "Prototyping a solution for the new architecture of the project, getting rid of legacy code, splitting up unscalable and difficult to maintain monoliths to microservices that used newer technologies, which led to an increase of the website performance by up to 40%.",
      "Developing ETL scripts in Python/PySpark to extract data from various sources including some third-party services, databases, raw files located inside of S3 bucket or Google Drive, transform them with AWS Glue and load to AWS Redshift or external BI tools.",
      "Constantly improving the quality of the codebase by initiating refactoring efforts, improving build tools, and improving internal processes.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Clothing Store",
    description:
      "A massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. Full stack app (MERN stack), using Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "yellow-text-gradient",
      },
    ],
    image: clothingstore,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
