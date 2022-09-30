import classes from "./AboutSection.module.css";
import aboutImg from "../../assets/me4.jpg";

function AboutSection() {
  return (
    <section id="about" className={classes["about-section"]}>
      <div className="container">
        <h2 className="heading-secondary">About me</h2>
        <div className={classes.main}>
          <div className={classes["about-text"]}>
            <h3 className="heading-tertiary">Hello! My name is Salah.</h3>
            <p>
              I'm self learning web developer who is passionate about
              programming in gerneral and web development in particular.
            </p>
            <h3 className="heading-tertiary">Academic education</h3>
            <h4 className="subheading">(Oct 2021 - Jul 2025) (GPA: 3.2)</h4>
            <p>
              I study computer science at computers and AI faculty, Helwan
              university in the second year.
            </p>
            <a href="#skills" className="link">
              Cetificates
            </a>
          </div>
          <figure>
            <div>
              <img src={aboutImg} alt="for me" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
