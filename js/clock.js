const myName= prompt("Adınızı yazınız");
const Name = document.querySelector("#myName");
Name.innerHTML=`${myName.length > 2 ? myName : "Kullanıcı adınızı yazmalısınız!"}`;

