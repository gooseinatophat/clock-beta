function displayer(){
  const wrk = document.querySelectorAll('.work');
  const opn = document.querySelectorAll('.empty');
  const fl = document.querySelectorAll('.fuel');
  const np = document.querySelectorAll('.nap');
  const cmm = document.querySelectorAll('.commute');
  const brk = document.querySelectorAll('.break');
  const slp = document.querySelectorAll('.night');

  wrk.forEach(wrks => { wrks.classList.toggle('open'); });
  opn.forEach(opns => { opns.classList.toggle('open'); });
  fl.forEach(fls => { fls.classList.toggle('open'); });
  np.forEach(nps => { nps.classList.toggle('open'); });
  cmm.forEach(cmms => { cmms.classList.toggle('open'); });
  brk.forEach(brks => { brks.classList.toggle('open'); });
  slp.forEach(slps => { slps.classList.toggle('open'); });
}

function openInfo() {
  
}
function options(){
  const op = document.querySelector('.options');
  const wrk= document.querySelector(".selewrk");

  op.classList.toggle('open');
  wrk.classList.toggle("open");

 
  if(wrk.classList.contains('open')){document.s1.style.backgroundColor="#000000";}
  else{document.body.style.backgroundColor="#cecece";}
  
}
function nightView(){
  const bSlide = document.querySelector('.moonsun');
  const barrier = document.querySelector('.center'); 
  const timeSquare = document.querySelector('.frame');
  
  bSlide.classList.toggle('open');
  barrier.classList.toggle('open');
  timeSquare.classList.toggle('open');
 
  if(bSlide.classList.contains('open')){document.body.style.backgroundColor="#000000";}
  else{document.body.style.backgroundColor="#cecece";}
 
}
function timeView(){
  const seconds = document.querySelector('.seconds');
  const time = document.querySelector('.time'); 
  const tbtn = document.querySelector(".timebtn");
  
  seconds.classList.toggle('open');
  time.classList.toggle('open');
  tbtn.classList.toggle('open');
 
  if(tbtn.classList.contains('open')){
    time.style.display="flex";
    seconds.style.display="flex";}
  else{
    time.style.display="none";
    seconds.style.display="none";}

}

let s= 0;
let min= 0;
let h=0;
let d= new Date();
let u= 3.5; let u1h = u*4; let u1min = u/15; 

setInterval(
  function time () {
    d=new Date();
    s=d.getSeconds();
    min=d.getMinutes();
    h=d.getHours();
    u=3.5;
    u1h=u*4;
    u1min=u/15;

    document.querySelector(".seconds").innerHTML= d.getSeconds();
    document.querySelector(".time").innerHTML= h + ":" + min;

    document.querySelector(".topt").style.width= u1h*(h-6) + min*u1min +"vw";
    document.querySelector(".rightt").style.height= u1h*(h-12) + min*u1min + 3 +"vw";
    document.querySelector(".bottomt").style.width= u1h*(h-18) + min*u1min +"vw";
    document.querySelector(".leftt").style.height= u1h*(h) + min*u1min + 3 +"vw";


    if (h>=12){document.querySelector(".topt").style.width= 100 +"%";};
    if (h>=18){document.querySelector(".rightt").style.height= 100 +"%";};
    if (h>=24){document.querySelector(".bottomtt").style.width= 100 +"%";};
    if (h>=6){document.querySelector(".leftt").style.height= 100 +"%";};

  },100
);