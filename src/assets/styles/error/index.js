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
//// Gama Academy | Hiring Coders | [HC] Módulo 
//
// ------------------------------------------------------------------------
//  src/assets/styles/error/index.js
// ------------------------------------------------------------------------
/** Imports */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/** Elements */
export const ErrorPageConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: block;
    align-items: center;
    justify-content: center;
`;
export const ErrorMessageText = styled.p`
    text-align: center;
    font-size: 1rem;
    font-family: sans-serif;
    color: #333;
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-family: sans-serif;
    color: #333;
`;
export const LinkToLast = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    padding: .5rem;
    text-decoration: none;
    font-weight: 400;
`;