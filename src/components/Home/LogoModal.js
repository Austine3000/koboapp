import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const LogoModal = ({ toggle, state }) => {
  return (
    <div>
      <Modal
        isOpen={state.modal}
        toggle={toggle}
        className="modal-custom-style"
      >
        <ModalHeader toggle={toggle} />
        <ModalBody>Welcome to Kobo360 dashboard for DHL!</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Ok
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LogoModal;
