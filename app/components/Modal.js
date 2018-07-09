import React from "react";

import { Context } from "../provider/Provider";
import "../scss/modal.scss";

const Modal = props =>
  props.isModalOpen && (
    <div className="modal-wrapper" onClick={props.toggleModal}>
      <div className="modal">
        <iframe
          width="800"
          height="500"
          src={`${"http://www.youtube.com/embed/" + props.modalSource}`}
        />
      </div>
    </div>
  );

export default Modal;
