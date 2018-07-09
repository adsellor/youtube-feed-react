import React from "react";

import {Context} from "../provider/Provider";
import "../scss/modal.scss";

const Modal = props => {
  return (
    <Context.Consumer>
      {context => {
        if (context.isModalOpen) {
          return (
            <div className="modal-wrapper" onClick={context.toggleModal}>
              <div className="modal">
                <iframe
                  width="800"
                  height="500"
                  src={`${"http://www.youtube.com/embed/" +
                    context.state.modalSource}`}
                />
              </div>
            </div>
          );
        }
      }}
    </Context.Consumer>
  );
};

export default Modal;
