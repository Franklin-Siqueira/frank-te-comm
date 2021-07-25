// Copyright 2021 Franklin Siqueira
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Challenge 01 | Landing Page
//
// ------------------------------------------------------------------------
//  src/assets/lab/frontEnd/modalStyles.js
// ------------------------------------------------------------------------
// Source:
// https:// keyholesoftware.com/2020/11/18/cook-your-own-modal-with-styled-components/
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React from "react";
import styled from "styled-components";
/** Vars */
//  inset-block-start, inset-inline-start, inset-block-end, and inset-inline-end
// [CM_CENTER_CENTER]
// [CM_TOP_LEFT]
// [CM_TOP_CENTER]
// [CM_TOP_RIGHT]
const Header = styled.h1`
`;
const HBar = styled.hr`
`;
const Slot = styled.p`
`;
const ButtonBar = styled.div`
`;
const Button = styled.button`
`;
//
const Modal = styled.div`
  z-index: auto;
  /* display: ${({ show }) => (show ? "block" : "none")}; */
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
//
const Container = styled.div`
  position: fixed;
  background: antiquewhite;
  width: 33%;
  height: auto;

  top: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: "50%",
      [CM_TOP_LEFT]: "10%",
      [CM_TOP_CENTER]: "10%",
      [CM_TOP_RIGHT]: "10%",
    }[openPos])};

  left: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: "50%",
      [CM_TOP_LEFT]: "5%",
      [CM_TOP_CENTER]: "50%",
      [CM_TOP_RIGHT]: "95%",
    }[openPos])};

  transform: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: "translate(-50%,-50%)",
      [CM_TOP_LEFT]: "translate(0,0)",
      [CM_TOP_CENTER]: "translate(-50%,0)",
      [CM_TOP_RIGHT]: "translate(-100%,0)",
    }[openPos])};

  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(0, 0, 139, 0.7);
`;
/** Exports */
/**
 * ConfirmationModalImpl(props) 
 * @param {*} props
 * @returns
 */
export default function ConfirmationModalImpl(props) {
  // Props
  const {
    handleClose, // renderProp function expects truthy or falsey
    show, // boolean - visible/invisible
    headerText, // text
    detailText, // html / inner text
    openPos, // placement choice
  } = { ...props };
  //
  const sendYes = () => handleClose(true);
  const sendNo = () => handleClose(false);
  //
  return (
    <Modal show={show}>
      <Container openPos={openPos}>
        <Header>{headerText}</Header>
        <HBar />
        <Slot>{detailText}</Slot>
        <ButtonBar>
          <Button onClick={sendYes} primary={true}>
            Yes
          </Button>
          <Button onClick={sendNo} primary={false}>
            No
          </Button>
        </ButtonBar>
      </Container>
    </Modal>
  );
}
