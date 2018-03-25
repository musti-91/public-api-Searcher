import ResultApi from "./components/ResultApi";
import Axios from "axios";

const resultHolder = document.getElementById("resultHolder");
const selectOption = document.getElementById("searchBy");
let input = document.getElementById("search");
let nr = 0;
document.querySelector("form").addEventListener("submit", e => {
  document.querySelector(".button").classList.add("is-loading");
  e.preventDefault();
  let url = `https://api.publicapis.org/entries?${selectOption.value}=${
    input.value
  }`;
  input.value = "";
  input.focus();
  // get(url, showResult); Old school
  Axios.get(url)
    .then(response => {
      if (response.data.count === 0) {
        showError();
      }
      response.data.entries.forEach(api => {
        nr++;
        document.querySelector("table").style.display = "block";
        const resultApi = new ResultApi(nr, api, resultHolder);
      });
    })
    .catch("error eccured");

  document.querySelector(".button").classList.remove("is-loading");
});

function showError() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="error">
            No Results
     </div>`
  );
  setTimeout(() => {
    document.querySelector(".error").style.display = "none";
  }, 750);
}
