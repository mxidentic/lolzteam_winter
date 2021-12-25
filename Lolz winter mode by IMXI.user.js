// ==UserScript==
// @name         Lolz winter mode by IMXI
// @namespace    https://github.com/mxidentic/lolzteam_winter/tree/main
// @version      0.1
// @description  Add some snow to your favorite forum!
// @author       IMXI
// @match        https://lolz.guru/*
// @icon         https://www.google.com/s2/favicons?domain=lolz.guru
// @grant        none
// ==/UserScript==

window.innerHeight = 3000
var style = document.querySelector('style')

style.type = "text/css";
style.innerHTML += `

.flake {
  background: #fff;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  top: -20px;
  animation: fall 120s linear forwards;
}

@keyframes fall{
  to {
    transform: TranslateY(555vh)
  }
}
`

setInterval(createSnowflake, 120)

function createSnowflake() {
    const snow_flake = document.createElement('span');
    snow_flake.classList.add('flake');
    snow_flake.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 15 + 's';
    snow_flake.style.opacity = Math.random();

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 10000)
}
