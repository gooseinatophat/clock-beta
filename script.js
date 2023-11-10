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

  document.querySelector(".left").classList.toggle("open");
  document.querySelector(".right").classList.toggle("open");
  document.querySelector(".top").classList.toggle("open");
  document.querySelector(".bottom").classList.toggle("open");

}

let chosen = (classChangeTo) => {
  let slot = document.querySelectorAll(".slot");

  slot.forEach((slots) => {
    slots.addEventListener("click", function () {
      slots.className = classChangeTo;
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


/* function copyColorN(){
  const night = document.querySelector(".selen");

  night.classList.toggle("on");

  if (night.classList.contains("on")) {
    document.body.style.cursor = "url('cursor-n.jpg')";
    night.style.cursor = "url('cursor-n.jpg')";
  } else {
    document.body.style.cursor = "default";
    night.style.cursor = "url('cursor-n.jpg')";
  }
}

function copyColorNp(){
  const nap = document.querySelector(".selenp");
  
  nap.classList.toggle("on");

  if (nap.classList.contains("on")) {
    document.body.style.cursor = "url('cursor-n.jpg')";
    nap.style.cursor = "url('cursor-n.jpg')";
  } else {
    document.body.style.cursor = "default";
    nap.style.cursor = "url('cursor-n.jpg')";
  }
} */

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
  const tick = document.querySelectorAll(".tick");
  tick.forEach((ticks) => {ticks.classList.toggle("open");});  
}



const slotes = new Array(288).fill({
  element: null,
  startHour: null,
  startMinute: null,
});

for (let i = 0; i < 288; i++){
  slotes[i].element = document.getElementById(`slote-${i}`);

  const startHour = Math.floor(i / 12);
  const startMinute = (i % 12) * 5;
  slotes[i].startHour = startHour;
  slotes[i].startMinute = startMinute;

}

setInterval(function updateSlotes() {
  const now = new Date ();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  for(let i = 0; i < 288; i++){
    const slote = slotes[i];

    if(currentHour === slote.startHour && currentMinute < slote.startMinute) {
        slote.element.style.display = "block";
        slote.element.style.animation = "tick 1s infinite";
      }; 
    if(currentHour < slote.startHour){
        slote.element.style.display = "none";
        slote.element.style.animation = "none";
      };
    if(currentHour > slote.startHour && currentMinute > slote.startMinute){
        slote.element.style.display = "block";
        slote.element.style.animation = "none";
      };
  }
}, 1000);

 


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

  if (h >= 6) {
    document.querySelector(".leftt").style.height = 100 + "%";
  }
  if (h >= 12) {
    document.querySelector(".topt").style.width = 100 + "%";
  }
  if (h >= 18) {
    document.querySelector(".rightt").style.height = 100 + "%";
  }
  if (h < 18) {
    document.querySelector(".bottomt").style.width = 0 + "%";
  } */




/*  if (h <= 6 && min < 1 && h != 7 && h < 7 ){
  document.querySelector(".vi05").style.display ="none";
}
if (h >= 6 && min >= 5 || h >= 7) {
  document.querySelector(".vi05").style.animation ="none";
}
 if (h < 6 && min < 6 && h != 7 && h < 7 ){
  document.querySelector(".vi10").style.display="none";
}
if (h >= 6 && min >= 10 || h >= 7){
  document.querySelector(".vi10").style.animation="none";
}
 if (h < 6 && min < 11 && h != 7 && h < 7 ){
  document.querySelector(".vi15").style.display="none";
}
if (h >= 6 && min >= 15 || h >= 7){
  document.querySelector(".vi15").style.animation="none";
}
if (h < 6 && min < 16 && h != 7 && h < 7 ){
  document.querySelector(".vi20").style.display="none";
}
*/
}, 100);

/* function setCookie(cname,cvalue,exdays) {
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
} */