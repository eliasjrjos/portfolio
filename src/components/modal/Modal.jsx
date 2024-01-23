import React, { Fragment } from "react";

import { AiOutlineClose } from 'react-icons/ai';

import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalCloseCustomStyle,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./Modal.style";

const Modal = ({ title, footer, children, active, hideModal }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setIsHovering(false);
  }, [active]);

  return (
    <Fragment>
      {active && (
        <ModalBlock>
          <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={() => hideModal()} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <ModalCloseCustomStyle isHovering={isHovering}>
                  <AiOutlineClose size={20}>X</AiOutlineClose>
                </ModalCloseCustomStyle>
              </ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </ModalBlock>
      )}
    </Fragment>
  );
};

export default Modal;
