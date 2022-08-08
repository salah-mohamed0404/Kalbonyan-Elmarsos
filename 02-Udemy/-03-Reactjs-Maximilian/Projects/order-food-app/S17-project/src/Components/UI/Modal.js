import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => (
  <div className={classes.backdrop} onClick={props.onClose} />
);

const ModalOverlay = props => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalEL = document.getElementById("overlays");

const Modal = props => (
  <>
    {createPortal(<Backdrop onClose={props.onClose} />, portalEL)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEL)}
  </>
);

export default Modal;
