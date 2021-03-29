const curDate = document.getElementById("date");
let weathericon = document.getElementById("weathercon");

const tempStatus = "Clouds";

const getCurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thurday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = (weekday[currentTime.getDay()]);
    return day;
}

const getCurrentTime = ()=>{
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

    let now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    
    let hours = now.getHours();
    let mins = now.getMinutes();

    let period = "AM";

    if(hours > 11){
        period = "PM";
        if(hours > 12) hours -= 12;
    }
    if(mins < 10){
        mins = "0" + mins;
    }

    return `${month}${date} | ${hours}:${mins}${period}`;
}
 curDate.innerHTML = getCurrentDay() + " | " +  getCurrentTime() ;
//getCurrentDay();