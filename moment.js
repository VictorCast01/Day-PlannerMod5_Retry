setInterval(() => {
    var today = moment();
    $(".time-block").text(today.format("dddd MMM Do, YYYY hh:mm:ss"));
    },1000)
    
    var currentTime = moment().hour()
    console.log(currentTime)
    
    var blockHours = ('#9', '#10', '#11', '#12', '#1', '#2','#3', '#4', '#5')
    var hour = document.querySelector('.hour');
    var saveBtn9 = document.querySelector('.saveBtn9');
    var saveBtn10 = document.querySelector('.saveBtn10');
    var saveBtn11 = document.querySelector('.saveBtn11');
    var saveBtn12 = document.querySelector('.saveBtn12');
    var saveBtn13 = document.querySelector('.saveBtn13');
    var saveBtn14 = document.querySelector('.saveBtn14');
    var saveBtn15 = document.querySelector('.saveBtn15');
    var saveBtn16 = document.querySelector('.saveBtn16');
    var saveBtn17 = document.querySelector('.saveBtn17');
    var present = document.querySelector('#present');
    var future = document.querySelector('#future');
    var past = document.querySelector('#past');
    var col9 = document.querySelector('.col-10');
    var col10 = document.querySelector('.col-10 txt10');
    var textInput = localStorage.getItem("");
    var time9 = document.getElementById("#9");
    var time10 = document.getElementById("#10");
    var time11 = document.getElementById("#11");
    var time12 = document.getElementById("#12");
    var time1 = document.getElementById("#1");
    var time2 = document.getElementById("#2");
    var time3 = document.getElementById("#3");
    var time4 = document.getElementById("#4");
    var time5 = document.getElementById("#5");

    function saveBtn9() {
      localStorage.setItem(".col-10", time9.val());
      console.log(time9.val());
      console.log(window);
    }

    

    var timeBlock = [time9, time10, time11, time12, time1, time2, time3, time4, time5];

    
    if (time9 < currentTime) {
      col9.setAttribute("style", "background-color: #d3d3d3");
    }else if (time9 > currentTime) {
      col9.setAttribute("style", "background-color: #77dd77");
    }