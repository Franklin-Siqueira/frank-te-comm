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
//// Gama Academy | Hiring Coders | [HC] Challenge 02 | E-Commerce
//
// ------------------------------------------------------------------------
//  src//views/users/index.js - (UNDER REVIEW)
// ------------------------------------------------------------------------
/** Imports (requirements) */
import styled, { css } from "styled-components";
/** Imports (mixins) */
import { device } from "../../assets/styles/common/devices/mixins";
/** Imports (images) */
import LandImage from "./../../assets/images/home/000-mercedes-benz-vehicles-e-class-e-400-4matic-coupe-c-238-2560x1440-2560x1440.jpeg";
/**
 * Jen Simmons | Design Test
 * CSS | 7-column Symmetrical Grid
 */
 export const GridPageContainer = styled.div`
  box-sizing: border-box;
  /* background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/0236.jpg"); */
  /* background-image: url(${LandImage});
  background-size: cover;
  background-position: center bottom; */
  /* height: 100vh; */
  min-height: 100vh;
  /* padding: 0; */
  width: 100vw;
  position: absolute;
  margin: 0;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
  }
`;
export const GridBoxesContainer = styled.section`
  display: flex;
  margin-right: 10px;
  overflow: scroll;
  min-height: 100vh;
  width: 100%;
  align-items: center;

  p {
    display: block;
    font-weight: 600;
    min-width: 200px;
    color: white;
    font-size: 18px;
    padding: 25px;

    @media (${device.tablet}) {
      font-size: 60px;
      min-width: 300px;
    }
  }
`;
export const GridBox = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.7); */
  min-width: 100vw;
  min-height: 100vh;
  line-height: 1;
  /* padding: 15px 15px; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.12s ease-in-out;

  &:nth-child(1n + 1) {
    border-right: none;
  }

  // h1 {
  //     font-weight: 600;
  //     font-size: 24px;
  //     padding:25px
  // }
`;
export const GridBoxVariation = styled(GridBox)`
  backdrop-filter: grayscale(1);
`;
export const UlFormHeader = styled.h1`
 position: absolute;
 top: 5px;
 left: 5px;
 margin: 5px;
 color: yellow !important;
 font-weight: 800;
 font-size: 18px;
 opacity: 1;
`;
export const UlBoxFormSubHeader = styled.h3`
 position: absolute;
 top: 25px;
 left: 5px;
 margin: 5px;
 color: #0008 !important;
 font-weight: 600;
 font-size: 14px !important;
 background-color: rgba(0.3, 0.3, 0.9, 0.2);
 padding: 10px;
`;
export const UlBoxTextArea = styled.div`
 position: absolute;
 display: grid;
 top: 45px;
 right: 5px;
 /* margin: 5px; */
 color: #0009 !important;
 font-weight: 600;
 font-size: 12px !important;
 text-align: right;
`;
export const UlBoxText = styled.h3`
 /* position: absolute; */
 /* top: 45px; */
 right: 5px;
 margin: 5px;
 padding: 2px;
 color: #0009 !important;
 font-weight: 600;
 font-size: 12px !important;
 text-align: right;
`;
export const UlBoxMark = styled.h1`
 position: absolute;
 top: 1px;
 right: 3px;
 padding: 5px;
 /* margin: 8px; */
 color: #0009 !important;
 background-color: #0002;
 width: 18px;
 font-weight: 600;
 font-size: 18px !important;
 text-align: right;
`;
export const GridBaseUl = styled.ul`
    /* padding: 2px; */
    display: grid;
    /* margin: 1px; */
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 50vw;
    grid-auto-flow: dense;

    @media (min-width: 360px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 33vw;
    }

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 25vw;
    }

    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 20vw;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 15vw;
    }

    @media (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 11vw;
    }
`;
export const UlCardContainer = styled.div`
  width: 280px;
  height: 300px;
  display: grid;
  // border: 1px solid #fff;
  border-radius: 2px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
`;
export const GridBaseLi = styled.li`
    background-color: #0003;
    margin: 1px;
    height: 100%;
    padding: 1px;
    list-style-type: none;
`;
export const imgBase = styled.img`
    display: block;
    position: absolute;
    top: 55px;
    left: 1px;
    margin: 8px;
    /* object-fit: cover; */
    width: 20%;
    height: 20%;
    /* border-radius: 50%; */
    // border: 1px solid black;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`;
export const liBoxSize = styled.li`
    grid-row: span 2;
    grid-column: span 2;
`;
export const liTallxSize = styled.li`
    grid-row: span 2;
`;
export const liBWideSize = styled.li`
    grid-column: span 2;
`;
export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: palevioletred;
    `}

  ${(props) =>
    props.danger &&
    css`
      background: red;
      color: white;
    `}
    
    @media (min-width: 768px) {
    padding: 1rem 2rem;
    width: 11rem;
  }
  @media (min-width: 1024px) {
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }
`;
//
// .warning {
//   color: red;
//   font-size: 200%;
// }
// @supports (display: grid) {
//   .warning {
//     display: none;
//   }
// }