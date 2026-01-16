function showTime(){
    let now = new Date()

    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds();

    h = h<10? 'o'+ h:h;
    m = m<10? 'o'+m:m;
    s = s<10? 'o'+ s:s;

    document.getElementById('clock') .innerHTML = h+":"+ m + ":" + s;

}

setInterval(showTime,1000);
showTime()


