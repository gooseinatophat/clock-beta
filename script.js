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

function nightView(){
  const bSlide = document.querySelector('.moonsun');
  const barrier = document.querySelector('.center'); 
  const timeSquare = document.querySelector('.frame');
  
  bSlide.classList.toggle('open');
  barrier.classList.toggle('open');
  timeSquare.classList.toggle('open');
 
  if(bSlide.classList.contains('open')){document.body.style.backgroundColor="#000000";}
  else{document.body.style.backgroundColor="#acacac";}
 
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

    document.getElementById("seconds").innerHTML= d.getSeconds();
    document.getElementById("time").innerHTML= h + ":" + min;

    document.querySelector(".topt").style.width= u1h*(h-6) + min*u1min +"vw";
    document.querySelector(".rightt").style.height= u1h*(h-12) + min*u1min + 3.5 +"vw";
    document.querySelector(".bottomt").style.width= u1h*(h-18) + min*u1min +"vw";
    document.querySelector(".leftt").style.height= u1h*(h) + min*u1min + 3.5 +"vw";


    if (h>=12){document.querySelector(".topt").style.width= 100 +"%";};
    if (h>=18){document.querySelector(".rightt").style.height= 100 +"%";};
    if (h>=24){document.querySelector(".bottomtt").style.width= 100 +"%";};
    if (h>=6){document.querySelector(".leftt").style.height= 100 +"%";};

  },100
);