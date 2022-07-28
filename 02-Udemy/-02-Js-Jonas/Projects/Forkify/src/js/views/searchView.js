class SearchView {
  _parantElement = document.querySelector(".search");

  getQuery() {
    const query = this._parantElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parantElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this._parantElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
