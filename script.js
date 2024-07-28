let h = document.querySelector('#hours')
let m = document.querySelector('#minute')
let s = document.querySelector('#second')

setInterval(function (){
    let now = new Date();
    let hr = String(now.getHours()).padStart(2, '0');
    let min = String(now.getMinutes()).padStart(2, '0');
    let sec = String(now.getSeconds()).padStart(2, '0');
    h.innerHTML = hr;
    m.innerHTML = min;
    s.innerHTML = sec;
}, 1000);