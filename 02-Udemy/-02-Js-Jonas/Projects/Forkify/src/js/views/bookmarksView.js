import View from "./View.js";
import previewView from "./previewView.js";

class BookmarksView extends View {
  _parantElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No book marks yet. Find a nice recipe and bookmark it ;)";
  _Message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();
