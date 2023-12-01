function displayer() {
  const wrk = document.querySelectorAll(".work");
  const opn = document.querySelectorAll(".empty");
  const fl = document.querySelectorAll(".fuel");
  const np = document.querySelectorAll(".nap");
  const cmm = document.querySelectorAll(".commute");
  const brk = document.querySelectorAll(".break");
  const slp = document.querySelectorAll(".night");
  const tsk = document.querySelectorAll(".task");
  const vnt = document.querySelectorAll(".event");
  const tick = document.querySelectorAll(".tick");
  const slo = document.querySelectorAll(".slote");

  wrk.forEach((wrks) => {wrks.classList.toggle("open"); });
  opn.forEach((opns) => {opns.classList.toggle("open");});
  fl.forEach((fls) => {fls.classList.toggle("open");});
  np.forEach((nps) => {nps.classList.toggle("open"); });
  cmm.forEach((cmms) => {cmms.classList.toggle("open");});
  brk.forEach((brks) => {brks.classList.toggle("open");});
  slp.forEach((slps) => {slps.classList.toggle("open");});
  tsk.forEach((tsks) => {tsks.classList.toggle("open");});
  vnt.forEach((vnts) => {vnts.classList.toggle("open");});
  tick.forEach((ticks) => {ticks.classList.toggle("open");});
  slo.forEach((slos) => {slos.classList.toggle("open");});

  document.querySelector(".left").classList.toggle("open");
  document.querySelector(".right").classList.toggle("open");
  document.querySelector(".top").classList.toggle("open");
  document.querySelector(".bottom").classList.toggle("open");

  document.querySelector(".sider-l").classList.toggle("open");
  document.querySelector(".sider-r").classList.toggle("open");
  document.querySelector(".tap-indicator").classList.toggle("open");

  if (document.querySelector(".sider-l").classList.contains("open")) {
    document.querySelector(".frame").style.scale=("50%")
    document.querySelector(".frame-overlord").style.scale=("100%")

  } else {
    document.querySelector(".frame").style.scale=("80%")
    document.querySelector(".frame-overlord").style.scale=("130%")

  }
}

let chosen = (classChangeTo) => {
  let slot = document.querySelectorAll(".slot");

  slot.forEach((slots) => {
    slots.addEventListener("click", function () {
      let slotId = slots.id;
      slots.className = classChangeTo;
      setCookie('slot_' + slotId, classChangeTo, 30);
    });
  });
};
let wrk = document.querySelector(".selewrk");
wrk.addEventListener("click", function () {
  chosen("slot work");
});
let fuel = document.querySelector(".selefl");
fuel.addEventListener("click", function () {
  chosen("slot fuel");
});
let nap = document.querySelector(".selenp");
nap.addEventListener("click", function () {
  chosen("slot nap");
});
let night = document.querySelector(".selen");
night.addEventListener("click", function () {
  chosen("slot night");
});
let empty = document.querySelector(".selempt");
empty.addEventListener("click", function () {
  chosen("slot empty");
});
let breaks = document.querySelector(".selebrk");
breaks.addEventListener("click", function () {
  chosen("slot break");
});
let commute = document.querySelector(".selecm");
commute.addEventListener("click", function () {
  chosen("slot commute");
});
let task = document.querySelector(".seletsk");
task.addEventListener("click", function () {
  chosen("slot task");
});
let evnt = document.querySelector(".selevnt");
evnt.addEventListener("click", function () {
  chosen("slot event");
});

function applySavedSettings() {
  // Iterate through slots
  let slot = document.querySelectorAll(".slot");
  slot.forEach((slots) => {
    // Get the slotId for each slot
    let slotId = slots.id;

    // Check if there is a cookie for the last class change for this slot
    var lastClassChange = getCookie('slot_' + slotId);

    if (lastClassChange) {
      // Apply the last class change to this specific slot
      slots.className = lastClassChange;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applySavedSettings();
});




function nightView() {
  const bSlide = document.querySelector(".moonsun");

  bSlide.classList.toggle("open");

  if (bSlide.classList.contains("open")) {
    document.body.style.backgroundColor = "#000000";
    document.querySelector(".leftt").style.backgroundColor="#fff"
    document.querySelector(".rightt").style.backgroundColor="#fff"
    document.querySelector(".bottomt").style.backgroundColor="#fff"
    document.querySelector(".topt").style.backgroundColor="#fff"

  } else {
    document.body.style.backgroundColor = "#cecece";
    document.querySelector(".leftt").style.backgroundColor="#000000"
    document.querySelector(".rightt").style.backgroundColor="#000000"
    document.querySelector(".bottomt").style.backgroundColor="#000000"
    document.querySelector(".topt").style.backgroundColor="#000000"
  }
}
function timeView() {
  const seconds = document.querySelector(".seconds");
  const time = document.querySelector(".time");
  const tbtn = document.querySelector(".timebtn");

  seconds.classList.toggle("open");
  time.classList.toggle("open");
  tbtn.classList.toggle("open");

  if (tbtn.classList.contains("open")) {
    time.style.display = "flex";
    seconds.style.display = "flex";
  } else {
    time.style.display = "none";
    seconds.style.display = "none";
  }
}

function fullView() {
  let slo = document.querySelectorAll(".slote");
  slo.forEach((slos) => {slos.classList.toggle("open");});  
}

let slotes = new Array(288).fill({
    element: null,
    startHour: null,
    startMinute: null,
    endMinute:null,
  });

setInterval(function updateSlotes() {
  for(let i = 0; i < 288; i++){
 
    slotes[i].element = document.getElementById(`slote-${i}`);
    let startHour = Math.floor(i / 12);
    let startMinute = (i % 12) * 5;
    let endMinute = startMinute + 5; 
    
    let now = new Date ();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
        
    if(startHour < currentHour || currentMinute >= endMinute){
        slotes[i].element.style.display = "block";
        slotes[i].element.style.animation = "tick 0s";
      };
    if(currentHour === startHour && currentMinute < endMinute && currentMinute >= startMinute){
        slotes[i].element.style.display = "block";
        slotes[i].element.style.animation = "tick 1s infinite";
      }; 
    if(currentHour < startHour){
        slotes[i].element.style.display = "none";
        slotes[i].element.style.animation = "none";
      };
    if(currentHour === startHour && currentMinute < startMinute){
        slotes[i].element.style.display = "none";
        slotes[i].element.style.animation = "none";
      };
  }
}, 1000);
 
function toggleMenu(){
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
  menuToggle.classList.toggle('open');

  if (menu.classList.contains('open'))
  {document.querySelector(".frame-overlord").style.marginTop = '25vh';} 
  else {document.querySelector(".frame-overlord").style.marginTop = '17vh';}
}

let s = 0;
let min = 0;
let h = 0;
let d = new Date();
let u = 3.5;
let u1h = u * 4;
let u1min = u / 15;

setInterval(function time() {
  d = new Date();
  s = d.getSeconds();
  min = d.getMinutes();
  h = d.getHours();
  u = 3.5;
  u1h = u * 4;
  u1min = u / 15;

  document.querySelector(".seconds").innerHTML = d.getSeconds();
  document.querySelector(".time").innerHTML = h + ":" + min;

 /*  document.querySelector(".topt").style.width =
    u1h * (h - 6) + min * u1min + "vw";
  document.querySelector(".rightt").style.height =
    u1h * (h - 12) + min * u1min + 3 + "vw";
  document.querySelector(".bottomt").style.width =
    u1h * (h - 18) + min * u1min + "vw";
  document.querySelector(".leftt").style.height =
    u1h * h + min * u1min + 3 + "vw";
*/

}, 100);





function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}