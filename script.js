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



 if (h < 6.083){
  document.querySelector(".vi05").style.display ="none";
}
if (h >= 6.083 ) {
  document.querySelector(".vi05").style.animation ="none";
}
 if (h < 6.167){
  document.querySelector(".vi10").style.display="none";
}
if (h >= 6.167){
  document.querySelector(".vi10").style.animation="none";
}
 if (h < 6.25){
  document.querySelector(".vi15").style.display="none";
}
if (h >= 6.25){
  document.querySelector(".vi15").style.animation="none";
}
if (h < 6.33){
  document.querySelector(".vi20").style.display="none";
}
if (h >= 6.33){
  document.querySelector(".vi20").style.animation="none";
}
if (h < 6.42){
  document.querySelector(".vi25").style.display="none";
}
if (h >= 6.42){
  document.querySelector(".vi25").style.animation="none";
}
if (h < 6.5){
  document.querySelector(".vi30").style.display="none";
}
if (h >= 6.5){
  document.querySelector(".vi30").style.animation="none";
}
if (h < 6.583){
  document.querySelector(".vi35").style.display="none";
}
if (h >= 6.583){
  document.querySelector(".vi35").style.animation="none";
}
if (h < 6.67){
  document.querySelector(".vi40").style.display="none";
}
if (h >= 6.67){
  document.querySelector(".vi40").style.animation="none";
}
if (h < 6.75){
  document.querySelector(".vi45").style.display="none";
}
if (h >= 6.75){
  document.querySelector(".vi45").style.animation="none";
}
if (h < 6.83){
  document.querySelector(".vi50").style.display="none";
}
if (h >= 6.83){
  document.querySelector(".vi50").style.animation="none";
}
if (h < 6.92){
  document.querySelector(".vi55").style.display="none";
}
if (h >= 6.92){
  document.querySelector(".vi55").style.animation="none";
}
if (h < 7){
  document.querySelector(".vi00").style.display="none";
}
if (h >= 7){
  document.querySelector(".vi00").style.animation="none";
}
if (h < 7.083){
  document.querySelector(".vii05").style.display ="none";
}
if (h >= 7.083 ) {
  document.querySelector(".vii05").style.animation ="none";
}
 if (h < 7.167){
  document.querySelector(".vii10").style.display="none";
}
if (h >= 7.167){
  document.querySelector(".vii10").style.animation="none";
}
 if (h < 7.25){
  document.querySelector(".vii15").style.display="none";
}
if (h >= 7.25){
  document.querySelector(".vii15").style.animation="none";
}
if (h < 7.33){
  document.querySelector(".vii20").style.display="none";
}
if (h >= 7.33){
  document.querySelector(".vii20").style.animation="none";
}
if (h < 7.42){
  document.querySelector(".vii25").style.display="none";
}
if (h >= 7.42){
  document.querySelector(".vii25").style.animation="none";
}
if (h < 7.5){
  document.querySelector(".vii30").style.display="none";
}
if (h >= 7.5){
  document.querySelector(".vii30").style.animation="none";
}
if (h < 7.583){
  document.querySelector(".vii35").style.display="none";
}
if (h >= 7.583){
  document.querySelector(".vii35").style.animation="none";
}
if (h < 7.67){
  document.querySelector(".vii40").style.display="none";
}
if (h >= 7.67){
  document.querySelector(".vii40").style.animation="none";
}
if (h < 7.75){
  document.querySelector(".vii45").style.display="none";
}
if (h >= 7.75){
  document.querySelector(".vii45").style.animation="none";
}
if (h < 7.83){
  document.querySelector(".vii50").style.display="none";
}
if (h >= 7.83){
  document.querySelector(".vii50").style.animation="none";
}
if (h < 7.92){
  document.querySelector(".vii55").style.display="none";
}
if (h >= 7.92){
  document.querySelector(".vii55").style.animation="none";
}
if (h < 8){
  document.querySelector(".vii00").style.display="none";
}
if (h >= 8){
  document.querySelector(".vii00").style.animation="none";
}


if (h < 8.083){
  document.querySelector(".viii05").style.display ="none";
}
if (h >= 8.083 ) {
  document.querySelector(".viii05").style.animation ="none";
}
 if (h < 8.167){
  document.querySelector(".viii10").style.display="none";
}
if (h >= 8.167){
  document.querySelector(".viii10").style.animation="none";
}
 if (h < 8.25){
  document.querySelector(".viii15").style.display="none";
}
if (h >= 8.25){
  document.querySelector(".viii15").style.animation="none";
}
if (h < 8.33){
  document.querySelector(".viii20").style.display="none";
}
if (h >= 8.33){
  document.querySelector(".viii20").style.animation="none";
}
if (h < 8.42){
  document.querySelector(".viii25").style.display="none";
}
if (h >= 8.42){
  document.querySelector(".viii25").style.animation="none";
}
if (h < 8.5){
  document.querySelector(".viii30").style.display="none";
}
if (h >= 8.5){
  document.querySelector(".viii30").style.animation="none";
}
if (h < 8.583){
  document.querySelector(".viii35").style.display="none";
}
if (h >= 8.583){
  document.querySelector(".viii35").style.animation="none";
}
if (h < 8.67){
  document.querySelector(".viii40").style.display="none";
}
if (h >= 8.67){
  document.querySelector(".viii40").style.animation="none";
}
if (h < 8.75){
  document.querySelector(".viii45").style.display="none";
}
if (h >= 8.75){
  document.querySelector(".viii45").style.animation="none";
}
if (h < 8.83){
  document.querySelector(".viii50").style.display="none";
}
if (h >= 8.83){
  document.querySelector(".viii50").style.animation="none";
}
if (h < 8.92){
  document.querySelector(".viii55").style.display="none";
}
if (h >= 8.92){
  document.querySelector(".viii55").style.animation="none";
}
if (h < 9){
  document.querySelector(".viii00").style.display="none";
}
if (h >= 9){
  document.querySelector(".viii00").style.animation="none";
}



if (h < 9.083){
  document.querySelector(".ix05").style.display ="none";
}
if (h >= 9.083 ) {
  document.querySelector(".ix05").style.animation ="none";
}
 if (h < 9.167){
  document.querySelector(".ix10").style.display="none";
}
if (h >= 9.167){
  document.querySelector(".ix10").style.animation="none";
}
 if (h < 9.25){
  document.querySelector(".ix15").style.display="none";
}
if (h >= 9.25){
  document.querySelector(".ix15").style.animation="none";
}
if (h < 9.33){
  document.querySelector(".ix20").style.display="none";
}
if (h >= 9.33){
  document.querySelector(".ix20").style.animation="none";
}
if (h < 9.42){
  document.querySelector(".ix25").style.display="none";
}
if (h >= 9.42){
  document.querySelector(".ix25").style.animation="none";
}
if (h < 9.5){
  document.querySelector(".ix30").style.display="none";
}
if (h >= 9.5){
  document.querySelector(".ix30").style.animation="none";
}
if (h < 9.583){
  document.querySelector(".ix35").style.display="none";
}
if (h >= 9.583){
  document.querySelector(".ix35").style.animation="none";
}
if (h < 9.67){
  document.querySelector(".ix40").style.display="none";
}
if (h >= 9.67){
  document.querySelector(".ix40").style.animation="none";
}
if (h < 9.75){
  document.querySelector(".ix45").style.display="none";
}
if (h >= 9.75){
  document.querySelector(".ix45").style.animation="none";
}
if (h < 9.83){
  document.querySelector(".ix50").style.display="none";
}
if (h >= 9.83){
  document.querySelector(".ix50").style.animation="none";
}
if (h < 9.92){
  document.querySelector(".ix55").style.display="none";
}
if (h >= 9.92){
  document.querySelector(".ix55").style.animation="none";
}
if (h < 10){
  document.querySelector(".ix00").style.display="none";
}
if (h >= 10){
  document.querySelector(".ix00").style.animation="none";
}

if (h < 10.083){
  document.querySelector(".x05").style.display ="none";
}
if (h >= 10.083 ){
  document.querySelector(".x05").style.animation ="none";
}
 if (h < 10.167){
  document.querySelector(".x10").style.display="none";
}
if (h >= 10.167){
  document.querySelector(".x10").style.animation="none";
}
 if (h < 10.25){
  document.querySelector(".x15").style.display="none";
}
if (h >= 10.25){
  document.querySelector(".x15").style.animation="none";
}
if (h < 10.33){
  document.querySelector(".x20").style.display="none";
}
if (h >= 10.33){
  document.querySelector(".x20").style.animation="none";
}
if (h < 10.42){
  document.querySelector(".x25").style.display="none";
}
if (h >= 10.42){
  document.querySelector(".x25").style.animation="none";
}
if (h < 10.5){
  document.querySelector(".x30").style.display="none";
}
if (h >= 10.5){
  document.querySelector(".x30").style.animation="none";
}
if (h < 10.583){
  document.querySelector(".x35").style.display="none";
}
if (h >= 10.583){
  document.querySelector(".x35").style.animation="none";
}
if (h < 10.6){
  document.querySelector(".x40").style.display="none";
}
if (h >= 10.67){
  document.querySelector(".x40").style.animation="none";
}
if (h < 10.75){
  document.querySelector(".x45").style.display="none";
}
if (h >= 10.75){
  document.querySelector(".x45").style.animation="none";
}
if (h < 10.83){
  document.querySelector(".x50").style.display="none";
}
if (h >= 10.83){
  document.querySelector(".x50").style.animation="none";
}
if (h < 10.92){
  document.querySelector(".x55").style.display="none";
}
if (h >= 10.92){
  document.querySelector(".x55").style.animation="none";
}
if (h < 11){
  document.querySelector(".x00").style.display="none";
}
if (h >= 11){
  document.querySelector(".x00").style.animation="none";
}

if ( h < 11 && min < 5){
  document.querySelector(".xi05").style.display ="none";
}
if ( h >= 11 && min >= 5 || h >=12 ){
  document.querySelector(".xi05").style.animation ="none";
}
 if (h < 11 && min < 10){
  document.querySelector(".xi10").style.display="none";
}
if (h >= 11 && min >= 10 || h >= 12){
  document.querySelector(".xi10").style.animation="none";
}
 if (h*60 + min < 675 || h < 11 & min < 15){
  document.querySelector(".xi15").style.display="none";
}
if (h >= 11 & min >= 15 || h >= 12){
  document.querySelector(".xi15").style.animation="none";
}
if (h < 11 & min < 20){
  document.querySelector(".xi20").style.display="none";
}
if (h >= 11 & min >= 20 || h >= 12){
  document.querySelector(".xi20").style.animation="none";
}
if (h < 11 & min < 25 ){
  document.querySelector(".xi25").style.display="none";
}
if (h >= 11 & min >= 25 || h >= 12){
  document.querySelector(".xi25").style.animation="none";
}
if (h < 11 & min <30){
  document.querySelector(".xi30").style.display="none";
}
if (h >= 11 & min >= 30 || h>=12){
  document.querySelector(".xi30").style.animation="none";
}
if (h < 11 & min < 35){
  document.querySelector(".xi35").style.display="none";
}
if (h >= 11 & min >=35 || h>=12){
  document.querySelector(".xi35").style.animation="none";
}
if (h < 11 & min< 40){
  document.querySelector(".xi40").style.display="none";
}
if (h >= 11 & min >= 40 || h>=12){
  document.querySelector(".xi40").style.animation="none";
}
if (h < 11 & min < 45 ){
  document.querySelector(".xi45").style.display="none";
}
if (h >= 11 & min >=45 || h>=12){
  document.querySelector(".xi45").style.animation="none";
}
if (h < 11 & min <50 ){
  document.querySelector(".xi50").style.display="none";
}
if (h >= 11 & min >= 50 || h >= 12){
  document.querySelector(".xi50").style.animation="none";
}
if (h < 11 & min < 55){
  document.querySelector(".xi55").style.display="none";
}
if (h >= 11 & min >= 55 || h>=12){
  document.querySelector(".xi55").style.animation="none";
}
if (h < 11 & min <= 59 ){
  document.querySelector(".xi00").style.display="none";
}
if (h >= 12){
  document.querySelector(".xi00").style.animation="none";
}


if ( h < 12 & min < 5){
  document.querySelector(".xii05").style.display ="none";
}
if ( h >= 12 & min >= 5 || h >=13 ){
  document.querySelector(".xii05").style.animation ="none";
}
 if (h < 12 & min < 10){
  document.querySelector(".xii10").style.display="none";
}
if (h >= 12 & min >= 10 || h >= 13){
  document.querySelector(".xii10").style.animation="none";
}
 if (h < 12 & min < 15){
  document.querySelector(".xii15").style.display="none";
}
if (h >= 12 & min >= 15 || h >= 13){
  document.querySelector(".xii15").style.animation="none";
}
if (h < 12 & min < 20){
  document.querySelector(".xii20").style.display="none";
}
if (h >= 12 & min >= 20 || h >= 13){
  document.querySelector(".xii20").style.animation="none";
}
if (h < 12 & min < 25 ){
  document.querySelector(".xii25").style.display="none";
}
if (h >= 12 & min >= 25 || h >= 13){
  document.querySelector(".xii25").style.animation="none";
}
if (h < 12 & min <30){
  document.querySelector(".xii30").style.display="none";
}
if (h >= 12 & min >= 30 || h>=13){
  document.querySelector(".xii30").style.animation="none";
}
if (h < 12 & min < 35){
  document.querySelector(".xii35").style.display="none";
}
if (h >= 12 & min >=35 || h>=13){
  document.querySelector(".xii35").style.animation="none";
}
if (h < 12 & min< 40){
  document.querySelector(".xii40").style.display="none";
}
if (h >= 12 & min >= 40 || h>=13){
  document.querySelector(".xii40").style.animation="none";
}
if (h < 12 & min < 45 ){
  document.querySelector(".xii45").style.display="none";
}
if (h >= 12 & min >=45 || h>=13){
  document.querySelector(".xii45").style.animation="none";
}
if (h < 12 & min <50 ){
  document.querySelector(".xii50").style.display="none";
}
if (h >= 12 & min >= 50 || h >= 13){
  document.querySelector(".xii50").style.animation="none";
}
if (h < 12 & min < 55){
  document.querySelector(".xii55").style.display="none";
}
if (h >= 12 & min >= 55 || h>=13){
  document.querySelector(".xii55").style.animation="none";
}
if (h < 12 & min <= 59 ){
  document.querySelector(".xii00").style.display="none";
}
if (h >= 13){
  document.querySelector(".xii00").style.animation="none";
}


if ( h < 13 & min < 5){
  document.querySelector(".xiii05").style.display ="none";
}
if ( h >= 13 & min >= 5 || h >=14 ){
  document.querySelector(".xiii05").style.animation ="none";
}
 if (h < 13 & min < 10){
  document.querySelector(".xiii10").style.display="none";
}
if (h >= 13 & min >= 10 || h >= 14){
  document.querySelector(".xiii10").style.animation="none";
}
 if (h < 13 & min < 15){
  document.querySelector(".xiii15").style.display="none";
}
if (h >= 13 & min >= 15 || h >= 14){
  document.querySelector(".xiii15").style.animation="none";
}
if (h < 13 & min < 20){
  document.querySelector(".xiii20").style.display="none";
}
if (h >= 13 & min >= 20 || h >= 14){
  document.querySelector(".xiii20").style.animation="none";
}
if (h < 13 & min < 25 ){
  document.querySelector(".xiii25").style.display="none";
}
if (h >= 13 & min >= 25 || h >= 14){
  document.querySelector(".xiii25").style.animation="none";
}
if (h < 13 & min <30){
  document.querySelector(".xiii30").style.display="none";
}
if (h >= 13 & min >= 30 || h>=14){
  document.querySelector(".xiii30").style.animation="none";
}
if (h < 13 & min < 35){
  document.querySelector(".xiii35").style.display="none";
}
if (h >= 13 & min >=35 || h>=14){
  document.querySelector(".xiii35").style.animation="none";
}
if (h < 13 & min< 40){
  document.querySelector(".xiii40").style.display="none";
}
if (h >= 13 & min >= 40 || h>=14){
  document.querySelector(".xiii40").style.animation="none";
}
if (h < 13 & min < 45 ){
  document.querySelector(".xiii45").style.display="none";
}
if (h >= 13 & min >=45 || h>=14){
  document.querySelector(".xiii45").style.animation="none";
}
if (h < 13 & min <50 ){
  document.querySelector(".xiii50").style.display="none";
}
if (h >= 13 & min >= 50 || h >= 14){
  document.querySelector(".xiii50").style.animation="none";
}
if (h < 13 & min < 55){
  document.querySelector(".xiii55").style.display="none";
}
if (h >= 13 & min >= 55 || h>=14){
  document.querySelector(".xiii55").style.animation="none";
}
if (h < 13 & min <= 59 ){
  document.querySelector(".xiii00").style.display="none";
}
if (h >= 14){
  document.querySelector(".xiii00").style.animation="none";
}


if ( h < 14 & min < 5){
  document.querySelector(".xiv05").style.display ="none";
}
if ( h >= 14 & min >= 5 || h >=15 ){
  document.querySelector(".xiv05").style.animation ="none";
}
 if (h < 14 & min < 10){
  document.querySelector(".xiv10").style.display="none";
}
if (h >= 14 & min >= 10 || h >= 15){
  document.querySelector(".xiv10").style.animation="none";
}
 if (h < 14 & min < 15){
  document.querySelector(".xiv15").style.display="none";
}
if (h >= 14 & min >= 15 || h >= 15){
  document.querySelector(".xiv15").style.animation="none";
}
if (h < 14 & min < 20){
  document.querySelector(".xiv20").style.display="none";
}
if (h >= 14 & min >= 20 || h >= 15){
  document.querySelector(".xiv20").style.animation="none";
}
if (h < 14 & min < 25 ){
  document.querySelector(".xiv25").style.display="none";
}
if (h >= 14 & min >= 25 || h >= 15){
  document.querySelector(".xiv25").style.animation="none";
}
if (h < 14 & min <30){
  document.querySelector(".xiv30").style.display="none";
}
if (h >= 14 & min >= 30 || h>=15){
  document.querySelector(".xiv30").style.animation="none";
}
if (h < 14 & min < 35){
  document.querySelector(".xiv35").style.display="none";
}
if (h >= 14 & min >=35 || h>=15){
  document.querySelector(".xiv35").style.animation="none";
}
if (h < 14 & min< 40){
  document.querySelector(".xiv40").style.display="none";
}
if (h >= 14 & min >= 40 || h>=15){
  document.querySelector(".xiv40").style.animation="none";
}
if (h < 14 & min < 45 ){
  document.querySelector(".xiv45").style.display="none";
}
if (h >= 14 & min >=45 || h>=15){
  document.querySelector(".xiv45").style.animation="none";
}
if (h < 14 & min <50 ){
  document.querySelector(".xiv50").style.display="none";
}
if (h >= 14 & min >= 50 || h >= 15){
  document.querySelector(".xiv50").style.animation="none";
}
if (h < 14 & min < 55){
  document.querySelector(".xiv55").style.display="none";
}
if (h >= 14 & min >= 55 || h>=15){
  document.querySelector(".xiv55").style.animation="none";
}
if (h < 14 & min <= 59 ){
  document.querySelector(".xiv00").style.display="none";
}
if (h >= 15){
  document.querySelector(".xiv00").style.animation="none";
}


if ( h < 15 & min < 5){
  document.querySelector(".xv05").style.display ="none";
}
if ( h >= 15 & min >= 5 || h >=16 ){
  document.querySelector(".xv05").style.animation ="none";
}
 if (h < 15 & min < 10){
  document.querySelector(".xv10").style.display="none";
}
if (h >= 15 & min >= 10 || h >= 16){
  document.querySelector(".xv10").style.animation="none";
}
 if (h < 15 & min < 15){
  document.querySelector(".xv15").style.display="none";
}
if (h >= 15 & min >= 15 || h >= 16){
  document.querySelector(".xv15").style.animation="none";
}
if (h < 15 & min < 20){
  document.querySelector(".xv20").style.display="none";
}
if (h >= 15 & min >= 20 || h >= 16){
  document.querySelector(".xv20").style.animation="none";
}
if (h < 15 & min < 25 ){
  document.querySelector(".xv25").style.display="none";
}
if (h >= 15 & min >= 25 || h >= 16){
  document.querySelector(".xv25").style.animation="none";
}
if (h < 15 & min <30){
  document.querySelector(".xv30").style.display="none";
}
if (h >= 15 & min >= 30 || h>=16){
  document.querySelector(".xv30").style.animation="none";
}
if (h < 15 & min < 35){
  document.querySelector(".xv35").style.display="none";
}
if (h >= 15 & min >=35 || h>=16){
  document.querySelector(".xv35").style.animation="none";
}
if (h < 15 & min< 40){
  document.querySelector(".xv40").style.display="none";
}
if (h >= 15 & min >= 40 || h>=16){
  document.querySelector(".xv40").style.animation="none";
}
if (h < 15 & min < 45 ){
  document.querySelector(".xv45").style.display="none";
}
if (h >= 15 & min >=45 || h>=16){
  document.querySelector(".xv45").style.animation="none";
}
if (h < 15 & min <50 ){
  document.querySelector(".xv50").style.display="none";
}
if (h >= 15 & min >= 50 || h >= 16){
  document.querySelector(".xv50").style.animation="none";
}
if (h < 15 & min < 55){
  document.querySelector(".xv55").style.display="none";
}
if (h >= 15 & min >= 55 || h>=16){
  document.querySelector(".xv55").style.animation="none";
}
if (h < 15 & min <= 59 ){
  document.querySelector(".xv00").style.display="none";
}
if (h >= 16){
  document.querySelector(".xv00").style.animation="none";
}


if ( h < 16 & min < 5){
  document.querySelector(".xvi05").style.display ="none";
}
if ( h >= 16 & min >= 5 || h >=17 ){
  document.querySelector(".xvi05").style.animation ="none";
}
 if (h < 16 & min < 10){
  document.querySelector(".xvi10").style.display="none";
}
if (h >= 16 & min >= 10 || h >= 17){
  document.querySelector(".xvi10").style.animation="none";
}
 if (h < 16 & min < 15){
  document.querySelector(".xvi15").style.display="none";
}
if (h >= 16 & min >= 15 || h >= 17){
  document.querySelector(".xvi15").style.animation="none";
}
if (h < 16 & min < 20){
  document.querySelector(".xvi20").style.display="none";
}
if (h >= 16 & min >= 20 || h >= 17){
  document.querySelector(".xvi20").style.animation="none";
}
if (h < 16 & min < 25 ){
  document.querySelector(".xvi25").style.display="none";
}
if (h >= 16 & min >= 25 || h >= 17){
  document.querySelector(".xvi25").style.animation="none";
}
if (h < 16 & min <30){
  document.querySelector(".xvi30").style.display="none";
}
if (h >= 16 & min >= 30 || h>=17){
  document.querySelector(".xvi30").style.animation="none";
}
if (h < 16 & min < 35){
  document.querySelector(".xvi35").style.display="none";
}
if (h >= 16 & min >=35 || h>=17){
  document.querySelector(".xvi35").style.animation="none";
}
if (h < 16 & min< 40){
  document.querySelector(".xvi40").style.display="none";
}
if (h >= 16 & min >= 40 || h>=17){
  document.querySelector(".xvi40").style.animation="none";
}
if (h < 16 & min < 45 ){
  document.querySelector(".xvi45").style.display="none";
}
if (h >= 16 & min >=45 || h>=17){
  document.querySelector(".xvi45").style.animation="none";
}
if (h < 16 & min <50 ){
  document.querySelector(".xvi50").style.display="none";
}
if (h >= 16 & min >= 50 || h >= 17){
  document.querySelector(".xvi50").style.animation="none";
}
if (h < 16 & min < 55){
  document.querySelector(".xvi55").style.display="none";
}
if (h >= 16 & min >= 55 || h>=17){
  document.querySelector(".xvi55").style.animation="none";
}
if (h < 16 & min <= 59 ){
  document.querySelector(".xvi00").style.display="none";
}
if (h >= 17){
  document.querySelector(".xvi00").style.animation="none";
}


if ( h < 17 & min < 5){
  document.querySelector(".xvii05").style.display ="none";
}
if ( h >= 17 & min >= 5 || h >=18 ){
  document.querySelector(".xvii05").style.animation ="none";
}
 if (h < 17 & min < 10){
  document.querySelector(".xvii10").style.display="none";
}
if (h >= 17 & min >= 10 || h >= 18){
  document.querySelector(".xvii10").style.animation="none";
}
 if (h < 17 & min < 15){
  document.querySelector(".xvii15").style.display="none";
}
if (h >= 17 & min >= 15 || h >= 18){
  document.querySelector(".xvii15").style.animation="none";
}
if (h < 17 & min < 20){
  document.querySelector(".xvii20").style.display="none";
}
if (h >= 17 & min >= 20 || h >= 18){
  document.querySelector(".xvii20").style.animation="none";
}
if (h < 17 & min < 25 ){
  document.querySelector(".xvii25").style.display="none";
}
if (h >= 17 & min >= 25 || h >= 18){
  document.querySelector(".xvii25").style.animation="none";
}
if (h < 17 & min <30){
  document.querySelector(".xvii30").style.display="none";
}
if (h >= 17 & min >= 30 || h>=18){
  document.querySelector(".xvii30").style.animation="none";
}
if (h < 17 & min < 35){
  document.querySelector(".xvii35").style.display="none";
}
if (h >= 17 & min >=35 || h>=18){
  document.querySelector(".xvii35").style.animation="none";
}
if (h < 17 & min< 40){
  document.querySelector(".xvii40").style.display="none";
}
if (h >= 17 & min >= 40 || h>=18){
  document.querySelector(".xvii40").style.animation="none";
}
if (h < 17 & min < 45 ){
  document.querySelector(".xvii45").style.display="none";
}
if (h >= 17 & min >=45 || h>=18){
  document.querySelector(".xvii45").style.animation="none";
}
if (h < 17 & min <50 ){
  document.querySelector(".xvii50").style.display="none";
}
if (h >= 17 & min >= 50 || h >= 18){
  document.querySelector(".xvii50").style.animation="none";
}
if (h < 17 & min < 55){
  document.querySelector(".xvii55").style.display="none";
}
if (h >= 17 & min >= 55 || h>=18){
  document.querySelector(".xvii55").style.animation="none";
}
if (h < 17 & min <= 59 ){
  document.querySelector(".xvii00").style.display="none";
}
if (h >= 18){
  document.querySelector(".xvii00").style.animation="none";
}


if ( h < 18 & min < 5){
  document.querySelector(".xviii05").style.display ="none";
}
if ( h >= 18 & min >= 5 || h >=19 ){
  document.querySelector(".xviii05").style.animation ="none";
}
 if (h < 18 & min < 10){
  document.querySelector(".xviii10").style.display="none";
}
if (h >= 18 & min >= 10 || h >= 19){
  document.querySelector(".xviii10").style.animation="none";
}
 if (h < 18 & min < 15){
  document.querySelector(".xviii15").style.display="none";
}
if (h >= 18 & min >= 15 || h >= 19){
  document.querySelector(".xviii15").style.animation="none";
}
if (h < 18 & min < 20){
  document.querySelector(".xviii20").style.display="none";
}
if (h >= 18 & min >= 20 || h >= 19){
  document.querySelector(".xviii20").style.animation="none";
}
if (h < 18 & min < 25 ){
  document.querySelector(".xviii25").style.display="none";
}
if (h >= 18 & min >= 25 || h >= 19){
  document.querySelector(".xviii25").style.animation="none";
}
if (h < 18 & min <30){
  document.querySelector(".xviii30").style.display="none";
}
if (h >= 18 & min >= 30 || h>=19){
  document.querySelector(".xviii30").style.animation="none";
}
if (h < 18 & min < 35){
  document.querySelector(".xviii35").style.display="none";
}
if (h >= 18 & min >=35 || h>=19){
  document.querySelector(".xviii35").style.animation="none";
}
if (h < 18 & min< 40){
  document.querySelector(".xviii40").style.display="none";
}
if (h >= 18 & min >= 40 || h>=19){
  document.querySelector(".xviii40").style.animation="none";
}
if (h < 18 & min < 45 ){
  document.querySelector(".xviii45").style.display="none";
}
if (h >= 18 & min >=45 || h>=19){
  document.querySelector(".xviii45").style.animation="none";
}
if (h < 18 & min <50 ){
  document.querySelector(".xviii50").style.display="none";
}
if (h >= 18 & min >= 50 || h >= 19){
  document.querySelector(".xviii50").style.animation="none";
}
if (h < 18 & min < 55){
  document.querySelector(".xviii55").style.display="none";
}
if (h >= 18 & min >= 55 || h>=19){
  document.querySelector(".xviii55").style.animation="none";
}
if (h < 18 & min <= 59 ){
  document.querySelector(".xviii00").style.display="none";
}
if (h >= 19){
  document.querySelector(".xviii00").style.animation="none";
}


if ( h < 19 & min < 5){
  document.querySelector(".xix05").style.display ="none";
}
if ( h >= 19 & min >= 5 || h >=20 ){
  document.querySelector(".xix05").style.animation ="none";
}
 if (h < 19 & min < 10){
  document.querySelector(".xix10").style.display="none";
}
if (h >= 19 & min >= 10 || h >= 20){
  document.querySelector(".xix10").style.animation="none";
}
 if (h < 19 & min < 15){
  document.querySelector(".xix15").style.display="none";
}
if (h >= 19 & min >= 15 || h >= 20){
  document.querySelector(".xix15").style.animation="none";
}
if (h < 19 & min < 20){
  document.querySelector(".xix20").style.display="none";
}
if (h >= 19 & min >= 20 || h >= 20){
  document.querySelector(".xix20").style.animation="none";
}
if (h < 19 & min < 25 ){
  document.querySelector(".xix25").style.display="none";
}
if (h >= 19 & min >= 25 || h >= 20){
  document.querySelector(".xix25").style.animation="none";
}
if (h < 19 & min <30){
  document.querySelector(".xix30").style.display="none";
}
if (h >= 19 & min >= 30 || h>=20){
  document.querySelector(".xix30").style.animation="none";
}
if (h < 19 & min < 35){
  document.querySelector(".xix35").style.display="none";
}
if (h >= 19 & min >=35 || h>=20){
  document.querySelector(".xix35").style.animation="none";
}
if (h < 19 & min< 40){
  document.querySelector(".xix40").style.display="none";
}
if (h >= 19 & min >= 40 || h>=20){
  document.querySelector(".xix40").style.animation="none";
}
if (h < 19 & min < 45 ){
  document.querySelector(".xix45").style.display="none";
}
if (h >= 19 & min >=45 || h>=20){
  document.querySelector(".xix45").style.animation="none";
}
if (h < 19 & min <50 ){
  document.querySelector(".xix50").style.display="none";
}
if (h >= 19 & min >= 50 || h >= 20){
  document.querySelector(".xix50").style.animation="none";
}
if (h < 19 & min < 55){
  document.querySelector(".xix55").style.display="none";
}
if (h >= 19 & min >= 55 || h>=20){
  document.querySelector(".xix55").style.animation="none";
}
if (h < 19 & min <= 59 ){
  document.querySelector(".xix00").style.display="none";
}
if (h >= 20){
  document.querySelector(".xix00").style.animation="none";
}


if ( h < 20 & min < 5){
  document.querySelector(".xx05").style.display ="none";
}
if ( h >= 20 & min >= 5 || h >=21 ){
  document.querySelector(".xx05").style.animation ="none";
}
 if (h < 20 & min < 10){
  document.querySelector(".xx10").style.display="none";
}
if (h >= 20 & min >= 10 || h >= 21){
  document.querySelector(".xx10").style.animation="none";
}
 if (h < 20 & min < 15){
  document.querySelector(".xx15").style.display="none";
}
if (h >= 20 & min >= 15 || h >= 21){
  document.querySelector(".xx15").style.animation="none";
}
if (h < 20 & min < 20){
  document.querySelector(".xx20").style.display="none";
}
if (h >= 20 & min >= 20 || h >= 21){
  document.querySelector(".xx20").style.animation="none";
}
if (h < 20 & min < 25 ){
  document.querySelector(".xx25").style.display="none";
}
if (h >= 20 & min >= 25 || h >= 21){
  document.querySelector(".xx25").style.animation="none";
}
if (h < 20 & min <30){
  document.querySelector(".xx30").style.display="none";
}
if (h >= 20 & min >= 30 || h>=21){
  document.querySelector(".xx30").style.animation="none";
}
if (h < 20 & min < 35){
  document.querySelector(".xx35").style.display="none";
}
if (h >= 20 & min >=35 || h>=21){
  document.querySelector(".xx35").style.animation="none";
}
if (h < 20 & min< 40){
  document.querySelector(".xx40").style.display="none";
}
if (h >= 20 & min >= 40 || h>=21){
  document.querySelector(".xx40").style.animation="none";
}
if (h < 20 & min < 45 ){
  document.querySelector(".xx45").style.display="none";
}
if (h >= 20 & min >=45 || h>=21){
  document.querySelector(".xx45").style.animation="none";
}
if (h < 20 & min <50 ){
  document.querySelector(".xx50").style.display="none";
}
if (h >= 20 & min >= 50 || h >= 21){
  document.querySelector(".xx50").style.animation="none";
}
if (h < 20 & min < 55){
  document.querySelector(".xx55").style.display="none";
}
if (h >= 20 & min >= 55 || h>=21){
  document.querySelector(".xx55").style.animation="none";
}
if (h < 20 & min <= 59 ){
  document.querySelector(".xx00").style.display="none";
}
if (h >= 21){
  document.querySelector(".xx00").style.animation="none";
}


if ( h < 21 & min < 5){
  document.querySelector(".xxi05").style.display ="none";
}
if ( h >= 21 & min >= 5 || h >=22 ){
  document.querySelector(".xxi05").style.animation ="none";
}
 if (h < 21 & min < 10){
  document.querySelector(".xxi10").style.display="none";
}
if (h >= 21 & min >= 10 || h >= 22){
  document.querySelector(".xxi10").style.animation="none";
}
 if (h < 21 & min < 15){
  document.querySelector(".xxi15").style.display="none";
}
if (h >= 21 & min >= 15 || h >= 22){
  document.querySelector(".xxi15").style.animation="none";
}
if (h < 21 & min < 20){
  document.querySelector(".xxi20").style.display="none";
}
if (h >= 21 & min >= 20 || h >= 22){
  document.querySelector(".xxi20").style.animation="none";
}
if (h < 21 & min < 25 ){
  document.querySelector(".xxi25").style.display="none";
}
if (h >= 21 & min >= 25 || h >= 22){
  document.querySelector(".xxi25").style.animation="none";
}
if (h < 21 & min <30){
  document.querySelector(".xxi30").style.display="none";
}
if (h >= 21 & min >= 30 || h>=22){
  document.querySelector(".xxi30").style.animation="none";
}
if (h < 21 & min < 35){
  document.querySelector(".xxi35").style.display="none";
}
if (h >= 21 & min >=35 || h>=22){
  document.querySelector(".xxi35").style.animation="none";
}
if (h < 21 & min< 40){
  document.querySelector(".xxi40").style.display="none";
}
if (h >= 21 & min >= 40 || h>=22){
  document.querySelector(".xxi40").style.animation="none";
}
if (h < 21 & min < 45 ){
  document.querySelector(".xxi45").style.display="none";
}
if (h >= 21 & min >=45 || h>=22){
  document.querySelector(".xxi45").style.animation="none";
}
if (h < 21 & min <50 ){
  document.querySelector(".xxi50").style.display="none";
}
if (h >= 21 & min >= 50 || h >= 22){
  document.querySelector(".xxi50").style.animation="none";
}
if (h < 21 & min < 55){
  document.querySelector(".xxi55").style.display="none";
}
if (h >= 21 & min >= 55 || h>=22){
  document.querySelector(".xxi55").style.animation="none";
}
if (h < 21 & min <= 59 ){
  document.querySelector(".xxi00").style.display="none";
}
if (h >= 22){
  document.querySelector(".xxi00").style.animation="none";
}


if ( h < 22 & min < 5){
  document.querySelector(".xxii05").style.display ="none";
}
if ( h >= 22 & min >= 5 || h >=23 ){
  document.querySelector(".xxii05").style.animation ="none";
}
 if (h < 22 & min < 10){
  document.querySelector(".xxii10").style.display="none";
}
if (h >= 22 & min >= 10 || h >= 23){
  document.querySelector(".xxii10").style.animation="none";
}
 if (h < 22 & min < 15){
  document.querySelector(".xxii15").style.display="none";
}
if (h >= 22 & min >= 15 || h >= 23){
  document.querySelector(".xxii15").style.animation="none";
}
if (h < 22 & min < 20){
  document.querySelector(".xxii20").style.display="none";
}
if (h >= 22 & min >= 20 || h >= 23){
  document.querySelector(".xxii20").style.animation="none";
}
if (h < 22 & min < 25 ){
  document.querySelector(".xxii25").style.display="none";
}
if (h >= 22 & min >= 25 || h >= 23){
  document.querySelector(".xxii25").style.animation="none";
}
if (h < 22 & min <30){
  document.querySelector(".xxii30").style.display="none";
}
if (h >= 22 & min >= 30 || h>=23){
  document.querySelector(".xxii30").style.animation="none";
}
if (h < 22 & min < 35){
  document.querySelector(".xxii35").style.display="none";
}
if (h >= 22 & min >=35 || h>=23){
  document.querySelector(".xxii35").style.animation="none";
}
if (h < 22 & min< 40){
  document.querySelector(".xxii40").style.display="none";
}
if (h >= 22 & min >= 40 || h>=23){
  document.querySelector(".xxii40").style.animation="none";
}
if (h < 22 & min < 45 ){
  document.querySelector(".xxii45").style.display="none";
}
if (h >= 22 & min >=45 || h>=23){
  document.querySelector(".xxii45").style.animation="none";
}
if (h < 22 & min <50 ){
  document.querySelector(".xxii50").style.display="none";
}
if (h >= 22 & min >= 50 || h >= 23){
  document.querySelector(".xxii50").style.animation="none";
}
if (h < 22 & min < 55){
  document.querySelector(".xxii55").style.display="none";
}
if (h >= 22 & min >= 55 || h>=23){
  document.querySelector(".xxii55").style.animation="none";
}
if (h < 22 & min <= 59 ){
  document.querySelector(".xxii00").style.display="none";
}
if (h >= 23){
  document.querySelector(".xxii00").style.animation="none";
}


if ( h < 23 & min < 5){
  document.querySelector(".xxiii05").style.display ="none";
}
if ( h >= 23 & min >= 5){
  document.querySelector(".xxiii05").style.animation ="none";
}
 if (h < 23 & min < 10){
  document.querySelector(".xxiii10").style.display="none";
}
if (h >= 23 & min >= 10 ){
  document.querySelector(".xxiii10").style.animation="none";
}
 if (h < 23 & min < 15){
  document.querySelector(".xxiii15").style.display="none";
}
if (h >= 23 & min >= 15 ){
  document.querySelector(".xxiii15").style.animation="none";
}
if (h < 23 & min < 20){
  document.querySelector(".xxiii20").style.display="none";
}
if (h >= 23 & min >= 20 ){
  document.querySelector(".xxiii20").style.animation="none";
}
if (h < 23 & min < 25 ){
  document.querySelector(".xxiii25").style.display="none";
}
if (h >= 23 & min >= 25 ){
  document.querySelector(".xxiii25").style.animation="none";
}
if (h < 23 & min <30){
  document.querySelector(".xxiii30").style.display="none";
}
if (h >= 23 & min >= 30 ){
  document.querySelector(".xxiii30").style.animation="none";
}
if (h < 23 & min < 35){
  document.querySelector(".xxiii35").style.display="none";
}
if (h >= 23 & min >=35 ){
  document.querySelector(".xxiii35").style.animation="none";
}
if (h < 23 & min< 40){
  document.querySelector(".xxiii40").style.display="none";
}
if (h >= 23 & min >= 40 ){
  document.querySelector(".xxiii40").style.animation="none";
}
if (h < 23 & min < 45 ){
  document.querySelector(".xxiii45").style.display="none";
}
if (h >= 23 & min >=45 ){
  document.querySelector(".xxiii45").style.animation="none";
}
if (h < 23 & min <50 ){
  document.querySelector(".xxiii50").style.display="none";
}
if (h >= 23 & min >= 50 ){
  document.querySelector(".xxiii50").style.animation="none";
}
if (h < 23 & min < 55){
  document.querySelector(".xxiii55").style.display="none";
}
if (h >= 23 & min >= 55 ){
  document.querySelector(".xxiii55").style.animation="none";
}
if (h < 23 & min <= 59 ){
  document.querySelector(".xxiii00").style.display="none";
}
if (h >= 0){
  document.querySelector(".xxiii00").style.animation="none";
}

}, 1000);

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