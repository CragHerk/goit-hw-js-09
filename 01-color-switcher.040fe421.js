!function(){var t;document.querySelector("[data-start]").addEventListener("click",(function(){var e=document.querySelector("body");t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=t}),1e3),document.querySelector("[data-start]").disabled=!0})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t),document.querySelector("[data-start]").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.040fe421.js.map