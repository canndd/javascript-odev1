const myName= prompt("Adınızı yazınız");
const Name = document.querySelector("#myName");
Name.innerHTML=`${myName.length > 2 ? myName : "Kullanıcı adınızı yazmalısınız!"}`;

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function showTime() {
const gün = new Date();
let h = gün.getHours();
let d = gün.getMinutes();
let s = gün.getSeconds();
let b = days[gün.getDay()];
let info = document.querySelector("#myClock");
info.innerHTML=`${h}:${d}:${s} ${b}`;
}
setInterval(showTime, 1000);

showTime();




