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
import React, { useEffect, useState, forwardRef } from "react";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
/** Imports (app) */
import usersMockData from "./../mockdata/IdFirstNameLastNameEmailIpAddress.json";
/** Vars */

/** Funciton */
export default function LoadLocStoreUsersData() {
  const { usersData, setUsersData } = useState([]);
  // axios mock data instance
  const userMockDB = new AxiosMockAdapter(axios, { delayResponse: 0 });
  userMockDB.onGet("/api/users").reply(200, { users: usersMockData });
  //
  axios.get("/api/users").then((res) => {
    const usersDB = res.data;
    // const usersDataFromAxios = [];
    // usersDB.map((user, key) => {
    //   usersDataFromAxios.push(user.id);
    // });
    // setUsersData(usersDataFromAxios);
    setUsersData(JSON.stringify(usersDB));
    console.log(usersData);
    // localStorage.setItem("usersDataLC", JSON.stringify(usersData));
    localStorage.setItem("usersDataLC", JSON.stringify(usersData));
  });
}
