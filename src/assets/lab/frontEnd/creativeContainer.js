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
//  src/assets/lab/frontend/indexLandingPage.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React, { Fragment, useState } from "react";
/** Vars */

export default function CreativeContainers() {
  const pageOneHead = "SMOOTH SCROLL";
  const pageOneSubH = "Very Ease...";
  //
  const fullPage  = ({
      id: 'pageContain',
      slideTime: 8000,
      effect: {
          transform: {
              transalete: 'X',
              scale: [.1, 1],
              rotatate: [-90, 0]
          },
          opacity: [0, 1]
      },
      mode: 'wheel, touch, nav:navbar',
      easing: 'ease',
  });
  //
  return (
    <Fragment>
        {/* pageContain */}
      <div id="master-container">
            {/* page page1 current */}
          <div className="drawer">
              {/* hero */}
            <div className="item"> 
                {/* heading */}
              <span className="heading">{pageOneHead}</span>
              {/* reading */}
              <span className="subheading">{pageOneSubH}</span>
            </div>
          </div>
      </div>
      {/* navbar */}
      <ul>
          <li>ONE</li>
          <li>TWO</li>
          <li>THREE</li>
          <li>FOUR</li>
      </ul>
    </Fragment>
  );
}
