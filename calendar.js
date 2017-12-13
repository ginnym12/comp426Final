var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth();
var currentView = 'weekly'; //what viewtype (weekly, daily, monthly) the calendar is currently projecting
var currentCalendar = null;
var username = $("#selectedName").val();;
var currMonth = month;
var currYear = year;
var ajaxCall = function (view, direction) {
    currMonth += direction;
    if (currMonth==12) {
        currMonth=0; currYear++;
    } else if (currMonth==-1) {
        currMonth=11; currYear--;
    }
    if (view != 'sameView') {
        currentView = view;
    }
    var username = $("#selectedName").val();
    var familyID = "";
    if (username == "") {
        return;
    } else if (username == "all") {
        var x = document.getElementsByClassName("allClass");
        familyID = x[0].id;
    }
    $.ajax("/populateCalendar.php", {
        type: "GET",
        datatype: "JSON",
        data: {
            username: username,
            familyID: familyID
        },
        success: makeNewCalendar,
        error: function () {
            alert("Error: ajax call unsuccessful");
        }
    });
};

var makeNewCalendar = function (data, textStatus, jqXHR) {
    var split = data.split("496VNE5PF6IZ");
    var parsedArray = [];
    for (var i = 0; i < split.length - 1; i++) {
        parsedArray.push(JSON.parse(split[i]));
    }
    if (currentView == "daily") {
        currentCalendar = new DayCalendar(parsedArray);
    } else if (currentView == "weekly") {
        currentCalendar = new WeekCalendar(parsedArray);
    }
}

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

var WeekCalendar = function (schedule) {
    $("#calendar").empty(); $("#month").remove();
    var monthName = monthHelper(currMonth);
    $('<div id="month">' + monthName + " " + currYear + '</div>').prependTo("#table");
    $('<th id="0" class="day">Sunday</th>').appendTo("#calendar");
    $('<th id="1" class="day">Monday</th>').appendTo("#calendar");
    $('<th id="2" class="day">Tuesday</th>').appendTo("#calendar");
    $('<th id="3" class="day">Wednesday</th>').appendTo("#calendar");
    $('<th id="4" class="day">Thursday</th>').appendTo("#calendar");
    $('<th id="5" class="day">Friday</th>').appendTo("#calendar");
    $('<th id="6" class="day">Saturday</th>').appendTo("#calendar");

    var m = 0;
    //iterates through the rows
    for (var i = 0; i < 6; i++) {
        //iterates through the columns
        $('<tr id=rownumber' + i + ' class="row" />').appendTo("#calendar");
        for (var j = 0; j < 7; j++) {
            var field = $('<td id=daynumber' + m + ' class="box">').appendTo("#rownumber" + i);
            m++;
        }
    }

    var firstDay = new Date(currYear, currMonth, 1);
    var lastDay = new Date(currYear, currMonth + 1, 0);
    var j = 1;
    var firstDayIndex = firstDay.getDay();
    var lastDayIndex = firstDay.getDay() + lastDay.getDate();
    for (var i = firstDayIndex; i < lastDayIndex; i++) {
        $('<div class="date">' + (j++) + '</div>').appendTo("#daynumber" + i);
    }

    for (var i = 0; i < schedule.length; i++) {
        var day = schedule[i]["Date"].split("-");
        //checks to see if this event is in the current month and year
        if (day[1] - 1 == currMonth && day[0] == currYear) {
            var dayOfMonth = Number(day[2]) + Number(firstDayIndex) - 1;
            if ($("#selectedName").val() == 'all') {
                $('<div class="usrname">Username: ' + schedule[i]["Username"] + '</div>').appendTo("#daynumber" + dayOfMonth);
            }
            console.log(schedule[i]);
            $('<div class="event">' + schedule[i]["Event"] + '</div>').appendTo("#daynumber" + dayOfMonth);
            $('<div class="location">' + schedule[i]["Location"] + '</div><br>').appendTo("#daynumber" + dayOfMonth);
            $('<div class="time">' + schedule[i]["Time"] + '</div><br>').appendTo("#daynumber" + dayOfMonth);
        }
    }

    $('#' + Day.TODAY).css('border', '5px solid blue');


};

var DayCalendar = function (username) {
    $("#calendar").empty();
    for (var i = 0; i < 24; i++) {
        $('<tr id=rownumber' + i + ' class="row" />').appendTo("#calendar");
        for (var j = 0; j < 2; j++) {
            var cell = $('<td class="box">');
            cell.appendTo("#rownumber" + i);
            if (j == 0) {
                putTime(cell, i);
                cell.css("width", "5px");
            }
        }
    }
    // $('<colgroup><col style="display:inline"></colgroup>').appendTo('#calendar');
}

var putTime = function (cell, time) {
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

var monthHelper = function (monthNumber) {
    switch (monthNumber) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
};