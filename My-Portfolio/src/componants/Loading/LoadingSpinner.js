import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div id="loading-container" className={classes.loading}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingSpinner;
