import styled, { css } from "styled-components";
import { devices } from '../../globals/media-queries';

export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  cursor: default;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const ModalClose = styled.div`
  float: right !important;
  text-decoration: none !important;
  background: rgba(176, 134, 5, 0.65);
  cursor: pointer;
  font-size: 1.5rem;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 2rem;
`;

const modalCloseStyle = css`
    color: black;
`;

const modalCloseHoverStyle = css`
    color: #990101;
`;

const getModalCloseStyle = props => {
  return props.isHovering ? modalCloseHoverStyle : modalCloseStyle;
}

export const ModalCloseCustomStyle = styled.div`
  ${getModalCloseStyle}
`;

export const ModalContainer = styled.div`
  background: #797420;;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;

export const ModalFooter = styled.div`
  padding: 2px 0px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  max-height: 100px;

  p, span, h1, h2, h3, h4, h5, h6 {
    font-size: 15px;
  }
  
  @media ${devices.laptop} {
    font-size: 1.2rem;
    color: black;
  }
  
`;

export const Button = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;
