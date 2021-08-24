export const fileSelector = document.getElementById("formFile");

export function handleFileSelect(event) {
  const fileList = event.target.files;
  const reader = new FileReader();
  reader.onload = function (event) {
    const text = event.target.result;
    const lines = text.split(/[\r\n]+/g);
    handleLines(lines);
  };
  reader.readAsText(fileList[0]);
}

const handleLines = (lines) => {
  for (let i = 0; i < 100; i++) {
    if (typeOfLine(lines[i][0], lines[i][19], lines[i][77]) !== "invalid") {
      let app = { name: "", predecessors: [], sucessors: [] };
      // do {

      console.log(lines[i]);
      //  } while (lines[i][0] === "0");
    }
  }
};

const typeOfLine = (
  firstCharacter,
  statusAppCharacter,
  statusSuccessorCharacter
) => {
  let app = "";
  let sequence = "";

  if (firstCharacter === "0") {
    app = "App";
  }
  if (statusAppCharacter === "A" || statusAppCharacter === "P") {
    sequence = "Predecessor";
    return app + sequence;
  }
  if (statusSuccessorCharacter === "A" || statusSuccessorCharacter === "P") {
    sequence = "Sucessor";
    return app + sequence;
  }
  return "invalid";
};

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
