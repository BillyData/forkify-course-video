import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfullt uploaded';

  _window = document.querySelector('.add-recipe-window');

  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  // the controller does not have to interfere cuz it only opens a modal window but the controller still need to import this to run the in the main script
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      // we have to pass in the form as the argument which is the this keyword and it would return us an object we cannot use but we can spread the object into an array
      const dataArray = [...new FormData(this)];
      // converting an array of entries to object
      const data = Object.fromEntries(dataArray);

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
