import MainNav from "./MainNav";
import HeroSection from "./HeroSection";

import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";

function Header() {
  const navBtnHandler = () =>
    document.getElementById("nav-header").classList.toggle(classes["nav-open"]);

  document
    .querySelectorAll("#nav-header a")
    .forEach(link =>
      link.addEventListener("click", () =>
        document
          .getElementById("nav-header")
          .classList.remove(classes["nav-open"])
      )
    );

  return (
    <header className={classes["main-header"]}>
      <header id="nav-header">
        <div className={classes.logo}>
          <img src={logoImg} alt="logo" />
        </div>

        <MainNav />

        <button className={classes["btn-mobile-nav"]} onClick={navBtnHandler}>
          <div></div>
        </button>
      </header>

      <HeroSection />
    </header>
  );
}

export default Header;
