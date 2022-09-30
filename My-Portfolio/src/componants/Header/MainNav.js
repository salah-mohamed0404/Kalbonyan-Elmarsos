import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={classes["main-nav"]}>
      <ul>
        <li>
          <a className="link" href="#about" date-text="About">
            About
          </a>
        </li>

        <li>
          <a className="link" href="#services" data-text="Services">
            Services
          </a>
        </li>

        <li>
          <a className="link" href="#skills" data-text="Skills">
            Skills
          </a>
        </li>

        <li>
          <a className="link" href="#projects" data-text="Projects">
            Projects
          </a>
        </li>

        <li>
          <a className="link btn" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
