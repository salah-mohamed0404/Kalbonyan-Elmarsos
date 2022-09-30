import classes from "./SkillsAndCertficatesSection.module.css";
import Certificates from "./SkillsAndCertficates/Certificates";
import Skills from "./SkillsAndCertficates/Skills";

function SkillsAndCertficates() {
  return (
    <section id="skills" className={classes["skillAndCertficates-sectoin"]}>
      <div className="container">
        <h2 className="heading-secondary">Skills & Certificates</h2>
        <div className={classes.main}>
          <Skills />
          <Certificates />
        </div>
      </div>
    </section>
  );
}

export default SkillsAndCertficates;
