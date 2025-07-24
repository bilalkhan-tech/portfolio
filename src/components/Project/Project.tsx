import { Container, ShowMoreWrapper, ShowMoreButton } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

const allProjects = [
  {
    title: "Carvonix Mobile app",
    description: `CARVONIX is the ultimate automotive enthusiast social platform...`,
    tech: ["Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://ai-chatbot-t8fn.onrender.com",
  },
  {
    title: "Chatter Social",
    description: `Group-first social network for real-time conversations...`,
    tech: ["Typescript", "Stripe Payment", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en",
  },
  {
    title: "iSQROLL",
    description: `iSQROLL, a marketplace designed for Kiwi's, by Kiwis...`,
    tech: ["Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.isqroll&hl=en",
  },
  {
    title: "Mish - Carpooling",
    description: `Mish is Aotearoa New Zealand’s latest community-based travel network...`,
    tech: ["Typescript", "Firebase", "Redux-Toolkit", "Stripe Payments"],
    link: "https://play.google.com/store/apps/details?id=com.mish&hl=en",
  },
  {
    title: "SafeSigNZ",
    description: `Safety starts with understanding how developers collect and share your data...`,
    tech: ["Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.safesignz&hl=en_US",
  },
  {
    title: "Ponataki",
    description: `The language of Niue is an integral part to the preservation...`,
    tech: ["Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.vagahauniue&hl=en",
  },
  {
    title: "LocumBridge",
    description: `Locumbridge: Your All-in-One Healthcare Staffing Solution...`,
    tech: ["React Native", "Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.locum_bridge&hl=en",
  },
  {
    title: "Saloof",
    description: `Saloof is a pioneering B2B e-commerce platform...`,
    tech: ["React Native", "Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.outsourcenz.saloof&hl=ens",
  },
  {
    title: "SafetyCheck",
    description: `At SafetyCheck, we believe that an excellent health and safety system...`,
    tech: ["React Native", "Typescript", "Firebase", "Redux-Toolkit"],
    link: "https://play.google.com/store/apps/details?id=com.outsourcenz.safetycheck&hl=en",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {visibleProjects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, techIdx) => (
                    <li key={techIdx}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ShowMoreWrapper>
        <ShowMoreWrapper>
          <ShowMoreButton
            className={showAll ? "rotated" : ""}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </ShowMoreButton>
        </ShowMoreWrapper>
      </ShowMoreWrapper>
    </Container>
  );
};

export { Project };
