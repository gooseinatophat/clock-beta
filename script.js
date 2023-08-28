function openInfo() {document.getElementById("iForm").classList.toggle('open');}

function openDescript(){document.getElementById("slot").classList.toggle('open');}
function openWork(){document.getElementById("workSlot").classList.toggle('open');}
function openFuel(){document.getElementById("fuelSlot").classList.toggle('open');}
function openBreak(){document.getElementById("breakSlot").classList.toggle('open');}
function openCommute(){document.getElementById("commuteSlot").classList.toggle('open');}
function openNap(){document.getElementById("napSlot").classList.toggle('open');}
function openSleep(){document.getElementById("sleepSlot").classList.toggle('open');}
function openOther(){document.getElementById("otherSlot").classList.toggle('open');}

function toggleMenu(){
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
  menuToggle.classList.toggle('open');

  if (menu.classList.contains('open'))
  {menuToggle.textContent = ''} 
  else {menuToggle.textContent = '';}
}

function displayer(){
  const wrk = document.querySelectorAll('.timesquare .barrier .line .work');
  const opn = document.querySelectorAll('.other.space');
  const fl = document.querySelectorAll('.fuel.space');
  const np = document.querySelectorAll('.nap.space');
  const cmm = document.querySelectorAll('.commute.space');
  const brk = document.querySelectorAll('.break.space');
  const slp = document.querySelectorAll('.night.space');

  wrk.forEach(wrks => { wrks.classList.toggle('open'); });
  opn.forEach(opns => { opns.classList.toggle('open'); });
  fl.forEach(fls => { fls.classList.toggle('open'); });
  np.forEach(nps => { nps.classList.toggle('open'); });
  cmm.forEach(cmms => { cmms.classList.toggle('open'); });
  brk.forEach(brks => { brks.classList.toggle('open'); });
  slp.forEach(slps => { slps.classList.toggle('open'); });
}

function something(){
  const bSlide = document.querySelector('.smth');
  const barrier = document.querySelector('.barrier'); 
  const timeSquare = document.querySelector('.timesquare');
  
  bSlide.classList.toggle('open');
  barrier.classList.toggle('open');
  timeSquare.classList.toggle('open');
 
  if(bSlide.classList.contains('open')){document.body.style.backgroundColor="#000000";}
  else{document.body.style.backgroundColor="#acacac";}
 
}

function morning(){
  const bSlide = document.querySelector('.morningbtn');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  { document.getElementById("breakfast").style.display="block";
    document.getElementById("exercise").style.display="block";
    document.getElementById("commute").style.display="block";
    document.getElementById("workOnAm").style.display="block";
    document.getElementById("breakAm").style.display="block";} 
  else {
    document.getElementById("breakfast").style.display="none";
    document.getElementById("commute").style.display="none";
    document.getElementById("workOnAm").style.display="none";
    document.getElementById("breakAm").style.display="none";
    document.getElementById("exercise").style.display="none";}
}

function fourHwd(){
  const bSlide = document.querySelector('.btn4hwd');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("lunch").style.display="block";
  document.getElementById("workOnPm").style.display="block";  
  document.getElementById("commuteFour").style.display="block";
  document.getElementById("sensoryRestFour").style.display="block";
  document.getElementById("journalA").style.display="block";
  document.getElementById("meditateA").style.display="block";
} 
  else {document.getElementById("lunch").style.display="none";
  document.getElementById("workOnPm").style.display="none";  
  document.getElementById("commuteFour").style.display="none";
  document.getElementById("sensoryRestFour").style.display="none";
  document.getElementById("journalA").style.display="none";
  document.getElementById("meditateA").style.display="none";}
}
function fiveHwd(){
  const bSlide = document.querySelector('.btn5hwd');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  { document.getElementById("lunch").style.display="block";
    document.getElementById("workOnPmFive").style.display="block";
    document.getElementById("breakPm").style.display="block";
    document.getElementById("commuteFive").style.display="block";
    document.getElementById("sensoryRestFive").style.display="block";
    document.getElementById("journalB").style.display="block";
    document.getElementById("meditateB").style.display="block";} 
  else {
    document.getElementById("lunch").style.display="none";
    document.getElementById("workOnPmFive").style.display="none";
    document.getElementById("breakPm").style.display="none";
    document.getElementById("commuteFive").style.display="none";
    document.getElementById("sensoryRestFive").style.display="none";
    document.getElementById("journalB").style.display="none";
    document.getElementById("meditateB").style.display="none";}
}
function sixHwd(){
  const bSlide = document.querySelector('.btn6hwd');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("lunch").style.display="block";
  document.getElementById("workOnPmSix").style.display="block";  
  document.getElementById("breakPm").style.display="block";
  document.getElementById("commuteSix").style.display="block";
  document.getElementById("sensoryRestSix").style.display="block";
  document.getElementById("journalC").style.display="block";
  document.getElementById("meditateC").style.display="block";} 
  else {
  document.getElementById("lunch").style.display="none";
  document.getElementById("workOnPmSix").style.display="none";  
  document.getElementById("breakPm").style.display="none";
  document.getElementById("commuteSix").style.display="none";
  document.getElementById("sensoryRestSix").style.display="none";
  document.getElementById("journalC").style.display="none";
  document.getElementById("meditateC").style.display="none";}
}

function evening(){
  const bSlide = document.querySelector('.eveningbtn');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  { document.getElementById("snack").style.display="block";  
  document.getElementById("nap").style.display="block";
  document.getElementById("lateDinner").style.display="block";} 
  else { document.getElementById("snack").style.display="none";  
  document.getElementById("nap").style.display="none";
  document.getElementById("lateDinner").style.display="none";}
}

function errandsA(){
  const bSlide = document.querySelector('.errandbtn4');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("errands4").style.display="block";
  document.getElementById("commuteE4").style.display="block";
  document.getElementById("sensoryRestFour").style.display="none";
  document.getElementById("journalA").style.display="none";
  document.getElementById("meditateA").style.display="none";}
  else {document.getElementById("errands4").style.display="none";
  document.getElementById("commuteE4").style.display="none";
  /* document.getElementById("sensoryRestFour").style.display="block";
  document.getElementById("journalA").style.display="block";
  document.getElementById("meditateA").style.display="block"; */}
}
function errandsB(){
  const bSlide = document.querySelector('.errandbtn5');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("errands5").style.display="block";
  document.getElementById("commuteE5").style.display="block";
  document.getElementById("sensoryRestFive").style.display="none";
  document.getElementById("journalB").style.display="none";
  document.getElementById("meditateB").style.display="none";}
  else {document.getElementById("errands5").style.display="none";
  document.getElementById("commuteE5").style.display="none";
  /* document.getElementById("sensoryRestFive").style.display="block";
  document.getElementById("journalB").style.display="block";
  document.getElementById("meditateB").style.display="block"; */}
}
function errandsC(){
  const bSlide = document.querySelector('.errandbtn6');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("errands6").style.display="block";
  document.getElementById("commuteE6").style.display="block";
  document.getElementById("sensoryRestSix").style.display="none";
  document.getElementById("journalC").style.display="none";
  document.getElementById("meditateC").style.display="none";}
  else {document.getElementById("errands6").style.display="none";
  document.getElementById("commuteE6").style.display="none";
 /*  document.getElementById("sensoryRestSix").style.display="block";
  document.getElementById("journalC").style.display="block";
  document.getElementById("meditateC").style.display="block"; */}
}
function waterATwo(){
  const bSlide = document.querySelector('.wa2');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  { document.getElementById("lakeOrRiver4").style.display="block";
  document.getElementById("commuteW").style.display="block";
  document.getElementById("sensoryRestFour").style.display="none";
  document.getElementById("journalA").style.display="none";
  document.getElementById("meditateA").style.display="none";} 
  else { document.getElementById("lakeOrRiver4").style.display="none";
  document.getElementById("commuteW").style.display="none";
 /*  document.getElementById("sensoryRestFour").style.display="block";
  document.getElementById("journalA").style.display="block";
  document.getElementById("meditateA").style.display="block"; */}
}
function waterAThree(){
  const bSlide = document.querySelector('.wa3');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  { document.getElementById("lakeOrRiver5").style.display="block";
  document.getElementById("commuteW").style.display="block";
  document.getElementById("sensoryRestFive").style.display="none";
  document.getElementById("journalB").style.display="none";
  document.getElementById("meditateB").style.display="none";} 
  else { document.getElementById("lakeOrRiver5").style.display="none";
  document.getElementById("commuteW").style.display="none";
  /* document.getElementById("sensoryRestFive").style.display="block";
  document.getElementById("journalB").style.display="block";
  document.getElementById("meditateB").style.display="block"; */}
}
function waterAFour(){
  const bSlide = document.querySelector('.wa4');
  bSlide.classList.toggle('open');

  if (bSlide.classList.contains('open'))
  {document.getElementById("lakeOrRiver6").style.display="block";
  document.getElementById("sensoryRestSix").style.display="none";
  document.getElementById("journalC").style.display="none";
  document.getElementById("meditateC").style.display="none";}
  else { document.getElementById("lakeOrRiver6").style.display="none";
/*   document.getElementById("sensoryRestSix").style.display="block";
  document.getElementById("journalC").style.display="block";
  document.getElementById("meditateC").style.display="block"; */}
}

let s= 0;
let min= 0;
let h=0;
let d= new Date();
let um= 27.5;let uh = um*4; let ut=um/15;

setInterval(
  function time () {
    d=new Date();
    s=d.getSeconds();
    min=d.getMinutes();
    h=d.getHours();
    um=27.5;
    uh=um*4;
    ut=um/15;
    document.getElementById("morning").style.width= min/15*um + uh*(h-6) +15+ "px";
    document.getElementById("noon").style.height=  min/15*um + uh*(h-12)  +15+ "px";    
    document.getElementById("eve").style.width=  min/15*um + uh*(h-18)  +15+ "px";
    document.getElementById("night").style.height=  min/15*um + uh*(h-24) +15+ "px";
    document.getElementById("seconds").innerHTML= d.getSeconds();
    document.getElementById("time").innerHTML= h + ":" + min;
    if (h > 11){document.getElementById("morning").style.width="690px";};
    if (h > 17){document.getElementById("noon").style.height="690px";};
    if (h > 23){document.getElementById("eve").style.width="690px";};
    if (h > 5){document.getElementById("night").style.height="690px";};
  },100
);