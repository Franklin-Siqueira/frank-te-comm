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
import * as Nav from "../components/styled/fixedRawNavbar";
/**  */
export default function LandingPage() {
  // Navbar
  const navBarItems = [
    { txt: "MOVE", link: "/#boxNone" },
    { txt: "TO", link: "/#boxOpacity" },
    { txt: "NEW", link: "/#boxBlur" },
    { txt: "LEVEL", link: "/#boxGrayScale" },
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
          <C.CardContainer>
            {/*  */}
            <C.CardLeftSideContainer>
              <C.CardImageContainer>
                <C.CardImage src={cardImage} alt={cardImageAlt} />
              </C.CardImageContainer>
            </C.CardLeftSideContainer>
            {/*  */}
            <C.CardRightSideContainer>
              <C.CardFormContainer>
                <C.CardFormHeader>{cardHeaderText}</C.CardFormHeader>
                <C.CardFormSubHeader>{cardSubheaderText}</C.CardFormSubHeader>
                <C.CardText>{cardParagraphText}</C.CardText>
                <C.CardFormGroup>
                  <C.CardInput
                    value={userEmail}
                    onChange={handleEmailInput}
                    placeholder={cardInputPlaceHolder}
                  />
                </C.CardFormGroup>
                <C.CardFormButton onClick={handleForm}>
                  {cardSubmitButtonText}
                </C.CardFormButton>
                {emailError ? (
                  <C.CardInputError>
                    {emailInvalidInputMessage}
                  </C.CardInputError>
                ) : (
                  ""
                )}
              </C.CardFormContainer>
            </C.CardRightSideContainer>
          </C.CardContainer>
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
      </S.BoxesContainer>
      {/* <S.PageContainerFooter>test</S.PageContainerFooter> */}
    </S.PageContainer>
    // </S.Body>
    //   </S.PageHtml>
    // </Fragment>
  );
}
