function validate() {
  let inputElement = document.querySelector("#email");
  let regexValidation = new RegExp(/[a-z]+@[a-z]+\.[a-z]+/, "g");
  inputElement.addEventListener("change", validate);

  function validate({ target }) {
    if (regexValidation.test(target.value)) {
      target.classList.remove("error");
    } else {
      target.classList.add("error");
    }
  }
}
