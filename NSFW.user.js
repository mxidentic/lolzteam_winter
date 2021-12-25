// ==UserScript==
// @name         Lolz NSFW mode by IMXI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add some snow to your favorite forum!
// @author       IMXI
// @match        https://lolz.guru/*
// @icon         https://www.google.com/s2/favicons?domain=lolz.guru
// @grant        none
// ==/UserScript==

var style = document.querySelector('style');

var loli = ['https://i.imgur.com/XSzjabD.png',
           'https://i.imgur.com/ycYuihx.png',
           'https://i.imgur.com/VXcOlcc.png',
           'https://i.imgur.com/VGeojKJ.png',
           'https://i.imgur.com/pwOOR46.png',
           'https://i.imgur.com/Otc47Bx.png',
           'https://i.imgur.com/wv5ur4k.png'];

style.type = "text/css";
style.innerHTML += `

.flake {
  background-size: cover;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -20px;
  animation: fall 120s linear forwards;
}

@keyframes fall{
  to {
    transform: TranslateY(555vh)
  }
}
`;

function choice(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

setInterval(createSnowflake, 100)

function createSnowflake() {
    const snow_flake = document.createElement('span');
    snow_flake.classList.add('flake');
    snow_flake.style.backgroundImage = `url('${choice(loli)}')`
    snow_flake.style.left = Math.random() * (window.innerWidth - 30) + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 15 + 's';
    snow_flake.style.opacity = Math.random();

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 10000)
}
