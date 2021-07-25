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
//
//// Gama Academy | Hiring Coders | [HC] Challenge 02 | E-Commerce
//
// ------------------------------------------------------------------------
//  src//views/users/index.js - (UNDER REVIEW)
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
/** Imporys (app base) */
// Styled components ____________________________________
// import * as S from "./../../components/styled/boxStyles";
import * as J from "../../components/styled/gridBoxes";
// import * as C from "./../../components/styled/CardOne";
/** Imports (app custom) */
// Mock Data ______________________________________________________
import { CarsFetch } from "./../../services/cars";
// import productsMockDataDB from "./../../mockdata/Cars.json";
/** Vars */
// const productsMockData = productsMockDataDB;
// const emailInvalidInputMessage = "Please, enter a valid e-mail address...";
/**
 * function ProductsView()
 * 
 * JSX providing products from localstorage, using styled-components in J (imports)
 * 
 * Dependencies: React; useState; 
 */
export default function ProductsView() {
  // momentaneous...
  var productsMockData = [];
  const loadedData = !localStorage.getItem("cars") ? false : true;
  // States
  const [productsData, setProductsData] = useState(
    loadedData ? JSON.parse(localStorage.getItem("cars")) : CarsFetch()
  );
  if (!loadedData) {
    localStorage.setItem("cars", JSON.stringify(productsData));
    productsMockData = productsData;
  }
  //   localStorage.setItem("productsData", JSON.stringify(productsData));
  // const [emailError, setEmailError] = useState(false);
  // Handlers
  // const navHistory = useHistory();
  //   const handleEmailInput = (e) => {
  //     // e.persist();
  //     setUserEmail(e.target.value);
  //     console.log(userEmail);
  //   };
  // const handleForm = () => {
  //   // e.persist();
  //   if (userEmail === "" || userEmail.indexOf("@") === -1) {
  //     console.log(emailInvalidInputMessage);
  //     setEmailError(true);
  //     return;
  //   }
  //   localStorage.setItem("usersEmail", userEmail);
  //   navHistory.push("/#");
  // };
  // JSX
  return (
    <J.GridPageContainer>
      <J.GridBoxesContainer>
        <J.GridBoxVariation id="boxGrayScale">
          <J.GridBaseUl> 
            {/* start iteration */}
            {productsMockData.map((product) => (
              <J.GridBaseLi>
                <J.UlCardContainer>
                  <J.UlFormHeader>{product.cModel}</J.UlFormHeader>
                  <J.UlBoxFormSubHeader>{product.cMake}</J.UlBoxFormSubHeader>
                  <J.UlBoxTextArea>
                    <J.UlBoxText>{product.cYear}</J.UlBoxText>
                    <J.UlBoxText>{product.cVIN}</J.UlBoxText>
                  </J.UlBoxTextArea>
                  <J.imgBase src={product.cImg} />
                  <J.UlBoxMark>{product.id}</J.UlBoxMark>
                </J.UlCardContainer>
              </J.GridBaseLi>
            ))}
            {/* end iteration */}
          </J.GridBaseUl>
        </J.GridBoxVariation>
      </J.GridBoxesContainer>
    </J.GridPageContainer>
  );
}
