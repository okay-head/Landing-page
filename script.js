'use strict';

const root = document.getElementsByTagName('html')[0];
const page1 = document.querySelector('.page1');
const lighter = document.querySelector('#lighter');
const faster = document.querySelector('#faster');
const better = document.querySelector('#better');

const p2section = document.querySelector('.page2 section');
const p2img = document.querySelector('.page2 img');
const p3section = document.querySelector('.page3 section');
const p3img = document.querySelector('.page3 img');
const p4section = document.querySelector('.page4 section');
const p4img = document.querySelector('.page4 img');
const featureSection = document.querySelector('.features');
const reviewBoxes = document.querySelector('.box');
const buyText = document.querySelector('.buy .text');
const buyRight = document.querySelector('.right');
const form = document.getElementsByTagName('form')[0];
const whiteUnderline = document.querySelector('.underline');
const reviewH1 = document.querySelector('.page-review h1 span') ;
const contactH1 = document.querySelector('.contact h1 span');


// initialisations

lighter.classList.add('hide2');
faster.classList.add('hide2');
better.classList.add('hide2');

p2img.classList.add('hide');
p2section.classList.add('hide');
p3img.classList.add('hide');
p3section.classList.add('hide');
p4img.classList.add('hide');
p4section.classList.add('hide');

featureSection.classList.add('opacity');
reviewBoxes.classList.add('hide');
buyText.classList.add('hide2');
buyRight.classList.add('hide');

form.classList.add('hide');

function classMgmt(element,rClass,aClass) {
   element.classList.remove(rClass);
   element.classList.add(aClass);
}

window.setTimeout(function () {
   whiteUnderline.classList.add('width-in');
},600)

window.setTimeout(function () {
   classMgmt(lighter,'hide2','fade-right');
},900);
window.setTimeout(function () {
   classMgmt(faster,'hide2','fade-right');
},1900);
window.setTimeout(function () {
   classMgmt(better,'hide2','fade-right');
},2900);

window.onscroll = function bonk() {
   if (root.scrollTop>400) {
      classMgmt(p2img,'hide','fade-up');
      classMgmt(p2section,'hide','fade-up');
   }
   
   if(root.scrollTop>850){
      classMgmt(p3img,'hide','fade-up');
      classMgmt(p3section,'hide','fade-up');
   }
   if(root.scrollTop>1358){
      classMgmt(p4img,'hide','fade-up');
      classMgmt(p4section,'hide','fade-up');
   }
   if (root.scrollTop>1765) {
      classMgmt(featureSection,'opacity','opacity-in');
   }
   if (root.scrollTop>2330) {
      classMgmt(reviewBoxes,'hide','fade-up');
      reviewH1.classList.add('width-in2');
   }
   if (root.scrollTop>3140) {
      classMgmt(buyText,'hide2','fade-right');
      classMgmt(buyRight,'hide','fade-up');
   }
   if (root.scrollTop>3885) {
      classMgmt(form,'hide','fade-up');
      contactH1.classList.add('width-in2');
   }
}

