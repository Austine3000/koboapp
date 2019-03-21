import * as types from "./actionTypes";

const data = {
  labels: [
    "MAR 2018",
    "APR 2018",
    "MAY 2018",
    "JUN 2018",
    "JUL 2018",
    "AUG 2018"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(238, 168, 38)",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [667, 2059, 800, 1081, 2300, 1755]
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(49, 49, 155)",
      fillColor: "rgb(64, 64, 130)",
      strokeColor: "rgb(64, 64, 130)",
      highlightFill: "rgb(64, 64, 130)",
      highlightStroke: "rgb(64, 64, 130)",
      data: [2008, 1408, 1440, 1945, 1860, 2227]
    }
  ]
};

export function getAllGraphContent() {
  return { type: types.GET_ALL_GRAPH_CONTENT, data };
}
