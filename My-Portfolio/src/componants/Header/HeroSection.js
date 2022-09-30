import classes from "./HeroSection.module.css";
import heroImg from "../../assets/MERN_Stack_Hero.png";

function HeroSection() {
  return (
    <section id="section-hero" className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes.welcoming}>
          <h1 className="heading-primary">
            Hi, i'm <strong>Salah Mohamed</strong>
          </h1>
          <h2 className="heading-secondary">
            I'm web developer <strong>(MERN Stack)</strong>
          </h2>
          <div className={classes["cta-btns"]}>
            <a href="#skills" className="btn link">
              To my skills
            </a>
            <a
              href="https://fcihelwanedu-my.sharepoint.com/:w:/g/personal/salah_20210477_fci_helwan_edu_eg/EWPGWGr6v1RAueRiVcRm0dsBxLp5vTjIF2zYbCbArv1NFQ?e=lILpID"
              className="link"
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>

        <div className={classes.me}>
          <figure>
            <img src={heroImg} alt="MERN stack hero" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
