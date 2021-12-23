//toolbar JS
const lang = document.querySelector("#LANG");
lang.addEventListener("click",e=>{
    lang.innerText = "EN";
})
//noti about custom button
const cus=document.querySelector("#custom");
cus.onclick = function noti(){  
    cus.disabled = true;
    const container = document.querySelector("#con") ;   
    const notiBG = document.createElement("div");   
    notiBG.classList.add("Notibar");
    notiBG.innerHTML = `<img class="head" src="nav.png">
    <h3 class="body">Chưa được hỗ trợ(không code)</h3>
    <img class="tail" src="datr.png">`;   
    container.appendChild(notiBG);
    setTimeout(()=>{
        container.removeChild(notiBG);
        cus.disabled = false;
    },2000);  
    
}
//testing input (type text and click the bell icon)
const inputc =document.querySelector("#Sreachinput");
const bell = document.querySelector("#bell");
bell.addEventListener("click",e=>{
    document.querySelector("#LANG").innerText = inputc.value;
})
// QR code troll when hover
const QRtroll=document.querySelector("#avt");
QRtroll.addEventListener("mouseover",e=>{
    const QRcode = document.querySelector("#QRcode");
    const dive = document.createElement("div");
    dive.classList.add("Codew");
    dive.id ="Codew2";
    dive.innerHTML = `<img id="realQRcode" src="rick.jpg">`;
    QRcode.appendChild(dive);
})
QRtroll.addEventListener("mouseleave",e=>{
    const QRcode = document.querySelector("#QRcode");
    const didid = document.querySelector("#Codew2");
    QRcode.removeChild(didid);
})
