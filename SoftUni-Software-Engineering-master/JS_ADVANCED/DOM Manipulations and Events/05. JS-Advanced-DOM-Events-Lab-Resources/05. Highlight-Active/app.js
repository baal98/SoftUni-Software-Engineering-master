function focused() {
  let inputsElements = document.querySelectorAll("input");
  for (let field of inputsElements) {
    field.addEventListener("focus", onfocus);
    field.addEventListener("blur", onblur);
    }
    function onfocus(e) {
        let target = e.target;
        target.parentNode.classList.add("focused");
    }
    function onblur(e) {
        let target = e.target;
        target.parentNode.classList.remove("focused");
        e.textContent = "";
    };
}
