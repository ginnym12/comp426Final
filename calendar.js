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
    //constants for day
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
export {Day};

console.log(Day.TUESDAY);

var d = new Date();
switch (d.getDay()) {
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
