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
//  src/assets/lab/frontEnd/cssTricksStyles.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import styled from "styled-components";
/** Imports (mixins) */
import { device } from "../../assets/styles/common/devices/mixins";
/** Imports (images) */
import LandImage from "./../../assets/images/home/000-mercedes-benz-vehicles-e-class-e-400-4matic-coupe-c-238-2560x1440-2560x1440.jpeg";

// * { box-sizing: border-box; }

// html,
// body {
//   width: 100%;
//   margin: 0;
// }
/** Vars */
const boxBackDrop = {
  none: `(backdrop-filter: "none")`,
  graysScale: `(backdrop-filter: grayscale(1))`,
  brightNess: `(backdrop-filter: brightness(1.5))`,
  blur: `(backdrop-filter: blur(5px))`,
  contrast: `(backdrop-filter: contrast(.8))`,
  dropShadow: `(backdrop-filter: drop-shadow(4px 4px 10px blue))`,
  invert: `(backdrop-filter: invert(.7))`,
  opacity: `(backdrop-filter: opacity(.4))`,
  sepia: `(backdrop-filter: sepia(.4))`,
  saturated: `(backdrop-filter: saturate(1.8))`,
  hueRotate: `(backdrop-filter: hue-rotate(120deg))`,
};

// Devices's sizes
// const size = {
//     mobileS: "320px",
//     mobileM: "375px",
//     mobileL: "425px",
//     tablet: "768px",
//     laptop: "1024px",
//     laptopL: "1440px",
//     desktop: "2560px",
//   };
//   // Devices
//   export const device = {
//     mobileS: `(min-width: ${size.mobileS})`,
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,

/** Elements */
export const LandingSectionConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0003;
`;
export const PageContainer = styled.div`
  box-sizing: border-box;
  /* background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/0236.jpg"); */
  background-image: url(${LandImage});
  background-size: cover;
  /* background-position: center bottom; */
  /* height: 100vh; */
  min-height: 100vh;
  /* padding: 0; */
  width: 100vw;
  position: absolute;
  margin: 0;

  /* iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
  } */
`;
export const PageContainerFooter = styled.footer`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 33px;
    background: #222;
    color: #0009;
    opacity: .2;
`;
export const BoxesContainer = styled.section`
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
export const Box = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
  min-width: 100vw;
  min-height: 100vh;
  line-height: 1;
  padding: 15px 15px;
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
export const BoxCustom = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
  min-width: 100vw;
  min-height: 100vh;
  line-height: 1;
  padding: 15px 15px;
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
export const BoxInsiderContainer = styled.div`
  width: 1100px;
  height: 90vh;
  display: flex;
  // border: 1px solid #fff;
  // border-radius: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  /* backdrop-filter: blur(10px); */
`;
export const BoxFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 80%;
`;
export const BoxFormHeader = styled.h1`
  position: absolute;
  top: 5px;
  left: 5px;
  margin: 5px;
  /* margin: 18px; */
  color: yellow !important;
  font-weight: 800;
  font-size: 72px;
  opacity: 1;

  @media (min-width: 360px) {
    text-align: left;
  }

  @media (min-width: 500px) {
    text-align: left;
  }

  @media (min-width: 700px) {
    text-align: left;
  }

  @media (max-width: 917px) {
    text-align: left;
    max-width: 550px;
  }

  @media (${device.tablet}) {
      text-align: left;
      /* font-size: 60px;
      min-width: 300px; */
    } 
`;
export const BoxFormSubHeader = styled.h3`
  position: absolute;
  top: 85px;
  left: 5px;
  margin: 5px;
  /* margin: 8px; */
  color: #CBCBCB !important;
  font-weight: 600;
  font-size: 36px !important;
  background-color: rgba(0.3, 0.3, 0.9, 0.2);
  padding: 10px;

  @media (min-width: 360px) {
    text-align: left;
    top: 180px;
  }

  @media (min-width: 500px) {
    text-align: left;
    top: 105px;
  }

  @media (min-width: 700px) {
    text-align: left;
    top: 105px;
  }

  @media (max-width: 917px) {
    text-align: left;
    top: 155px;
    max-width: 550px;
  }

  @media (${device.tablet}) {
      text-align: left;
      /* font-size: 60px;
      min-width: 300px; */
    } 
`;
export const BoxText = styled.p`
  position: absolute;
  top: 105px;
  left: 155px;
  margin: 5px;
  margin: 8px;
  color: #AB5752 !important;
  font-weight: 600;
  font-size: 24px !important;
  text-align: right;
  
  @media (min-width: 360px) {
    text-align: left;
    top: 180px;
  }

  @media (min-width: 500px) {
    text-align: left;
    top: 125px;
  }

  @media (min-width: 700px) {
    text-align: left;
    top: 135px;
  }

  @media (max-width: 917px) {
    text-align: left;
    top: 215px;
    left: 1px;
    max-width: 600px;
  }

  @media (${device.tablet}) {
      text-align: left;
      /* font-size: 60px;
      min-width: 300px; */
    }

`;
export const Body = styled.body`
  background-color: black;
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
export const NoSupport = styled.div`
  @supports not (backdrop-filter: opacity(1)) {
    text-align: center;
    padding: 10px;
    width: 300px;
    position: absolute;
    z-index: 100;
    top: 5px;
    left: 5px;
    background: #ee6620;
    color: #fff;
    font-size: 12px;
    display: none;
  }
`;
export const BoxNone = styled(Box)`
  backdrop-filter: none;
`;
export const BoxGrayscale = styled(Box)`
  backdrop-filter: grayscale(1);
`;
export const BoxBrightness = styled(Box)`
  backdrop-filter: brightness(1.5);
`;
export const BoxBlur = styled(Box)`
  backdrop-filter: blur(5px);
`;
export const BoxContrast = styled(Box)`
  backdrop-filter: contrast(0.8);
`;
export const BoxDropShadow = styled(Box)`
  backdrop-filter: drop-shadow(4px 4px 10px blue);
`;
export const BoxInvert = styled(Box)`
  backdrop-filter: invert(0.7);
`;
export const BoxOpacity = styled(Box)`
  backdrop-filter: opacity(0.4);
`;
export const BoxSepia = styled(Box)`
  backdrop-filter: sepia(0.4);
`;
export const BoxSaturate = styled(Box)`
  backdrop-filter: saturate(1.8);
`;
export const BoxHueRotare = styled(Box)`
  backdrop-filter: hue-rotate(120deg);
`;
