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
/** JSONBIN.io setup
 *
 * REQUEST HEADERS
 * Below are the list of Accepted Request Headers if you are trying to Read a JSON record.
 *
 * X-Master-Key	<API_KEY>
 *  https://api.jsonbin.io/b/60fd78a499892a4ae9aa322c
 */
//
//
// Secret Key / X-Master-Key
// $2b$10$1qVor64vNTARaa1PoplS7eYW0Jzn34902p./o1wrMus8Z.Kl8wrCG
//
//
import { useState, useHistory } from "react";
import axios from "axios";
/** Vars (env) */
const JSONBINsk = process.env.JSONBINMK;
const BINid = process.env.CARS;
/**
 * CarsFetch()
 * 
 * Fecth JSONBIN.io Bin and loads products data in localstorage
 * 
 * Depedencies: useState; axios.
 */
export const CarsFetch = () => {
//   const ErrorMessage = "Sorry! No such Dev on github.com. Please, try again...";
//   const navHistory = useHistory();
  const [cars, setCars] = useState([]);
  const [errorState, setErrorState] = useState(false);
  axios
    .get("https://api.jsonbin.io/b/60fd78a499892a4ae9aa322c", {
      headers: {
        "secret-key": "$2b$10$1qVor64vNTARaa1PoplS7eYW0Jzn34902p./o1wrMus8Z.Kl8wrCG",
      },
    })
    .then((response) => {
      const carsInJsonBin = response.data;
      if (carsInJsonBin != null) {
          setCars({cars: carsInJsonBin});
        // const carsFound = [];
        // carsInJsonBin.map((car) => {
        //   carsFound.push(car.model);
        // });
        // localStorage.setItem("cars", JSON.stringify(carsFound));
        localStorage.setItem("cars", JSON.stringify(cars));
        // navHistory.push("/getRepos");
      }
    })
    .catch((raisedError) => {
        console.log(raisedError);
      setErrorState(true);
    });
};

// export const CarsFetch2 = async () => {
//   const response = await axios.get(localUrl, {
//     headers: {
//       "secret-key": `${JSONBINsk}`,
//     },
//   });
//   console.log(response);
// };

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState === XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };
// // req.open("GET", "https://api.jsonbin.io/v3/b/<BIN_ID>/<BIN_VERSION | latest>", true);
// req.open("GET", ` https://api.jsonbin.io/${BINid}`, true);
// req.setRequestHeader("X-Master-Key", `${JSONBINsk}`);
// req.send();
