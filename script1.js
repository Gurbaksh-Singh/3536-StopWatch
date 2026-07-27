const display=document.getElementById("time");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const lap=document.getElementById("lap");
const laps=document.getElementById("laps");


let hour=0;
let minutes=0;
let second=0;
let millisecond=0;

let timer = null;

start.addEventListener("click",()=>{
    
    
    if(timer!=null){
        return
    }
    timer=setInterval(()=>{
        millisecond++;
        if(millisecond==100){
            millisecond=0;
            second++;
        }
        
        if(second==100){
            second=0;
            minutes++;
        }
        if(minutes==100){
            minutes=0;
            hour++;
        }

        updatetime()
    }, 10)
})
stop.addEventListener("click",()=>{
    clearInterval(timer);
    timer =null
})
reset.addEventListener("click",()=>{
    clearInterval(timer);
    timer=null;
    hour=0;
    minutes=0;
    second=0;
    millisecond=0;
    updatetime()
    laps.innerText=""
})
lap.addEventListener("click",()=>{
    const li=document.createElement("li");
    li.innerText=display.innerHTML

    laps.appendChild(li)
})
function updatetime(){
    let h= hour<10?"0"+hour:hour;
    let m= minutes<10?"0"+minutes:minutes;
    let s= second<10?"0"+second:second;
    let ms= millisecond<10?"0"+millisecond:millisecond;

    display.innerText=`${h}:${m}:${s}:${ms}`
}
