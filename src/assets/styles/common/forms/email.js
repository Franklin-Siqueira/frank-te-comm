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
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  src/assets/styles/common/forms/email.js
// ------------------------------------------------------------------------
/** Imports */
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import BackGroundImage from "./../../../images/sale/blackfriday/poder_Vieira.png";
/** Theme */
// const theme = {
//   font: "sans-serif",
//   primary: "#333",
//   secondary: "#999",
// };
/** Elements */
export const FormConteiner = styled.section`
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-image: url(${BackGroundImage});
  //   opacity: 0.5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8f4226;
`;
export const EmailCardConteiner = styled.div`
  max-width: 90vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  padding: .5em;
  background-color: #212121;
  opacity: .9;
  color: white;
  display: flex;
  > div {
    padding: 5px 5px;
    > div {
      display: block;
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: bold;
        span {
          display: block;
          padding: 5px;
          font-weight: 300;
          font-size: 0.8rem;
          color: #333;
        }
      }
      img {
        max-width: 50px;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 600px){
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    }
}
`;
export const EmailCardImage = styled.img`
  max-width: 20em;
  padding: .5em;
`;
export const EmailCardParagraph = styled.p`
  min-width: 10em;
`;
export const EmailCardDivHeader = styled.div`
    background-color: black;
    border-radius: 0.25rem;
    font-size: 5em;
    font-weight: 700;
    text-align: center;
    padding: 0.25em;
    // min-width: 10em;
    max-width: 95%;
    // display: flex;
    align-items: center;
    justify-content: center;
    &:span{
        font-color: yellow;
    }
`;
export const EmailCardDivForm = styled.div`
  min-width: 10em;
  display: block;
  align-items: center;
  justify-content: center;
`;
export const EmailCardDivSubtitle = styled.div`
  min-width: 10em;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  margin: 0.25rem;
  font-size: 1.5em;
  font-weight: 700;
  font-color: yellow;
  text-align: center;
`;
export const EmailCardDivParagraph = styled.div`
  min-width: 10em;
  text-align: center;
`;
export const EmailCardNameInput = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    width: 95%;
    padding: 0.25rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const EmailCardEmailInput = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    width: 95%;
    padding: 0.25rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const EmailCardSubmitButton = styled.button`
  background: #000;
  border: 1px solid gray;
  color: yellow;
  font-weight: 600;
  height: 2rem;
  transition: 0.3s;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
