let role = document.querySelectorAll('[role]')
let headr = document.querySelector('header')
let  prgCx =document.querySelector(`.xo-title-887989 .points-photo .user-x svg`)
let  prgCo =document.querySelector(`.xo-title-887989 .points-photo .user-o svg`)
, sideTask = document.querySelectorAll('[sideTasks]')
,  titleAtt = document.querySelectorAll('[etitle]')
,  photoPtoN1 = document.querySelector('.xo-title-887989 .points-photo .photo.user-x')
,  photoPtoN2 = document.querySelector('.xo-title-887989 .points-photo .photo.user-o')
,  userN1 = document.querySelector('.xo-title-887989 .user.x-user #user-name ')
,  userN2 = document.querySelector('.xo-title-887989 .user.o-user #user-name')
, allPhotoN =[photoPtoN1,photoPtoN2]
,cdk = document.querySelector('.cdk-overlay-container2')
,roundOver
let randP = Math.floor(Math.random() * 2);
let randomForChsPoPrevers 
let formBtn = document.querySelector('.first-page .main-container .x-o--icons--buttons .new-game-buttons button')
,allsquars = [
document.querySelectorAll('.squar-887989.h1'),
document.querySelectorAll('.squar-887989.h2'),
document.querySelectorAll('.squar-887989.h3'),
document.querySelectorAll('.squar-887989.v1'),
document.querySelectorAll('.squar-887989.v2'),
document.querySelectorAll('.squar-887989.v3'),
document.querySelectorAll('.squar-887989.d1'),
document.querySelectorAll('.squar-887989.d2'),
]
,allcorners = [
  document.querySelectorAll('.squar-887989.cov'),
  document.querySelectorAll('.squar-887989.coh')
]
let media = window.matchMedia("(max-width: 800px)")
let mood = '', 
  g = 'c'
, h = true
, c
, x =  '<div class="x"></div>'/*'<i class="fa-solid fa-x x-child"></i>'*/
, o = `<div class="o"><svg width="100" height="100"><circle cx="50" cy="50" r="26" fill="transparent"></circle></svg></div>`//'<i class="fa-solid fa-o o-child"></i>' 
, xI =  '<i class="fa-solid fa-x x-child"></i>'
, oI = '<i class="fa-solid fa-o o-child"></i>' 
, turn ='x'
, title = document.querySelector('#xo-title--xo')
, xTitle = document.getElementById('title-x')
, oTitle = document.getElementById('title-o')
, squars = []
, drawCount = 0
,targetPoint
,pH,pCp
,players = [pH,pCp]
,timeoutPlay = 800
,timeoutPlayStart = 500
let P = [[1,2,3],[2,5,8],[4,5,6],[3,6,9],[7,8,9],[1,4,7],[7,4,1],[5,1,9],[5,7,3],[3,5,7],[1,5,9]/*,[3,2,1],[8,5,2],[6,5,4],[7,4,1],[9,8,7],[9,6,3],[7,5,3],[9,5,1]*/]
let P1 = [[1,2,3],[3,6,9],[7,8,9],[1,4,7],[7,4,1],[5,1,9],[5,7,3],[3,5,7],[1,5,9]]
,historyN = 'history'
,history 
,his = {}
,human
,robot
let xPoints = document.getElementById('x-points')
let oPoints = document.getElementById('o-points')
let box = document.querySelectorAll('.box-content')
let sfx = {
  tapx:new Howl({src: ["./audio/x.wav"]}),
  tapo:new Howl({src: ["./audio/o.wav"]}),
  winAni:new Howl({src: ["./audio/o.wav"],volume:.6,onplay: ()=>{gasLooper = setTimeout(()=>{sfx.winAni.play();setTimeout(() => { sfx.winAni.stop(); }, 730); },350); },onstop: ()=>{ clearTimeout(gasLooper);}}),
  smallwin:new Howl({src: ["./audio/small-win.wav"],volume:1.2}),
  lose:new Howl({src: ["./audio/level-lose.wav"],volume:1}),
  winner:new Howl({src: ["./audio/winner.wav"]})
}
let voll =document.querySelector('.sittings-gear')
function localClear(i1,i2,i3,i4,i5) {
  let myItem = [i1, i2, i3,i4, i5]
  let element0 = localStorage.getItem(myItem[0]);
  let element1 = localStorage.getItem(myItem[1]);
  let element2 = localStorage.getItem(myItem[2]);
  let element3 = localStorage.getItem(myItem[3]);
  let element4 = localStorage.getItem(myItem[4]);
  localStorage.clear();
  if (myItem[0] != undefined) {localStorage.setItem(myItem[0], element0); } 
  if (myItem[1] != undefined) {localStorage.setItem(myItem[1], element1); } 
  if (myItem[2] != undefined) {localStorage.setItem(myItem[2], element2); } 
  if (myItem[3] != undefined) {localStorage.setItem(myItem[3], element3); } 
  if (myItem[4] != undefined) {localStorage.setItem(myItem[4], element4); } 

  }

  if( localStorage.history !='null' &&localStorage.history !=undefined){
    history = JSON.parse(localStorage.history);
  }else{
   history = [];
  }

 