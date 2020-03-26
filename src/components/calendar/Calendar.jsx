import React from "react";
import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";

const myTheme = {
  // Theme object to extends default dark theme.
  'month.day.fontSize': '10px',
  'month.schedule.height': '12px',
  'month.dayname.fontSize': '10px',
  'month.dayname.height': '20px',
};

let today = new Date();

const CalendarUI = () => (
  <div id="calendar">
    <Calendar
    height="100%"
      calendars={[
        {
          id: "0",
          name: "Private",
          bgColor: "#9e5fff",
          borderColor: "#9e5fff"
        },
        {
          id: "1",
          name: "Company",
          bgColor: "#00a9ff",
          borderColor: "#00a9ff",
          color: "#FFFFFF"
        }
      ]}
      schedules={[
        {
          id: "1",
          calendarId: "1",
          title: "중간고사",
          category: "time",
          dueDateClass: "",
          start: "2020-03-25T14:00:00",
          end: "2020-03-27T15:00:00"
        },
        {
            id: "2",
            calendarId: "0",
            title: "등록금 납부 기간",
            category: "time",
            dueDateClass: "",
            start: "2020-03-27T14:00:00",
            end: "2020-03-27T15:00:00"
          },
          {
            id: "3",
            calendarId: "1",
            title: "기말고사",
            category: "time",
            dueDateClass: "",
            start: "2020-03-24T14:00:00",
            end: "2020-03-28T15:00:00"
          },
      ]}
      disableDblClick={true}
      disableClick={false}
      isReadOnly={true}
      month={{
        startDayOfWeek: 0
      }}
      view="month"
      scheduleView
      theme={myTheme}
      timezones={[
        {
          timezoneOffset: 540,
          displayLabel: "GMT+09:00",
          tooltip: "Seoul"
        }
      ]}
    />
  </div>
);

export default CalendarUI;
