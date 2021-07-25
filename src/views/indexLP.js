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
//  src//views/App.js - (UNDER REVIEW)
// ------------------------------------------------------------------------
/** Imports (requirements) */
// import React, { Fragment, useState } from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/** Imports (app) */
import "./index.css";
import OPoder from "./../assets/images/home/000-mercedes-benz-vehicles-e-class-e-400-4matic-coupe-c-238-2560x1440-2560x1440.jpeg";
import * as S from "../components/styled/boxStyles";
import * as C from "../components/styled/CardOne";
import * as F from "../components/styled/formCard";
import * as U from "../components/styled/formCardUser"
import * as Nav from "../components/styled/fixedRawNavbar";
import ProductsView from "./../views/products/index";
/**  */
export default function LandingPage() {
  // Navbar
  const navBarItems = [
    { txt: "MOVE", link: "/#boxNone" },
    { txt: "TO", link: "/#boxOpacity" },
    { txt: "NEW", link: "/#boxBlur" },
    { txt: "LEVEL", link: "/#boxGrayScale" },
    { txt: "+Car", link: "/#boxAddCar" },
    { txt: "+User", link: "/#boxAddUser" }
  ];
  // Box Text
  const firstBoxHeader = "Car Dealership Concept";
  const firstBoxSubheader = "we're working to provide you a better UX here...";
  const firstBoxCallToNext =
    "...and hope to see you around the web anytime soon";
  const secondBoxMiddle =
    "Achieving a higher level of productivity is a matter of human and material resources";
  const secondBoxCallToNext =
    "What about being the first to know... keep swiping";
  const thirdBoxMiddleText =
    "Bring your creativity to THE NEXT LEVEL with the right tools";
  const thirdBoxCallToNext = "You're one step way... Just one more swipe...";
  // Card
  const cardImage = OPoder;
  const cardImageAlt = "Livro: o poder da ação";
  const cardHeaderText = "Get it FIRST!";
  const cardSubheaderText = "Our best deals won't last...";
  const cardParagraphText =
    "Stay among those people which are always ahead in their industries. Be the first to know everything about our products, subscribing to our newsletter. It's FREE!";
  const cardInputPlaceHolder = "your e-mail here";
  const emailInvalidInputMessage = "Please, enter a valid e-mail address...";
  const cardSubmitButtonText = "Submit";
  //
  // Car Create Form Vars
  const formCarHead = "Add a New Car Here!";
  const formCarSub = "It's that simple...";
  const formCarParag =
    "After pressing the button below, have a look at Local Storage.";
  // cardInputValue={userEmail}
  const formCarPH = "name your car here...";
  const formCarBT = "ADD CAR";
  const formCarInputEM = "Sorry! It's not a valid car's name...";
  //
  // User Create Form Vars
  const formUserHead = "Add a New User Here!";
  const formUserSub = "It's that simple...";
  const formUserParag =
    "After pressing the button below, have a look at Local Storage.";
  // cardInputValue={userEmail}
  const formUserPH = "user name here...";
  const formUserBT = "ADD USER";
  const formUserInputEM = "Sorry! It's not a valid person's name...";
  //
  // States
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // Handlers
  const navHistory = useHistory();
  const handleEmailInput = (e) => {
    // e.persist();
    setUserEmail(e.target.value);
    console.log(userEmail);
  };
  const handleForm = () => {
    // e.persist();
    if (userEmail === "" || userEmail.indexOf("@") === -1) {
      console.log(emailInvalidInputMessage);
      setEmailError(true);
      return;
    }
    localStorage.setItem("guestData", userEmail);
    navHistory.push("/#");
  };
  // JSX
  return (
    // <Fragment>
    //   <S.PageHtml>
    // <S.Body>
    <S.PageContainer>
      <Nav.NavBarUl>
        {navBarItems.map((navItem, navLink) => (
          <Nav.NavBarLi key={navLink}>
            <a href={navItem.link}>{navItem.txt}</a>
          </Nav.NavBarLi>
        ))}
      </Nav.NavBarUl>
      <S.BoxesContainer>
        <S.BoxDropShadow id="boxDropShadow">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormHeader>{firstBoxHeader}</S.BoxFormHeader>
              <S.BoxFormSubHeader>{firstBoxSubheader}</S.BoxFormSubHeader>
              <S.BoxText>{firstBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxDropShadow>
        <S.BoxNone id="boxNone">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormSubHeader>{secondBoxMiddle}</S.BoxFormSubHeader>
              <S.BoxText>{secondBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxNone>
        <S.BoxOpacity id="boxOpacity">
          <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormSubHeader>{thirdBoxMiddleText}</S.BoxFormSubHeader>
              <S.BoxText>{thirdBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxOpacity>
        {/* <S.BoxBrightness id="boxBright">{textBoxFour}</S.BoxBrightness> */}
        <S.BoxBlur id="boxBlur">
        <S.BoxInsiderContainer>
            <S.BoxFormContainer>
              <S.BoxFormHeader>{firstBoxHeader}</S.BoxFormHeader>
              <S.BoxFormSubHeader>{firstBoxSubheader}</S.BoxFormSubHeader>
              <S.BoxText>{firstBoxCallToNext}</S.BoxText>
            </S.BoxFormContainer>
          </S.BoxInsiderContainer>
        </S.BoxBlur>
        <S.BoxGrayscale id="boxGrayScale">
          <C.Card
            cardImage={OPoder}
            cardImageAlt={cardImageAlt}
            cardFormHead={cardHeaderText}
            cardFormSubhead={cardSubheaderText}
            cardParagraphText={cardParagraphText}
            cardInputValue={userEmail}
            cardInputPlaceHolder={cardInputPlaceHolder}
            cardSubmitButtonText={cardSubmitButtonText}
            cardInputErrorMessage={emailInvalidInputMessage}
          />
        </S.BoxGrayscale>
        <S.BoxGrayscale id="boxAddCar">
          <F.FormCard
            cardImage={OPoder}
            cardImageAlt={cardImageAlt}
            cardFormHead={formCarHead}
            cardFormSubhead={formCarSub}
            cardParagraphText={formCarParag}
            cardInputValue={userEmail}
            cardInputPlaceHolder={formCarPH}
            cardSubmitButtonText={formCarBT}
            cardInputErrorMessage={formCarInputEM}
          />
        </S.BoxGrayscale>
        <S.BoxOpacity id="#boxAddUser">
          <U.FormCard
            cardImage={OPoder}
            cardImageAlt={cardImageAlt}
            cardFormHead={formUserHead}
            cardFormSubhead={formUserSub}
            cardParagraphText={formUserParag}
            cardInputValue={userEmail}
            cardInputPlaceHolder={formUserPH}
            cardSubmitButtonText={formUserBT}
            cardInputErrorMessage={formUserInputEM}
          />
        </S.BoxOpacity>
      </S.BoxesContainer>
      {/* <S.PageContainerFooter>test</S.PageContainerFooter> */}
    </S.PageContainer>
    // </S.Body>
    //   </S.PageHtml>
    // </Fragment>
  );
}
