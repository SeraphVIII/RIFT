import { generateDataOne } from "./PathController.js";

export default class FetchController {
  async getData(generatedData = false) {
    if (!generatedData) {
      const url =
        "https://4053-2a0c-5bc0-40-2e31-f8b2-a379-f82f-e798.ngrok-free.app/api/data";
      const response = await fetch(url, {
        mode: "cors",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      const data = await response.json();

      return data;
    } else {
      return new Promise((resolve, reject) => {
        const nextDataPoint = getNextDataPoint();
        console.log(nextDataPoint);
        resolve(nextDataPoint);
      });
    }
  }
}

const dataOne = generateDataOne();
console.log("dataONe");
console.log(dataOne);

function getNextDataPoint() {
  if (dataOne.length == 1) return dataOne[0];
  const data = dataOne.shift();
  console.log(dataOne.length);
  return data;
}
