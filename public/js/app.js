!function i(r,n,s){function l(t,e){if(!n[t]){if(!r[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(c)return c(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=n[t]={exports:{}},r[t][0].call(o.exports,function(e){return l(r[t][1][e]||e)},o,o.exports,i,r,n,s)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,o){"use strict";$(".about-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!0,cssEase:"linear",responsive:[{breakpoint:769,settings:{slidesToShow:1,variableWidth:!1}}]}),$(".reviews-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!0,cssEase:"linear",responsive:[{breakpoint:769,settings:{slidesToShow:1,variableWidth:!1}}]}),$(window).on("load resize",function(){$(window).width()<769?$(".projects-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,cssEase:"linear"}):$(".projects-list").slick("unslick")}),(new WOW).init();var i=document.querySelector(".mobile-menu"),r=document.querySelector(".mobile-btn"),n=document.querySelector(".header-nav"),s=document.querySelectorAll(".header-nav-item");i.addEventListener("click",function(e){n.classList.toggle("header-nav-mobile"),r.classList.toggle("mobile-btn-active"),document.body.classList.toggle("body-scroll")});for(var l=0;l<s.length;l++)s[l].addEventListener("click",function(e){n.classList.toggle("header-nav-mobile"),r.classList.toggle("mobile-btn-active"),document.body.classList.toggle("body-scroll")});var c=document.querySelectorAll('a[href^="#"]'),a=!0,d=!1,i=void 0;try{for(var u,v=c[Symbol.iterator]();!(a=(u=v.next()).done);a=!0)!function(){var t=u.value;t.addEventListener("click",function(e){e.preventDefault();e=t.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})})}()}catch(e){d=!0,i=e}finally{try{!a&&v.return&&v.return()}finally{if(d)throw i}}for(var f=document.querySelector(".popup-cookie"),b=document.querySelectorAll(".cookies-btn"),h=document.querySelector(".cookies-btns"),m=0;m<b.length;m++)b[m].addEventListener("mouseover",function(e){for(var t=0;t<h.children.length;t++)h.children[t].classList.remove("cookies-btn-active");this.classList.add("cookies-btn-active")}),b[m].addEventListener("click",function(e){f.style.display="none"})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
