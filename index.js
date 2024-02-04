function clock(){
    const now = new Date();
    let hours = String(now.getHours());
    let minutes = String(now.getMinutes());
    let seconds = String(now.getSeconds());
    let milliseconds = String(now.getMilliseconds());
    if(Number(milliseconds)<10){milliseconds='0'+milliseconds;}
    if(Number(milliseconds)<100){milliseconds='0'+milliseconds;}
    if(Number(seconds)<10){seconds='0'+seconds;}
    if(Number(minutes)<10){minutes='0'+minutes;}
    if(Number(hours)<10){hours='0'+hours;}
    document.getElementById('now').textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
    let day = String(now.getDate());
    let month = String(now.getMonth()+1);
    let year = String(now.getFullYear());
    if(Number(day)<10){day='0'+day;}
    if(Number(month)<10){month='0'+month;}
    document.getElementById('today').textContent=`${day}/${month}/${year}`;
}
setInterval(clock,1);

