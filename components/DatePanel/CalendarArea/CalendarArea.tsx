import { useState } from "react";
import Image from "next/image";

import Calendar from "../../Calendar/Calendar";

const CalendarArea = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex gap-3 w-[820px] h-[440px] ">
      <div className="w-[50%] bg-white p-2 rounded-xl drop-shadow-md">
        <Calendar />
      </div>
      <div className="w-[50%] bg-white p-2 rounded-xl drop-shadow-md flex items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="/assets/icons/hands.png"
            alt="Hand Image"
            width={145}
            height={90}
          />
          <span className="text-[#9B9B9B] text-sm mt-5">
            First pick a date!
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalendarArea;
