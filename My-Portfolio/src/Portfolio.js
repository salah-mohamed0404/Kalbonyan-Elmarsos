import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Header from "./componants/Header/Header";
import LoadingSpinner from "./componants/Loading/LoadingSpinner";
import Main from "./componants/Main";

function Portfolio() {
  const loadingEl = document.getElementById("loading");

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);

  if (completed) loadingEl.classList.add("loaded");
  return (
    <div>
      <Header />
      <Main />
      {createPortal(<LoadingSpinner />, document.getElementById("loading"))}
    </div>
  );
}

export default Portfolio;
