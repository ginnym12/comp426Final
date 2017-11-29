var calendar = function (view) {
    //view represents daily, weekly, monthly, yearly
    var calendarType = null;
    if (view == daily) {
        console.log('daily');
        calendarType = new DayCalendar();
        //make a new function for each of day week month and year?
    } else if (view == weekly) {
        console.log('weekly');
        calendarType = new WeekCalendar();
    } else if (view == monthly) {
        console.log('monthly');
        calendarType = new MonthCalendar();
    } else if (view == yearly) {
        console.log('yearly');
        calendarType = new YearCalendar();
    }
};

var Day = {
    //constants for day defined in JS
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    //Today's day
    TODAY: null
};

var date = new Date();
console.log(date.getDay());
switch (new Date().getDay()) {
    case 0:
        Day.TODAY = Day.SUNDAY;
        break;
    case 1:
        Day.TODAY = Day.MONDAY;
        break;
    case 2:
        Day.TODAY = Day.TUESDAY;
        break;
    case 3:
        Day.TODAY = Day.WEDNESDAY;
        break;
    case 4:
        Day.TODAY = Day.THURSDAY;
        break;
    case 5:
        Day.TODAY = Day.FRIDAY;
        break;
    case 6:
        Day.TODAY = Day.SATURDAY;
}

var WeekCalendar = function () {
    //pull from database and insert it into array format?

    // TO DO:
    // this will make 5 rows for dates, but need to account for cases where
    // only 4 rows are needed or you need to accont for 6 rows
    $("#calendar").empty();
    // $('<div id="weekof">' + date.getDate() + '</div>').prependTo("#table");
    $('<th id="0" class="day">Sunday</th>').appendTo("#calendar");
    $('<th id="1" class="day">Monday</th>').appendTo("#calendar");
    $('<th id="2 class="day">Tuesday</th>').appendTo("#calendar");
    $('<th id="3" class="day">Wednesday</th>').appendTo("#calendar");
    $('<th id="4" class="day">Thursday</th>').appendTo("#calendar");
    $('<th id="5" class="day">Friday</th>').appendTo("#calendar");
    $('<th id="6" class="day">Saturday</th>').appendTo("#calendar");
    for (var i = 0; i < 5; i++) {
        $('<tr id=rownumber' + i + ' class="row" />').appendTo("#calendar");
        for (var j = 0; j < 7; j++) {
            $('<td class="box">').appendTo("#rownumber" + i);
        }
    }
    $('#' + Day.TODAY).css('border', '5px solid red');
};

var DayCalendar = function () {
    $("#calendar").empty();
    for (var i = 0; i < 24; i++) {
        $('<tr id=rownumber' + i + ' class="row" />').appendTo("#calendar");
        for (var j = 0; j < 2; j++) {
            var cell = $('<td class="box">');
            cell.appendTo("#rownumber" + i);
            if (j==0) {
                putTime(cell, i);
                cell.css("width", "5px");
            }
        }
    }
    // $('<colgroup><col style="display:inline"></colgroup>').appendTo('#calendar');
}

var putTime = function(cell, time) {
    if (time <= 11) {
        cell.text('AM');
    } else {
        cell.text('PM');
    }
    if (time % 12 == 0) {
        cell.text(12 + cell.text());
    } else {
        cell.text(time % 12 + cell.text());
    }
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}