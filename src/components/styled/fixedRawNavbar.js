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
//  src/components/styled/fixedRawNavbar.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import styled from "styled-components";
/** Exports */
export const NavBarUl = styled.ul`
    z-index: 3;
    position: absolute;
    bottom: 60%;
    right: 3%;
    // background-color: yellow:
    // cursor: pointer;
    
    &:active{
        background: wheat;
        color: blueviolet;
    }
`;
export const NavBarLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    cursor: pointer;
    transition: all 0.7s ease;
    color: red;
    /* background-color: rgb(232, 194, 194); */
    background: rgb(233,214,210);
    background: linear-gradient(90deg, rgba(233,214,210,0.3223900955714537) 1%, rgba(184,157,110,1) 42%, rgba(247,130,109,1) 100%);
    /* background: rgb(211,210,233);
    background: linear-gradient(90deg, rgba(211,210,233,0.3223900955714537) 9%, rgba(110,110,184,1) 48%, rgba(115,109,247,1) 100%); */
    // line-height: 40px;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 800;
    // padding: 4px;
    margin-bottom: 2px;
    border-radius: 3;
    width: 48px;
    height: 40px;
    transition: all 300ms ease-in-out;

    a{
        text-decoration: none;
    }

    &:hover{
        transform: scale(1.2);
        background-color: blue;
        color: yellow;
    }
`;
