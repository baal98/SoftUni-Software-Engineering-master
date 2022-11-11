function attachGradientEvents() {
  const gradientElement = document.querySelector("#gradient");
  let resultElement = document.querySelector("#result");
  gradientElement.addEventListener("mousemove", showPercentage, false);
  function showPercentage(e) {
    const box = e.target;
    resultElement.textContent = Math.floor((e.offsetX / box.clientWidth) * 100) + "%";
  }
}