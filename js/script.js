//Matthew Abramson
//Record Time sound board JS
const guitarOne = document.querySelector('#guitarIconOne');
const guitarTwo = document.querySelector('#guitarIconTwo');
const guitarThree = document.querySelector('#guitarIconThree');
const synthOne = document.querySelector('#synthIconOne');
const synthTwo = document.querySelector('#synthIconTwo');
const woo = document.querySelector('#wooIcon');
const drum = document.querySelector('#drumIcon');
const stop = document.querySelector('#drumStop');



drum.onclick = () => {
  document.getElementById(('drum')).play();
};
stop.onclick = () => {
  document.getElementById(('drum')).pause();
};
guitarOne.onclick = () => {
  document.getElementById(('guitarOne')).currentTime = 0;
  document.getElementById(('guitarOne')).play();
};
guitarTwo.onclick = () => {
  document.getElementById(('guitarTwo')).currentTime = 0;
  document.getElementById(('guitarTwo')).play();
};
guitarThree.onclick = () => {
  document.getElementById(('guitarThree')).currentTime = 0;
  document.getElementById(('guitarThree')).play();
}
synthOne.onclick = () => {
  document.getElementById(('synthOne')).currentTime = 0;
  document.getElementById(('synthOne')).play();
};
synthTwo.onclick = () => {
  document.getElementById(('synthTwo')).currentTime = 0;
  document.getElementById(('synthTwo')).play();
};
woo.onclick = () => {
  document.getElementById(('woo')).currentTime = 0;
  document.getElementById(('woo')).play();
};
//April 2020
