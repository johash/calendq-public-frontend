import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";
import moment from "moment";

const Calendar = () => {
  const [date, setDate] = useState(moment());
  const [year, setYear] = useState(moment().year());
  const [today, setToday] = useState(moment(new Date()).format("DD"));
  let blankDays = [];
  let daysInMonth = [];
  let total = [];

  const getFirstDayOfMonth = () => {
    return moment(date).startOf("month").format("d");
  };

  const getDaysInMonth = () => {
    return moment().daysInMonth();
  };

  for (let index = 0; index < +getFirstDayOfMonth(); index++) {
    blankDays.push("");
  }
  for (let index = 1; index <= getDaysInMonth(); index++) {
    daysInMonth.push(index + "");
  }
  total = [...blankDays, ...daysInMonth];
  console.log(today);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-5 border-b-[1px]">
        <div className="flex items-center justify-center rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100">
          <MdArrowBackIosNew color="#134563" />
        </div>
        <span className="font-medium text-lg">September 2022</span>
        <div className="flex items-center justify-center rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100">
          <MdArrowForwardIos color="#134563" />
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-between py-6 px-6 text-[#9B9B9B] text-base">
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
          <li>S</li>
        </ul>
        <div className="grid gap-1 grid-cols-7 grid-rows-6 gap-y-6">
          {total.map((day) => {
            return (
              <div
                key={day}
                className="text-center flex items-center justify-center"
              >
                <p className={day === today ? "font-bold" : ""}>{day}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
