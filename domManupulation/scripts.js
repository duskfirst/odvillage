const container = document.querySelector('#container');

const para = document.createElement('p');
const _div = document.createElement('div');
const _h3 = document.createElement('h3');
const _divh1 = document.createElement('h1');
const _divp = document.createElement('p');
para.textContent = "Hey I'm red!";
_h3.textContent = "I'm a blue h3";
_divh1.textContent = "I'm in div";
_divp.textContent = "ME TOO!";
_div.appendChild(_divh1);
_div.appendChild(_divp);
container.appendChild(para);
container.appendChild(_h3);
container.appendChild(_div);
 