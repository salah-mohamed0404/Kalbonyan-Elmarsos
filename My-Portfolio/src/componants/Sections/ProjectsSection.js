import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../store/data";
import classes from "./ProjectsSection.module.css";

let filteredProjects;

const technolgies = [
  "Featured",
  ...new Set(projects.map(project => project.technology)),
];

function Projects() {
  const [active, setActive] = useState("");
  const btns = document.querySelectorAll(
    `.${classes["projects-section"]} .btn`
  );

  useEffect(() => {
    setActive("Featured");
  }, []);

  useEffect(() => {
    if (active === "Featured") btns[0].classList.add("btn_active");
  }, [active, btns]);

  // Filter project based on active button
  if (active === "Featured")
    filteredProjects = projects.filter(project => project.featured);
  else
    filteredProjects = projects.filter(
      project => project.technology === active
    );

  const btnFilterHandler = e => {
    btns.forEach(btn => btn.classList.remove("btn_active"));
    e.target.classList.add("btn_active");
    setActive(e.target.textContent);
  };

  const renderProject = project => (
    <motion.li
      layout
      key={project.name}
      initial={{ translateX: "10%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: "10%", opacity: 0 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
    >
      <div className={classes["list-item"]}>
        <figure>
          <div>
            <a href={project.codeURL} target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
              </svg>
            </a>
            <a href={project.liveURL} target="blank">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
          {/*tilt-box-container */}
          <img src={project.img} alt={project.name} /> {/*tilt-box */}
        </figure>
        <div>
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <span>{project.technology}</span>
        </div>
      </div>
    </motion.li>
  );

  return (
    <section id="projects" className={classes["projects-section"]}>
      <div className="container">
        <h2 className="heading-secondary">Projects</h2>
        <nav>
          {technolgies.map(tech => (
            <button className="btn" onClick={btnFilterHandler} key={tech}>
              {tech}
            </button>
          ))}
        </nav>

        <ul>
          <AnimatePresence>
            {filteredProjects.map(project => renderProject(project))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
