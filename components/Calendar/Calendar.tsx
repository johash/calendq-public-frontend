import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";
import moment from "moment";
import Day from "./Day/Day";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [allDays, setAllDays] = useState([]);

  const addMonth = () => {
    let date = moment(currentDate);
    date.add(1, "months");
    setCurrentDate(date);
  };

  const subtractMonth = () => {
    let date = moment(currentDate);
    date.subtract(1, "months");
    setCurrentDate(date);
  };

  const getDatesInMonth = () => {
    let days = moment(currentDate.format("YYYY-MM")).daysInMonth();
    return days;
  };

  const getStartOfMonth = () => {
    let startDay = moment(currentDate.format("YYYY-MM-DD"))
      .startOf("month")
      .format("d");
    return +startDay;
  };

  useEffect(() => {
    let startDay = getStartOfMonth();
    let daysOfMonth = getDatesInMonth();
    let emptyDays = [];
    for (let index = 0; index < startDay; index++) {
      emptyDays.push("");
    }
    let monthDays = [];
    for (let index = 1; index <= daysOfMonth; index++) {
      monthDays.push(index);
    }
    setAllDays(() => {
      let days = [...emptyDays, ...monthDays];
      return days;
    });
  }, [currentDate]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-5 border-b-[1px]">
        <div className="flex items-center justify-center rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100">
          <MdArrowBackIosNew color="#134563" onClick={subtractMonth} />
        </div>
        <span className="font-medium text-lg">
          {currentDate.format("MMMM")}
          <span className="ml-2">{currentDate.format("YYYY")}</span>
        </span>
        <div
          className="flex items-center justify-center rounded-full h-8 w-8 cursor-pointer hover:bg-gray-100"
          onClick={addMonth}
        >
          <MdArrowForwardIos color="#134563" />
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-between py-5 px-6 text-[#9B9B9B] text-base">
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
          <li>S</li>
        </ul>
        <div className="grid gap-1 grid-cols-7 grid-rows-6 ">
          {allDays.map((day, index) => {
            return <Day day={day} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
