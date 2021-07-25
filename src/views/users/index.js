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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
/** Imporys (app base) */
// Styled components ____________________________________
import * as J from "../../components/styled/gridBoxes";
// import * as C from "./../../components/styled/CardOne";
/** Imports (app custom) */
// Mock Data ______________________________________________________
import usersMockData2 from "./../../mockdata/usersWithAvatar.json";
/** Vars */
const usersMockData = usersMockData2;
const emailInvalidInputMessage = "Please, enter a valid e-mail address...";
/**
 * function UsersView()
 */
export default function UsersView() {
  // momentaneous...
  const userEmail = "";
  const loadedData = !localStorage.getItem("usersData") ? false : true;
  // States
  const [usersData, setUsersData] = useState(loadedData ? JSON.parse(localStorage.getItem("usersData")) : usersMockData);
  if (!loadedData){
      localStorage.setItem("usersData", JSON.stringify(usersData));
  }
  const [emailError, setEmailError] = useState(false);
  // Handlers
  const navHistory = useHistory();
  //   const handleEmailInput = (e) => {
  //     // e.persist();
  //     setUserEmail(e.target.value);
  //     console.log(userEmail);
  //   };
  const handleForm = () => {
    // e.persist();
    if (userEmail === "" || userEmail.indexOf("@") === -1) {
      console.log(emailInvalidInputMessage);
      setEmailError(true);
      return;
    }
    localStorage.setItem("usersEmail", userEmail);
    navHistory.push("/#");
  };
  // JSX
  return (
    <J.GridPageContainer>
      <J.GridBoxesContainer>
        <J.GridBoxVariation id="boxGrayScale">
          <J.GridBaseUl>
            {usersMockData.map((user) => (
              <J.GridBaseLi>
                <J.UlCardContainer>
                  <J.UlFormHeader>{user.last_name}</J.UlFormHeader>
                  <J.UlBoxFormSubHeader>{user.first_name}</J.UlBoxFormSubHeader>
                  <J.UlBoxTextArea>
                    <J.UlBoxText>{user.email}</J.UlBoxText>
                    <J.UlBoxText>{user.ip_address}</J.UlBoxText>
                  </J.UlBoxTextArea>
                  <J.imgBase src={user.avatar} />
                  <J.UlBoxMark>{user.id}</J.UlBoxMark>
                </J.UlCardContainer>
              </J.GridBaseLi>
            ))}
          </J.GridBaseUl>
          {/* <C.Card
            cardImage={OPoder}
            cardImageAlt={cardImageAlt}
            cardFormHead={cardHeaderText}
            cardFormSubhead={cardSubheaderText}
            cardParagraphText={cardParagraphText}
            cardInputValue={userEmail}
            cardInputPlaceHolder={cardInputPlaceHolder}
            cardSubmitButtonText={cardSubmitButtonText}
            cardInputErrorMessage={emailInvalidInputMessage}
          /> */}
        </J.GridBoxVariation>
      </J.GridBoxesContainer>
    </J.GridPageContainer>
  );
}
