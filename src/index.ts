import DomObserver from "./modules/DomObserver.ts";


const body = document.getElementsByTagName('body')[0];
const stateButton = document.getElementById('stateButton');
const laodState = document.getElementById('loadState');

var observer = new DomObserver
observer.observe();

stateButton.onclick = () => {
  const span = document.createElement('span');
  span.textContent = 'Тест 123';
  body.appendChild(span);
};

laodState.onclick = () => {
  body.innerHTML = observer.loadState(3);
}

window.onload = function(){
  console.log(document.documentElement.innerHTML);
};