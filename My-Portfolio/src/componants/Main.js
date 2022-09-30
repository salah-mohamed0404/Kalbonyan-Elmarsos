import classes from "./Main.module.css";
import AboutSection from "./Sections/AboutSection";
import ServicesSection from "./Sections/ServicesSection";
import SkillsAndCertficates from "./Sections/SkillsAndCertficatesSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactUsSection from "./Sections/ContactUsSection";
import { useEffect, useState } from "react";

function Main() {
  const [first, refresh] = useState(false);
  useEffect(() => refresh(true), []);
  // Reveal section
  if (first) {
    const allSections = document.querySelectorAll("main section");

    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");

      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }

  return (
    <main className={classes.main}>
      <AboutSection />
      <ServicesSection />
      <SkillsAndCertficates />
      <ProjectsSection />
      <ContactUsSection />
    </main>
  );
}

export default Main;
