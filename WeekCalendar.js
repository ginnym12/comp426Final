// //const Day = require('./calendar.js');
// var WeekCalendar = function () {
//     //pull from database and insert it into array format?

//     // TO DO:
//     // this will make 5 rows for dates, but need to account for cases where
//     // only 4 rows are needed or you need to accont for 6 rows
//     $("#calendar").empty();
//     $('<th class = "day">Sunday</th>').appendTo("#calendar");
//     $('<th class = "day">Monday</th>').appendTo("#calendar");
//     $('<th class = "day">Tuesday</th>').appendTo("#calendar");
//     $('<th class = "day">Wednesday</th>').appendTo("#calendar");
//     $('<th class = "day">Thursday</th>').appendTo("#calendar");
//     $('<th class = "day">Friday</th>').appendTo("#calendar");
//     $('<th class = "day">Saturday</th>').appendTo("#calendar");
//     for (var i = 0; i < 5; i++) {
//         $('<tr id=rownumber' + i + ' class="row" />').appendTo("#calendar");
//         for (var j = 0; j < 7; j++) {
//             var fieldElement = $('<td class="box">').appendTo("#rownumber" + i);
//         }
//     }
//     var d = new Date();
//     console.log(Day.sunday);
    
//     if (Day.TODAY == Day.MONDAY) {
//         console.log('it monday');
//     } else {
//         console.log('sike');
//     }
//     console.log("Day: " + d.getDay());
//     console.log("Day.Monday: " + Day.Monday);
//     console.log("Day.TODAY: " + Day.Today);
//     // console.log(d.getFullYear());
//     // console.log(d.getDate());
//     // console.log(d.getHours());
//     // console.log(d.getMinutes());
//     // console.log(d.getDay());
// };
