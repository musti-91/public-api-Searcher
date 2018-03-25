export default class ResultApi {
  constructor(apiCount, api, holder) {
    this.api = api;
    this.apiCount = apiCount;
    this.holder = holder;
    this.html = "";
    this.nr = 0;
    this.init();
  }
  init() {
    let el = `<tr class="tr">
          <td class="td">${this.apiCount}</td>
          <td class="td">${this.api.API}</td>
          <td>${this.api.Auth}</td>
          <td>${this.api.Category}</td>
          <td>${this.api.Cors}</td>
          <td>${this.api.Description}</td>
          <td>${this.api.HTTPS}</td>
          <td><a href="${this.api.Link}">${this.api.Link}</a></td>
          </tr>`;
    document.querySelector("tbody").insertAdjacentHTML("beforeend", el);
  }
}
