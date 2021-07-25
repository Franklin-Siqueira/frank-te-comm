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
//  src/views/pages/error/index.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React, { Component } from "react";
import { Fragment } from "react";
/** Imports (App) */
import * as ES from "./../../assets/styles/error";
// ...
//
class Error extends Component {
  //
  render() {
    return (
      <Fragment>
        <ES.ErrorPageConteiner>
          <ES.Title>Sorry! Page not found...</ES.Title>
          <ES.ErrorMessageText>
            A página não foi encontrada em nossos servidores.
          </ES.ErrorMessageText>
          <ES.LinkToLast to="/">Voltar...</ES.LinkToLast>
        </ES.ErrorPageConteiner>
      </Fragment>
    );
    //     return (
    //       <Fragment>
    //         <div>
    //           <IntroText
    //             titleMessage=" Gama Academy | Hiring Coders | [HC] Módulo 07 | React"
    //             messageString=" Trabalhando com o React"
    //           />
    //           {/* <!-- <p>Holiday id = {this.props.match.params.id}</p> --> */}
    //         </div>
    //         <div>
    //           <ButtonFs label="Click Here"></ButtonFs>
    //         </div>
    //       </Fragment>
    //     );
  }
}

export default Error;
