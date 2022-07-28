import View from "./View.js";
import previewView from "./previewView.js";

class ResaultView extends View {
  _parantElement = document.querySelector(".results");
  _errorMessage = "No recipes found to your query! Please try again";
  _Message = "";

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join("");
  }
}

export default new ResaultView();
