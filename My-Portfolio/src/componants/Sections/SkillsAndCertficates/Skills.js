import classes from "./Skills.module.css";
import { skills } from "../../../store/data";

function Skills() {
  const renderSkills = (skill) => (
    <li key={skill.name}>
      <figure>
        <div>
          <img src={skill.logo} alt={skill.name} />
        </div>

        <figcaption>{skill.name}</figcaption>
      </figure>
    </li>
  );

  return (
    <ul className={classes["skills-list"]}>
      {skills.map((skill) => renderSkills(skill))}
    </ul>
  );
}

export default Skills;
