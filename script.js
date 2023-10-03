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

  wrk.forEach((wrks) => {wrks.classList.toggle("open"); });
  opn.forEach((opns) => {opns.classList.toggle("open");});
  fl.forEach((fls) => {fls.classList.toggle("open");});
  np.forEach((nps) => {nps.classList.toggle("open"); });
  cmm.forEach((cmms) => {cmms.classList.toggle("open");});
  brk.forEach((brks) => {brks.classList.toggle("open");});
  slp.forEach((slps) => {slps.classList.toggle("open");});
  tsk.forEach((tsks) => {tsks.classList.toggle("open");});
  vnt.forEach((vnts) => {vnts.classList.toggle("open");});

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

/* function openInfo() {
  const click = document.querySelector(".click_me");
  const i = document.querySelector(".Index");

  


  i.classList.toggle("open");

  if (i.classList.contains("open")) {
    click.style.display = "flex";
  } else {
    click.style.display = "none";

  }
} */

function copyColorN(){
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
}

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
  document.querySelector(".squedule").classList.toggle("open");
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

  document.querySelector(".topt").style.width =
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
  }



 if (h < 6.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi05").style.display ="none";
}
if (h >= 6.083 ) {
  document.querySelector(".vi05").style.animation ="none";
}
 if (h < 6.167 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi10").style.display="none";
}
if (h >= 6.167){
  document.querySelector(".vi10").style.animation="none";
}
 if (h < 6.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi15").style.display="none";
}
if (h >= 6.25){
  document.querySelector(".vi15").style.animation="none";
}
if (h < 6.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi20").style.display="none";
}
if (h >= 6.33){
  document.querySelector(".vi20").style.animation="none";
}
if (h < 6.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi25").style.display="none";
}
if (h >= 6.42){
  document.querySelector(".vi25").style.animation="none";
}
if (h < 6.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi30").style.display="none";
}
if (h >= 6.5){
  document.querySelector(".vi30").style.animation="none";
}
if (h < 6.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi35").style.display="none";
}
if (h >= 6.583){
  document.querySelector(".vi35").style.animation="none";
}
if (h < 6.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi40").style.display="none";
}
if (h >= 6.67){
  document.querySelector(".vi40").style.animation="none";
}
if (h < 6.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi45").style.display="none";
}
if (h >= 6.75){
  document.querySelector(".vi45").style.animation="none";
}
if (h < 6.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi50").style.display="none";
}
if (h >= 6.83){
  document.querySelector(".vi50").style.animation="none";
}
if (h < 6.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi55").style.display="none";
}
if (h >= 6.92){
  document.querySelector(".vi55").style.animation="none";
}
if (h < 7 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vi00").style.display="none";
}
if (h >= 7){
  document.querySelector(".vi00").style.animation="none";
}
if (h < 7.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii05").style.display ="none";
}
if (h >= 7.083 ) {
  document.querySelector(".vii05").style.animation ="none";
}
 if (h < 7.167 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii10").style.display="none";
}
if (h >= 7.167){
  document.querySelector(".vii10").style.animation="none";
}
 if (h < 7.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii15").style.display="none";
}
if (h >= 7.25){
  document.querySelector(".vii15").style.animation="none";
}
if (h < 7.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii20").style.display="none";
}
if (h >= 7.33){
  document.querySelector(".vii20").style.animation="none";
}
if (h < 7.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii25").style.display="none";
}
if (h >= 7.42){
  document.querySelector(".vii25").style.animation="none";
}
if (h < 7.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii30").style.display="none";
}
if (h >= 7.5){
  document.querySelector(".vii30").style.animation="none";
}
if (h < 7.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii35").style.display="none";
}
if (h >= 7.583){
  document.querySelector(".vii35").style.animation="none";
}
if (h < 7.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii40").style.display="none";
}
if (h >= 7.67){
  document.querySelector(".vii40").style.animation="none";
}
if (h < 7.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii45").style.display="none";
}
if (h >= 7.75){
  document.querySelector(".vii45").style.animation="none";
}
if (h < 7.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii50").style.display="none";
}
if (h >= 7.83){
  document.querySelector(".vii50").style.animation="none";
}
if (h < 7.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii55").style.display="none";
}
if (h >= 7.92){
  document.querySelector(".vii55").style.animation="none";
}
if (h < 8 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".vii00").style.display="none";
}
if (h >= 8){
  document.querySelector(".vii00").style.animation="none";
}


if (h < 8.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii05").style.display ="none";
}
if (h >= 8.083 ) {
  document.querySelector(".viii05").style.animation ="none";
}
 if (h < 8.167 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii10").style.display="none";
}
if (h >= 8.167){
  document.querySelector(".viii10").style.animation="none";
}
 if (h < 8.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii15").style.display="none";
}
if (h >= 8.25){
  document.querySelector(".viii15").style.animation="none";
}
if (h < 8.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii20").style.display="none";
}
if (h >= 8.33){
  document.querySelector(".viii20").style.animation="none";
}
if (h < 8.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii25").style.display="none";
}
if (h >= 8.42){
  document.querySelector(".viii25").style.animation="none";
}
if (h < 8.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii30").style.display="none";
}
if (h >= 8.5){
  document.querySelector(".viii30").style.animation="none";
}
if (h < 8.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii35").style.display="none";
}
if (h >= 8.583){
  document.querySelector(".viii35").style.animation="none";
}
if (h < 8.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii40").style.display="none";
}
if (h >= 8.67){
  document.querySelector(".viii40").style.animation="none";
}
if (h < 8.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii45").style.display="none";
}
if (h >= 8.75){
  document.querySelector(".viii45").style.animation="none";
}
if (h < 8.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii50").style.display="none";
}
if (h >= 8.83){
  document.querySelector(".viii50").style.animation="none";
}
if (h < 8.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii55").style.display="none";
}
if (h >= 8.92){
  document.querySelector(".viii55").style.animation="none";
}
if (h < 9 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".viii00").style.display="none";
}
if (h >= 9){
  document.querySelector(".viii00").style.animation="none";
}



if (h < 9.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix05").style.display ="none";
}
if (h >= 9.083 ) {
  document.querySelector(".ix05").style.animation ="none";
}
 if (h < 9.167 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix10").style.display="none";
}
if (h >= 9.167){
  document.querySelector(".ix10").style.animation="none";
}
 if (h < 9.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix15").style.display="none";
}
if (h >= 9.25){
  document.querySelector(".ix15").style.animation="none";
}
if (h < 9.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix20").style.display="none";
}
if (h >= 9.33){
  document.querySelector(".ix20").style.animation="none";
}
if (h < 9.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix25").style.display="none";
}
if (h >= 9.42){
  document.querySelector(".ix25").style.animation="none";
}
if (h < 9.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix30").style.display="none";
}
if (h >= 9.5){
  document.querySelector(".ix30").style.animation="none";
}
if (h < 9.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix35").style.display="none";
}
if (h >= 9.583){
  document.querySelector(".ix35").style.animation="none";
}
if (h < 9.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix40").style.display="none";
}
if (h >= 9.67){
  document.querySelector(".ix40").style.animation="none";
}
if (h < 9.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix45").style.display="none";
}
if (h >= 9.75){
  document.querySelector(".ix45").style.animation="none";
}
if (h < 9.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix50").style.display="none";
}
if (h >= 9.83){
  document.querySelector(".ix50").style.animation="none";
}
if (h < 9.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix55").style.display="none";
}
if (h >= 9.92){
  document.querySelector(".ix55").style.animation="none";
}
if (h < 10 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".ix00").style.display="none";
}
if (h >= 10){
  document.querySelector(".ix00").style.animation="none";
}

if (h < 10.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x05").style.display ="none";
}
if (h >= 10.083 ){
  document.querySelector(".x05").style.animation ="none";
}
 if (h < 10.167 || document.querySelector(".squedule").classList.contains("open")){
  documen10.querySelector(".x10").style.display="none";
}
if (h >= 10.167){
  document.querySelector(".x10").style.animation="none";
}
 if (h < 10.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x15").style.display="none";
}
if (h >= 10.25){
  document.querySelector(".x15").style.animation="none";
}
if (h < 10.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x20").style.display="none";
}
if (h >= 10.33){
  document.querySelector(".x20").style.animation="none";
}
if (h < 10.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x25").style.display="none";
}
if (h >= 10.42){
  document.querySelector(".x25").style.animation="none";
}
if (h < 10.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x30").style.display="none";
}
if (h >= 10.5){
  document.querySelector(".x30").style.animation="none";
}
if (h < 10.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x35").style.display="none";
}
if (h >= 10.583){
  document.querySelector(".x35").style.animation="none";
}
if (h < 10.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x40").style.display="none";
}
if (h >= 10.67){
  document.querySelector(".x40").style.animation="none";
}
if (h < 10.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x45").style.display="none";
}
if (h >= 10.75){
  document.querySelector(".x45").style.animation="none";
}
if (h < 10.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x50").style.display="none";
}
if (h >= 10.83){
  document.querySelector(".x50").style.animation="none";
}
if (h < 10.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x55").style.display="none";
}
if (h >= 10.92){
  document.querySelector(".x55").style.animation="none";
}
if (h < 11 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".x00").style.display="none";
}
if (h >= 11){
  document.querySelector(".x00").style.animation="none";
}

if (h < 11.083 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi05").style.display ="none";
}
if (h >= 11.083 ) {
  document.querySelector(".xi05").style.animation ="none";
}
 if (h < 11.167 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi10").style.display="none";
}
if (h >= 11.167){
  document.querySelector(".xi10").style.animation="none";
}
 if (h < 11.25 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi15").style.display="none";
}
if (h >= 11.25){
  document.querySelector(".xi15").style.animation="none";
}
if (h < 11.33 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi20").style.display="none";
}
if (h >= 11.33){
  document.querySelector(".xi20").style.animation="none";
}
if (h < 11.42 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi25").style.display="none";
}
if (h >= 11.42){
  document.querySelector(".xi25").style.animation="none";
}
if (h < 11.5 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi30").style.display="none";
}
if (h >= 11.5){
  document.querySelector(".xi30").style.animation="none";
}
if (h < 11.583 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi35").style.display="none";
}
if (h >= 11.583){
  document.querySelector(".xi35").style.animation="none";
}
if (h < 11.67 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi40").style.display="none";
}
if (h >= 11.67){
  document.querySelector(".xi40").style.animation="none";
}
if (h < 11.75 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi45").style.display="none";
}
if (h >= 11.75){
  document.querySelector(".xi45").style.animation="none";
}
if (h < 11.83 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi50").style.display="none";
}
if (h >= 11.83){
  document.querySelector(".xi50").style.animation="none";
}
if (h < 11.92 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi55").style.display="none";
}
if (h >= 11.92){
  document.querySelector(".xi55").style.animation="none";
}
if (h < 12 || document.querySelector(".squedule").classList.contains("open")){
  document.querySelector(".xi00").style.display="none";
}
if (h >= 12){
  document.querySelector(".xi00").style.animation="none";
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