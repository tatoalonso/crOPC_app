import "./assets/css/normalize.css";
<<<<<<< HEAD
<<<<<<< HEAD
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { checkDB, db } from "./dbLocalStorage";
import { fileSelector, handleFileSelect } from "./file";
import { getUsers } from "./users";

//db.default({ apps: [] });

// console.log(db);

// db.set("DESCARGAINFORMPF.Predecessors", [
//   { name: "BATCHDIARIA", jobApli: "DUMY_001 INDEINPF", job: "CPU_050  PF1000" },
//   {
//     name: "BATCHULTIMDIAPF",
//     jobApli: "",
//     job: "CPU_050  PF1000",
//   },
// ]);

// db.set("DESCARGAINFORMPF.Sucessors", [
//   {
//     name: "CARGAINFORMACION",
//     jobApli: "CPUF_020 SQPF1930",
//     job: "CPUF_025 SQPF1932",
//     status: "P",
//   },
//   {
//     name: "SICARGAATRIBUTOS",
//     jobApli: "",
//     job: "DUMY_005 SQPF1932",
//     status: "P",
//   },
//   {
//     name: "SICARGAVARIOS",
//     jobApli: "CPUF_040 SQPF1557",
//     job: "DUMY_150 SQPF1558",
//     status: "P",
//   },
// ]);

// // eslint-disable-next-line no-console
// console.log(db.get("DESCARGAINFORMPF").value());
// // eslint-disable-next-line no-console
// console.log(db.get("DESCARGAINFORMPF.Predecessors").value());

=======

import { getUsers } from "./users";

>>>>>>> 09686cd165e8673996c161e214bbd944609c2cb0
=======

import { getUsers } from "./users";

>>>>>>> 09686cd165e8673996c161e214bbd944609c2cb0
export async function printUsers() {
  const users = await getUsers();
  const element = document.createElement("div");
  element.innerHTML = `<h2>Current users</h2>
    ${users.map((user) => `<div>${user.name}</div>`).join("")}`;
  return element;
}

<<<<<<< HEAD
<<<<<<< HEAD
fileSelector.addEventListener("change", handleFileSelect);

printUsers().then((element) => document.body.appendChild(element));

if (checkDB()) {
  const searcher = document.getElementsByClassName("searcher");
  searcher[0].removeAttribute("hidden");

  const fileDragger = document.getElementsByClassName("fileDragger");
  fileDragger[0].setAttribute("hidden", "");
}
=======
printUsers().then((element) => document.body.appendChild(element));
>>>>>>> 09686cd165e8673996c161e214bbd944609c2cb0
=======
printUsers().then((element) => document.body.appendChild(element));
>>>>>>> 09686cd165e8673996c161e214bbd944609c2cb0
