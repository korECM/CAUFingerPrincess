import React, { useState, useCallback, useEffect, useRef } from "react";
import Calendar from "@toast-ui/react-calendar";
import getSchoolSchedule from "../../lib/parsing/schoolSchedule";
import ErrorAnimation from "../../useful/error/error";
import "tui-calendar/dist/tui-calendar.css";

const myTheme = {
  "month.day.fontSize": "10px",
  "month.schedule.height": "12px",
  "month.dayname.fontSize": "10px",
  "month.dayname.height": "20px"
};

const dataToSchedule = data => {
  let result = [];
  result = data.map((e, index) => {
    return {
      id: `${index + 1}`,
      calendarId: "1",
      title: e.title,
      category: "time",
      dueDateClass: "",
      start: new Date(e.start.year, e.start.month - 1, e.start.day)
        .toISOString()
        .replace(".000Z", "+09:00"),
      end: new Date(e.end.year, e.end.month - 1, e.end.day)
        .toISOString()
        .replace(".000Z", "+09:00")
    };
  });
  return result;
};

const CalendarUI = () => {
  let [data, setData] = useState([]);
  let [error, setError] = useState(false);
  let [day, setDay] = useState(
    `${new Date().getFullYear()}.${new Date().getMonth() + 1}`
  );
  let calendarRef = useRef();
  useEffect(() => {
    const getData = async () => {
      setError(false);
      console.log("call");
      let today = new Date();
      try {
        const data = await getSchoolSchedule(today.getFullYear());
        setData(data);
        dataToSchedule(data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    getData();
  }, []);

  const prev = useCallback(() => {
    calendarRef.current.getInstance().prev();
    setDayCallback();
  }, [calendarRef]);
  const today = useCallback(() => {
    calendarRef.current.getInstance().today();
    setDayCallback();
  }, [calendarRef]);
  const next = useCallback(() => {
    calendarRef.current.getInstance().next();
    setDayCallback();
  }, [calendarRef]);

  const setDayCallback = useCallback(() => {
    let date = calendarRef.current
      .getInstance()
      .getDate()
      .toDate();
    setDay(`${date.getFullYear()}.${date.getMonth() + 1}`);
  }, [calendarRef]);

  return (
    <div className="calendarWrapper">
      {error ? (
        <ErrorAnimation height={300} width={300} />
      ) : (
        <div>
          <div
            style={{
              display: "table",
              margin: "0 auto",
              marginTop: "100px",
              fontSize: "30px",
              fontWeight: "bold"
            }}
          >
            {day}
          </div>
          <div style={{ display: "table", margin: "0 auto" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "5px",
                margin: "20px 5px",
                padding: "7px 30px"
              }}
              onClick={prev}
            >
              이전
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "80px",
                margin: "20px 5px",
                padding: "7px 10px"
              }}
              onClick={today}
            >
              오늘
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "5px",
                margin: "20px 5px",
                padding: "7px 30px"
              }}
              onClick={next}
            >
              다음
            </button>
          </div>
          <div id="calendar">
            <Calendar
              ref={calendarRef}
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
              schedules={dataToSchedule(data)}
              disableDblClick={true}
              disableClick={false}
              isReadOnly={true}
              useDetailPopup
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
        </div>
      )}
    </div>
  );
};

export default CalendarUI;
