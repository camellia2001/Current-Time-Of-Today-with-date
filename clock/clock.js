setInterval(() => {
    let a;
    let date;
    let t;
     a=new Date();
     date=a.toLocaleDateString();
     t=a.getDay();
     if(t==0)
     s="SUNDAY";
     else if(t==1)
     s="MONDAY";
     else if(t==2)
     s="TUESDAY";
     else if(t==3)
     s="WEDNESDAY";
     else if(t==4)
     s="THURSDAY";
     else if(t==5)
     s="FRIDAY";
    else
    s="SATURDAY";
    document.getElementById('date').innerHTML=date;
    document.getElementById('day').innerHTML=s;
    let time=a.getHours()+"Hrs :"+a.getMinutes()+"Mins :"+a.getSeconds()+"Secs";
    document.getElementById('time').innerHTML=time;
},1000);
