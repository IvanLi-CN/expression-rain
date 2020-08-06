window.addEventListener('load', onLoad, {passive: false});
function onLoad() {
  const mainElem = document.querySelector("main");
  for (let i = 0; i < 20; i++) {
    createExpression(Math.random() * 7 + i * 5, Math.random() * 2500);
    
  }

  function createExpression(posX, delay) {
    const elem = document.createElement("em");
    elem.classList.add("expression");
    this.addEventListener("animationend", onAnimationEnd, { passive: true });
    elem.style.left = posX + 'vw';
    elem.style.animationDelay = delay + 'ms';
    mainElem.appendChild(elem);
  }

  function onAnimationEnd() {
    this.removeEventListener('animationend', onAnimationEnd);
    mainElem.removeChild(this);
  }
}